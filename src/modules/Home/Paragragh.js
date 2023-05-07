import React from "react";
import { Button } from "react-bootstrap";
import "../../Css/Paragraph.css";
import { FiArrowUpRight } from "react-icons/fi";

const Paragragh = () => {
  return (
    <div
      className="paragraph"
      style={{
        marginTop: "0px",
        marginLeft: "60px",
        display: "flex",
        flexFlow: "wrap",
        width: "300px",
        fontFamily: "Serif",
        marginBottom: "70px",
      }}
    >
      <h2 className="main">Happy reading ,Harvey</h2>
      <p className="rest">
        Wow! you've delived deep into the wizarding world's secrets Have Harry's
        parents died yet? Oops,looks like you're not there yet.Get reading now.
      </p>
      <Button
        className="btn w-100 "
        style={{
          float: "right",
          marginLeft: "5px",
          marginTop: "4px",
          display: "flex",
        }}
      >
        Start reading{" "}
        <FiArrowUpRight
          style={{ display: "flex", marginLeft: "4px", marginTop: "4px" }}
        />
      </Button>
    </div>
  );
};

export default Paragragh;
