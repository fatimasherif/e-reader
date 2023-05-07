import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import AuthContext from "../../context/Authprovier";

import "../../Css/Login.css";
import { useEffect, useRef, useState } from "react";
import useAxios from "../hooks";
import axios from "axios";
const LOGIN_URL = "";
const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const erref = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      erref.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>you're logged in </h1>
          <br />
          <p>
            <Link to={"/home"}> go to home</Link>
          </p>
        </section>
      ) : (
        <div className="login-conatiner">
          <p
            ref={erref}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h2 style={{ fontFamily: "Serif" }}>Login Form</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Please Enter yor email"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Enter your Password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
            </Form.Group>

            <Button
              className="btn"
              variant="primary"
              type="submit"
              style={{ fontFamily: "Serif" }}
            >
              Sign In
            </Button>
          </Form>
          <p>
            Need an Account?
            <br />
            <span className="line">
              <Link to={"/register"}>Sign up</Link>
            </span>
          </p>
        </div>
      )}
    </>
  );
};

export default Login;
