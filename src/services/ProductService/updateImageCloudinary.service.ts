export const updateImageCloudinary = async (file: Blob, publicId: string) => {
  let isErrorUpdateImage: boolean = false;
  let url: string = "";
  try {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "products_images");
    data.append("public_id", publicId);
    data.append("cloud_name", "doubv721t");
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/doubv721t/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const updatedImage = await response.json();
    if (updatedImage.url) url = updatedImage.url;
    else isErrorUpdateImage = true;
  } catch (error) {
    isErrorUpdateImage = true;
    url = "";
  }

  return { isErrorUpdateImage, url };
};
