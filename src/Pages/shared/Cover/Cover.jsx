import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ img, title, info }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt={title}
      strength={-200}
    >
      <div className="hero min-h-[400px]">
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-2xl bg-black bg-opacity-70 px-32 py-16">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">{info}</p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
