export const uploadFileHelper = (file) => {
  const { name, size, type } = file[0];
  const formData = new FormData();
  formData.append("file", file[0]);
  fetch("http://localhost:8080/api/file/upload", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("error", error);
    });
};
