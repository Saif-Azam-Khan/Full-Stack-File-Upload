import "./App.css";
import UploadForm from "./components/uploadForm/UploadForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
      </Container>
    </div>
  );
}

export default App;
