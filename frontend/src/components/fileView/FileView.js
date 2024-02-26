import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import './FileView.css'
function FileView() {
  const [fileData, setFileData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let headersList = {
        Accept: "*/*",
      };

      let reqOptions = {
        url: "http://localhost:8080/api/file/getAll",
        method: "GET",
        headers: headersList,
      };

      let response = await axios.request(reqOptions);
      setFileData(response.data);
    };
    fetchData();
  }, []);

  const handleDelete = (name) => {
    const deleteEntryByName = async (name) => {
      try {
        const response = await axios.delete(
          `http://localhost:8080/api/file/delete/${name}`
        );
        console.log("Entry deleted:", response.data);
      } catch (error) {
        console.error("Error deleting entry:", error);
      }finally{
        window.location.reload();
      }
    };
    deleteEntryByName(name);
  };
  return (
    <Container className="cover">
      <Row >
        {fileData.map((file, index) => (
          <Col key={index}>
            <Card style={{ width: "15rem" }} className="fileCard">
              <Card.Body>
                <h5 className="title">{file.fileName}</h5>
                <Card.Text>Type of the file: {file.type}</Card.Text>
                <Card.Text>Size of the file: {Math.round(file.size/1024)}KB</Card.Text>
                <ButtonGroup>
                  <Button href={file.url} style={{backgroundColor:'#00bceb', border:'none'}}>Download</Button>
                  <Button
                    style={{backgroundColor:'#a115b9',border:'none'}}
                    onClick={() => {
                      handleDelete(file.fileName);
                    }}
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FileView;
