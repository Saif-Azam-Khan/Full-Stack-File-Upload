import axios from "axios";

export const uploadFileHelper = async (file, uploadProgress) => {
  let fileType = file.name.split(".").slice(-1);
  const formData = new FormData();
  formData.set("file", file);
  formData.set("fileName", file.name);
  formData.set("size", file.size);
  formData.set("type", fileType);

  const onUploadProgress = (event) => {
    const percentage = Math.round((100 * event.loaded) / event.total);
    uploadProgress(percentage);
  };

  try {
    const response = await axios.post("http://localhost:8080/api/file/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  } catch (error) {
    console.log(error.config);
  }
};
