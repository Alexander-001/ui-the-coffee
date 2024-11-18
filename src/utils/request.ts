import { ApiResponseError } from "@/interfaces/service.interface";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

let tokenInfo: string = "";

export function requestSetToken(token: string) {
  tokenInfo = token;
}

export async function request(
  service: string = "",
  serviceParam?: string,
  method: HttpMethod = "POST",
  body: { [key: string]: any } = {},
  params: { [key: string]: any } = {},
  headers: { [key: string]: any } = {},
  files: Array<{ filename: string; file: File }> = []
) {
  if (files && files.length > 0) {
    const data = new FormData();
    files.forEach((item) => {
      data.append(item.filename, item.file);
    });
    Object.keys(body).forEach((key) => {
      data.append(key, body[key]);
    });
    return await serviceRequest(service, serviceParam, method, data, headers);
  }
  return await serviceRequest(
    service,
    serviceParam,
    method,
    body,
    params,
    headers
  );
}

export async function serviceRequest(
  service: string = "",
  serviceParam: string | false = false,
  method: HttpMethod = "POST",
  body: { [key: string]: any } | FormData = {},
  params: { [key: string]: string } = {},
  headers: { [key: string]: string } = {}
): Promise<any> {
  const baseURL: string = "http://localhost:8080";
  const url = (baseURL || window?.location?.origin || "") + "/" + service;
  let settingsHeaders: { [key: string]: string } = {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...headers,
  };
  if (method === "GET") {
    delete settingsHeaders["Content-Type"];
  }
  if (tokenInfo) {
    settingsHeaders.Authorization = `Bearer ${tokenInfo}`;
  }
  let settings: any = {
    method,
    headers: settingsHeaders,
  };
  let settingBody: any = {};
  if (body instanceof FormData) {
    if (serviceParam && serviceParam !== "") {
      body.append("serviceParam", serviceParam);
    }
    settingBody = body;
  } else {
    if (serviceParam && serviceParam !== "") {
      settingBody.serviceParam = serviceParam;
    }
    if (Object.keys(body).length > 0) {
      settingBody = { ...settingBody, ...body };
    }
    if (method !== "GET" && settingBody) {
      settings.body = JSON.stringify(settingBody);
    }
  }
  const endpoint = url.toString();
  return new Promise((resolve, reject) => {
    fetch(endpoint, settings)
      .then((response) => response.json())
      .then((response: any) => {
        const errorData = response as ApiResponseError;
        if (errorData?.notifications) reject({ ...errorData, service });
        if (response?.Error) reject({ ...response, service });
        return response;
      })
      .then(resolve)
      .catch((err) => {
        reject(err);
      });
  });
}
