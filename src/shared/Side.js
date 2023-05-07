import React from "react";
import Nav from "react-bootstrap/Nav";
import "../Css/Side.css";
import { AiOutlineHome } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import { Link } from "react-router-dom";

const Side = () => {
  return (
    <div>
      <Nav defaultActiveKey="/home" className="flex-column me-auto">
        <Link to={"/home"}>
          <AiOutlineHome
            style={{
              marginBottom: "50PX",
              color: "black",
              textAlign: "center",
              marginTop: "50PX",
            }}
          />
        </Link>
        <Link eventKey="link-1" to={"/library"}>
          <BsBook
            style={{
              marginBottom: "50px",
              color: "black",
              textAlign: "center",
            }}
          />
        </Link>
        <Link to={"/latest"} eventKey="link-2">
          <FaRegClock
            style={{
              marginBottom: "50px",
              color: "black",
              textAlign: "center",
            }}
          />
        </Link>
        <Link to={"/saved"} eventKey="Link-3">
          <BsFillBookmarkFill
            style={{
              marginBottom: "50px",
              color: "black",
              textAlign: "center",
            }}
          />
        </Link>
        <Link to={"/about"} eventKey="Link-4">
          <IoIosSettings
            style={{
              marginBottom: "50px",
              color: "black",
              textAlign: "center",
            }}
          />
        </Link>
      </Nav>
    </div>
  );
};

export default Side;
