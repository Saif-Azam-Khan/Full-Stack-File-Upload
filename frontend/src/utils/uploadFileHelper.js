import axios from "axios";

export const uploadFileHelper = async (file, uploadProgress) => {
  
  if (file.size>5*1024*1024){
    alert('Warning: File should be less than 5MB in size')
    window.location.reload(); 
  } 
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
  }finally{
    window.location.reload();
  }
};
