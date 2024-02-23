import { useState, useRef } from "react";
import "./UploadForm.css";
import Button from "react-bootstrap/Button";
import { uploadFileHelper } from "../../utils/uploadFileHelper";

function UploadForm() {
  const [fileUploadError, setFileUploadError]=useState("")
  const inputRef = useRef();

  const handleDrop = (e) => {
    e.preventDefault();
    uploadFileHelper(e.dataTransfer.files);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // const handleUpload = (files) => {
  //   if(files.length>1){
  //     setFileUploadError("Multiple files are not accepted !")
  //   }
  //   else if(files.length===1){
  //     uploadFileHelper(files);
  //   }
  //   else{
  //     setFileUploadError("File selection canceled !")
  //   }
  //   console.log(fileUploadError);
  // };

  return (
    <div
      className="form_container"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <h2>
        Drag and drop file to upload,<br></br> or click the button
      </h2>
      <input
        hidden
        type="file"
        onInput={(e) =>uploadFileHelper(e.target.files)}
        ref={inputRef}
      ></input>
      <Button variant="info" onClick={() => inputRef.current.click()}>
        Click to upload
      </Button>
    </div>
  );
}

export default UploadForm;
