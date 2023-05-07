import React from "react";

import { Booksinfo } from "../../Booksinfo";

import Rightpage from "./Rightpage";
import Categories from "./Categories";

const Home = () => {
  return (
    <div>
      <Rightpage />

      {/* <div>
        {info.map((item) => {
          return <Bookcard key={item.id} name={item.name} image={item.image} />;
        })}
      </div> */}
    </div>
  );
};

export default Home;
