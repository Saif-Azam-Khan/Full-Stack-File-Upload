import "./App.css";
import UploadForm from "./components/uploadForm/UploadForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FileView from "./components/fileView/FileView";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <h1>File upload App</h1>
        </Row>
        <Row>
          <UploadForm />
        </Row>
        <br></br>
        <br></br>
        <Row>
          <FileView />
        </Row>
      </Container>
    </div>
  );
}

export default App;
