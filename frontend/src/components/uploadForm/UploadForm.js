import { useState, useRef } from "react";
import "./UploadForm.css";
import Button from "react-bootstrap/Button";
import { uploadFileHelper } from "../../utils/uploadFileHelper";
import { Form } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

function UploadForm() {
  const [fileName, setFileName] = useState("");
  const [progress, setProgress] = useState(0);
  const inputRef = useRef();
  if (progress === 100) {
    window.location.reload();
  }

  const handleDrop = (e) => {
    e.preventDefault();
    handleUpload(e.dataTransfer.files[0]);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  function handleUpload(file) {
    if (file) {
      setFileName(file.name);
      uploadFileHelper(file, setProgress);
    } else {
      console.log("File selection not complete !");
    }
  }

  return (
    <div>
      <Form
        className="form_container"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {fileName ? (
          <h2>{fileName}</h2>
        ) : (
          <h2>
            Drag and drop file to upload,<br></br> or click the button
          </h2>
        )}
        <input
          hidden
          type="file"
          ref={inputRef}
          onInput={(e) => handleUpload(e.target.files[0])}
        />
        {fileName && (
          <div className="progress">
            <ProgressBar
              now={100}
              style={{ width: `${progress}%` }}
              animated
              label={`${progress}%`}
            />
          </div>
        )}
        <Button variant="info" onClick={() => inputRef.current.click()}>
          Upload
        </Button>
      </Form>
    </div>
  );
}

export default UploadForm;
