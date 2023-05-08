import React from "react";
import "../Css/Header.css";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../Css/Header.css";
import Container from "react-bootstrap/Container";
import { removeAuthUser, getAuthUser } from "../helper/Storage";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Side from "./Side";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const navigate = useNavigate();
  const auth = getAuthUser();
  const Logout = () => {
    removeAuthUser();
    navigate("/");
  };
  return (
    <div>
      <div>
        <Side />
      </div>
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand>
            <Link className="nav-link" to={"/"}>
              Home
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to={"/library"}>
              library
            </Link>

            {!auth && (
              <>
                <Link className="nav-link" to={"/login"}>
                  Login
                </Link>
                <Link className="nav-link" to={"/register"}>
                  Register
                </Link>
              </>
            )}

            {auth && auth.type === "admin" && (
              <>
                <Link className="nav-link" to={"/manage-books"}>
                  Manage Books
                </Link>
              </>
            )}
          </Nav>

          <Nav className="ms-auto">
            {auth && <Nav.Link onClick={Logout}>Logout</Nav.Link>}
          </Nav>
          <Nav className="me-auto">
            <Link className="nav-link" to={"/contact"}>
              Contact Us
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
