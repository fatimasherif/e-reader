import React from "react";
import { Booksinfo } from "../../Booksinfo";
import Bookcard from "../../Components/Bookcard";
import "./Slider.css";

import "react-multi-carousel/lib/styles.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import axios from "axios";

const info = Booksinfo;

const Slider = () => {
  const [Books, setBooks] = useState({
    loading: true,
    results: [],
    err: null,
    reload: 0,
  });
  const [search, setSearch] = useState("");
  useEffect(() => {
    setBooks({ ...Books, loading: true });
    axios
      .get("http://localhost:4000/movies", {
        params: {
          search: search,
        },
      })
      .then((resp) => {
        console.log(resp);
        setBooks({ ...Books, results: resp.data, loading: false, err: null });
      })
      .catch((err) => {
        setBooks({
          ...Books,
          loading: false,
          err: " something went wrong, please try again later ! ",
        });
      });
  }, [Books.reload]);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 800 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const cards = info.map((item) => (
    <Bookcard name={item.name} key={item.id} image={item.image} />
  ));

  return (
    <div className="main-div" style={{ overflow: "visible" }}>
      <Carousel
        focusOnSelect={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px"
      >
        {cards}
      </Carousel>
    </div>
  );
};

export default Slider;
