import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../Css/Login.css";
import { useEffect, useRef, useState } from "react";
import { setAuthUser } from "../../helper/Storage";
import axios from "axios";
import Alert from "react-bootstrap/Alert";

const Login = () => {
  const navigate = useNavigate();

  const LoginFun = (e) => {
    e.preventDefault();
    setLogin({ ...login, loading: true, err: [] });
    console.log(login.email);
    console.log(login.password);
    axios
      .post("http://localhost:8000/users/signin", {
        email: login.email,
        password: login.password,
      })
      .then((resp) => {
        setLogin({ ...login, loading: false, err: [] });
        setAuthUser(resp.data);
        navigate("/");
      })
      .catch((errors) => {
        setLogin({
          ...login,
          loading: false,
          err: errors.response.data.errors,
        });
      });
  };
  const [login, setLogin] = useState({
    email: "",
    password: "",
    loading: false,
    err: [],
  });

  return (
    <div className="login-conatiner">
      <h2 style={{ fontFamily: "Serif" }}>Login Form</h2>
      {login.err.map((error, index) => (
        <Alert key={index} variant="danger" className="p-2">
          {error.msg}
        </Alert>
      ))}
      <Form onSubmit={LoginFun}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Please Enter yor email"
            autoComplete="off"
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
            value={login.email}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Enter your Password"
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
            value={login.password}
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
  );
};

export default Login;
