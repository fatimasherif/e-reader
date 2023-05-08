import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { RxDotsHorizontal } from "react-icons/rx";

const NewSeries = () => {
  return (
    <div style={{ marginLeft: "55px", marginTop: "70px" }}>
      <h3
        style={{
          fontFamily: "system-ui",
          fontSize: "2rem",
          marginBottom: "10px",
        }}
      >
        New Series Collection
        <Button
          style={{
            position: "absolute",
            right: "700px",
            backgroundColor: "#fbfaf7",
            borderColor: "#fbfaf7",
          }}
        >
          <RxDotsHorizontal style={{ color: "black" }} />
        </Button>
      </h3>
      <div className="card-horizontal">
        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-4   w-100">
              <img
                src="/images/harryseries.jpg"
                class="card-img"
                alt="..."
                style={{ width: "100px", height: "100px", marginLeft: "0px" }}
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">
                  <Link
                    to={""}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <b>A legend of ice and fire, The ice horse</b>
                  </Link>
                </h5>
                <p class="card-text">8 chapters every vol.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSeries;
