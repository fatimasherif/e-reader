import React from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import { Component } from "react";
import "../../Css/Addbook.css";
import { Link } from "react-router-dom";
import "../../Css/Addchapter.css";

class Addchapter extends Component {
  state = {
    selectedFile: null,
  };
  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };
  onFileUpload = () => {
    const formData = new FormData();

    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    console.log(this.state.selectedFile);

    axios.post("api/uploadfile", formData);
  };
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>

          <p>File Type: {this.state.selectedFile.type}</p>

          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };
  render() {
    return (
      <div
        className="container-addchapter"
        style={{ width: "500px", margin: "auto" }}
      >
        <h3
          style={{
            marginLeft: "150px",
            marginBottom: "20px",
            marginTop: "40px",
            fontSize: "30px",
            display: "flex",

            justifyContent: "center",
          }}
        >
          Chapter Details
        </h3>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Book Name</Form.Label>
            <Form.Control />

            <Form.Group className="mb-3">
              <Form.Label>Chapter title</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Chapter Description</Form.Label>
            <Form.Control />
          </Form.Group>

          <section className="mb-3">
            <label>Chapter Pdf :-</label>
            <input
              type="file"
              onChange={this.onFileChange}
              style={{ marginBottom: "20px" }}
            />
            <Link onClick={this.onFileUpload}>Upload!</Link>
          </section>

          <Link
            variant="primary"
            type="submit"
            style={{
              backgroundColor: "lightgray",
              color: "black ",
              height: "50px",
              width: "100px",
              textShadow: "none",
              fontFamily: "system-ui",
              fontSize: "18px",
              marginLeft: "200px",
              marginBottom: "50px",
            }}
          >
            Submit
          </Link>
        </Form>
      </div>
    );
  }
}

export default Addchapter;
