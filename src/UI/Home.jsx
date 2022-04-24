import React from "react";
import Web from "./images/myImg.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Visualize Algorithms with"
        img={Web}
        btnName="Algorithms"
        visited="./algorithms_list"
      />
    </>
  );
};

export default Home;
