import React from "react";
import "../../Css/Bookdetails.css";

import { FiArrowUpRight } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { FiShare2 } from "react-icons/fi";
import { RiDownloadLine } from "react-icons/ri";

const Booksdetails = () => {
  return (
    <div className="details-page">
      <div className="imgandpara" style={{ marginTop: "60px" }}>
        <img src="/images/Book.jpg" alt="book" className="center" />
        <div className="right-paragraph">
          <h2>Haryy Potter And the prisoner azakaban</h2>
          <h3>JK.Rowling</h3>
          <p className="italic">
            Get ready to uncover the dark secrets and betrayls in the book .A
            thrilling adventure awaits you.
          </p>
          <div className="icons" style={{ display: "flex" }}>
            <button
              className="btn w-100"
              style={{
                marginTop: "80px",
                backgroundColor: "black",
                display: "flex",
                borderRadius: "30px",
                color: "white",
              }}
            >
              Start reading{" "}
              <FiArrowUpRight
                style={{ display: "flex", marginTop: "4px", marginLeft: "4px" }}
              />
            </button>
            <BsBookmark />
            <FiShare2 />
            <RiDownloadLine />
          </div>
        </div>
      </div>
      <div className="paper">
        <div className="left-one">
          <div className="editors" style={{ width: "200px" }}>
            <h3 style={{ display: "flex" }}>Editors</h3>
            <p> J.K-Rowling,Christopher Reath ,Alena Gestabon,Steve Korg</p>
          </div>
          <div className="language" style={{ margin: "10px" }}>
            <h3 style={{ display: "flex" }}>Language</h3>
            <p style={{ display: "flex" }}>Standard English (USA & UK)</p>
          </div>
          <div className="paperback" style={{ margin: "10px" }}>
            <h3 style={{ display: "flex" }}>Paperback</h3>
            <p style={{ display: "flex" }}>paper textured , ,448 pages </p>
          </div>
        </div>
        <div className="right-one" style={{ marginLeft: "200px" }}>
          <h3>Description</h3>
          <p style={{ width: "400px" }}>
            The book follows Harry Potter, a young wizard, in his third year at
            Hogwarts School of Witchcraft and Wizardry.{" "}
          </p>
          <p>
            Along with friends Ronald Weasley and Hermione Granger, Harry
            investigates Sirius Black, an escaped prisoner from Azkaban, the
            wizard prison, believed to be one of Lord Voldemort's old allies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Booksdetails;
