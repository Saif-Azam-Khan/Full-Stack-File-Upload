import axios from "axios";

export const uploadFileHelper = async (fd, uploadProgress) => {
  const onUploadProgress = (event) => {
    const percentage = Math.round((100 * event.loaded) / event.total);
    uploadProgress(percentage);
  };

  try {
    const response = await axios.post("http://localhost:8080/api/file/upload", fd, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  } catch (error) {
    console.log(error.config);
  }
};
