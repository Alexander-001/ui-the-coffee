export const deleteImageCloudinary = async (publicId: string) => {
  let isErrorDeleteImage: boolean = false;
  try {
    const timestamp = Math.floor(Date.now() / 1000);
    const stringToSign = `public_id=${publicId}&timestamp=${timestamp}fZi6oS1lSC8INkSTT94yxnNHejo`;
    const signature = CryptoJS.SHA1(stringToSign).toString();
    const data = new FormData();
    data.append("public_id", publicId);
    data.append("timestamp", timestamp.toString());
    data.append("signature", signature);
    data.append("api_key", "588833946152368");
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/doubv721t/image/destroy",
      {
        method: "POST",
        body: data,
      }
    );
    const result = await response.json();
    if (result.result !== "ok") isErrorDeleteImage = true;
  } catch (error) {
    isErrorDeleteImage = true;
  }
  return { isErrorDeleteImage };
};
