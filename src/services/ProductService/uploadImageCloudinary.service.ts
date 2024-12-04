export const uploadImageCloudinary = async (file: Blob) => {
  let isErrorUploadImage: boolean = false;
  let url: string = "";
  try {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "products_images");
    data.append("cloud_name", "doubv721t");
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/doubv721t/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const uploadImageURL = await response.json();
    url = uploadImageURL.url ?? "";
  } catch (error) {
    url = "";
    isErrorUploadImage = true;
  }
  return { isErrorUploadImage, url };
};
