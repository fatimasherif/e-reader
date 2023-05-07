import React from "react";
import "../Css/Header.css";
import { CiSearch } from "react-icons/ci";
import { RiNotification2Line } from "react-icons/ri";
import ManageBooks from "../modules/ManageBooks/ManageBooks";
import { Link } from "react-router-dom";

import Side from "./Side";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <div>
      <Side />
      <nav className="navbar">
        <form className="form-inline">
          <CiSearch
            style={{
              marginTop: "20px",
              marginRight: "9px",
              display: "inline-block",
              textDecorationColor: "black",
            }}
          />
          <input
            className="form-control"
            type="search"
            placeholder="Search book name,author,edition"
            aria-label="Search"
          />
          <button className="btn btn-dark w-2" style={{ marginTop: "15px" }}>
            Search
          </button>
          <div
            className="user-data"
            style={{
              display: "inline-block",
              float: "right",
              marginTop: "30px",
              marginBottom: "20px",
            }}
          >
            <Link
              to={"/manage-books"}
              style={{
                marginRight: "500px",
                color: "#db8b8b",
                fontSize: "15px",
              }}
            >
              Manage Books
            </Link>
            <Link
              to={"/contact"}
              style={{
                marginRight: "50px",
                color: "#db8b8b",
                fontSize: "15px",
              }}
            >
              Contact Us
            </Link>
            <button
              className="notification-button"
              style={{
                fontSize: "20px",
                textAlign: "center",
                cursor: "pointer",
                border: "none",
                float: "right",
                background: "none",
              }}
            >
              <RiNotification2Line className="Ri" />
            </button>
          </div>
        </form>
      </nav>
    </div>
  );
};

export default Header;
