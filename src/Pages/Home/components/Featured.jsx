import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import fImg from "../../../assets/home/featured.jpg";
import("../Css/featured.css");

const Featured = () => {
  return (
    <div className="pt-4 featured-Item mt-14 text-white">
      <SectionTitle
        subHeading={"Check It Out"}
        mainHeading={"Featured Items"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-10 px-36 bg-slate-900 bg-opacity-10">
        <div>
          <img src={fImg} alt="" />
        </div>
        <div className="md:ml-10">
          <h3 className="text-xl">November 20, 2024</h3>
          <h2 className="text-2xl">Where can I get some?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nobis
            nam tempora consectetur saepe minus maiores voluptatum, blanditiis
            possimus ut facilis est dignissimos deleniti quasi beatae sint!
            Consectetur, provident vel.
          </p>
          <button className="btn btn-outline border-0 border-b-4">
            Order Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
