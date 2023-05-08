import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Css/PdfViewer.css";

import "@react-pdf-viewer/core/lib/styles/index.css";

const PdfViewer = () => {
  const fileType = ["application/pdf"];

  const handlechange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = (e) => {
          setPDFFile(e.target.result);
        };
      } else {
        setPDFFile(null);
      }
    } else {
      console.log("please select");
    }
  };
  const handleSubmit = (e) => {
    e.preventdefault();
    if (pdffile !== null) {
      setViewPdf(pdffile);
    } else {
      setViewPdf(null);
    }
  };
  const [pdffile, setPDFFile] = useState();
  const [viewPdf, setViewPdf] = useState();

  return (
    <div className="container">
      <form>
        <input type="file" className="form-control" />
        <button
          type="submit"
          className="btn btn-success"
          onChange={handleSubmit}
        >
          View Pdf
        </button>
      </form>
      <h2>View Pdf</h2>
      <section className="pdf-container"></section>
    </div>
  );
};

export default PdfViewer;
