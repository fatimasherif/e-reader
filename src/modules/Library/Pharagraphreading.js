import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Pharagraphreading = () => {
  return (
    <div
      className="paragraph-read"
      style={{
        marginTop: "0px",
        marginLeft: "120px",
        display: "flex",
        flexFlow: "wrap",
        width: "600px",
        fontFamily: "cursive",
        marginBottom: "70px",
      }}
    >
      <h1>Keep the story going ..</h1>
      <p style={{ fontSize: "2rem" }}>
        Don't let the story end just yet. Continue reading your last book and
        immerse yourself in the world of literature.
      </p>
      <label>
        What genre you want to read?
        <select>
          <option>Novels</option>

          <option> History </option>

          <option>Science</option>
        </select>
      </label>
    </div>
  );
};

export default Pharagraphreading;
