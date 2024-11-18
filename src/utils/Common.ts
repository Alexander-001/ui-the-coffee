export const base64ToPdfDownload = (base64String: string) => {
  const binaryString = atob(base64String);
  const unit8Array = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    unit8Array[i] = binaryString.charCodeAt(i);
  }
  const blob = new Blob([unit8Array], { type: "image/jpeg" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Image.jpeg";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
