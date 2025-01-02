import React from "react";
import Banner from "./components/Banner";
import Category from "./components/Category";
import PopularMenu from "./components/PopularMenu";
import Featured from "./components/Featured";
import Testimonial from "./components/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
