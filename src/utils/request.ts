import axios, { AxiosRequestConfig } from "axios";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

const baseURL: string = "http://localhost:8080";
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
  const url = (baseURL || window?.location?.origin || "") + "/" + service;
  let settingsHeaders: { [key: string]: string } = {
    Accept: "application/json",
    "Content-Type": "application/json; charset=UTF-8",
    ...headers,
  };
  if (method === "GET" || body instanceof FormData) {
    delete settingsHeaders["Content-Type"];
  }
  if (tokenInfo) settingsHeaders.Authorization = `Bearer ${tokenInfo}`;
  let settings: any = {
    method,
    headers: settingsHeaders,
  };
  if (body instanceof FormData) {
    if (serviceParam) {
      body.append("serviceParam", serviceParam);
    }
    settings.body = body;
  } else {
    let settingBody: any = {};
    if (serviceParam) settingBody.serviceParam = serviceParam;
    if (Object.keys(body).length > 0) settingBody = { ...settingBody, ...body };
    if (method !== "GET" && settingBody) {
      settings.body = JSON.stringify(settingBody);
    }
  }
  const queryString = new URLSearchParams(params).toString();
  const endpoint = queryString ? `${url}?${queryString}` : url;
  return new Promise((resolve, reject) => {
    const axiosConfig: AxiosRequestConfig = {
      url: endpoint,
      method: settings.method,
      headers: settings.headers,
      data: settings.body || null,
    };
    axios(axiosConfig)
      .then((response) => resolve(response.data))
      .catch((error) => {
        if (error.response) {
          reject({ status: error.response.status, ...error.response.data });
        } else if (error.request) {
          reject({
            status: 0,
            message: "No se recibió respuesta del servidor.",
            error: error.message,
          });
        } else {
          reject({
            status: 0,
            message: "Error en la solicitud.",
            error: error.message,
          });
        }
      });
  });
}
