import React from "react";
import Paragragh from "./Paragragh";
import "../../Css/Rightpage.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Bookcard from "../../Components/Bookcard";
import { RxDotsHorizontal } from "react-icons/rx";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import NewSeries from "./NewSeries";
import Boxphoto from "./Boxphoto";

const Rightpage = () => {
  return (
    <div
      className="right-page"
      style={{ marginLeft: "60px", marginTop: "0px" }}
    >
      <Paragragh />
      <div>
        <h3
          style={{
            marginLeft: "65px",
            fontFamily: "Serif",
            fontSize: "2rem",
            marginBottom: "20px",
          }}
        >
          Popular Now
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
        <div className="popular-cards">
          <Bookcard name="Harry booter" image="/images/HARRY.jpg" />

          <Bookcard name="The Wise Man's Fear" image="/images/wiseman.jpg" />

          <Bookcard name="A Game of Thrones" image="/images/GOT.jpg" />

          <Bookcard name="the world of ice and fire" image="/images/fire.jpg" />
        </div>
        <NewSeries />
      </div>
    </div>
  );
};

export default Rightpage;
