import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./BookCard.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const Bookcard = (props) => {
  return (
    <div className="cards">
      <Link to={"/details"}>
        <Card className="card-body">
          <Card.Img
            className="product--image"
            style={{ width: "100%", height: "100%" }}
            variant="top"
            src={props.image}
          />
          <Card.Body>
            <Link to={"id:"} className="link">
              <Card.Title
                style={{
                  fontFamily: "Serif",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                {props.name}
              </Card.Title>
            </Link>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default Bookcard;
