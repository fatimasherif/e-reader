import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PdfViewer = () => {
  return (
    <div className="container">
      <form>
        <input type="file" className="form-control" />
        <button type="submit" className="btn btn-success">
          View Pdf
        </button>
      </form>
      <h2>View Pdf</h2>
    </div>
  );
};

export default PdfViewer;
