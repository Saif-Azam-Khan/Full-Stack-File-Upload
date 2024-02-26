import axios from "axios";

export const uploadFileHelper = async (file, uploadProgress) => {
  const formData = new FormData();
  formData.set("file", file);
  const onUploadProgress = (event) => {
    const percentage = Math.round((100 * event.loaded) / event.total);
    uploadProgress(percentage);
  };

  try {
    await axios.post("http://localhost:8080/api/file/toCloud", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  } catch (error) {
    console.log(error.config);
  }
};
