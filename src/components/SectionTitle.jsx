import React from "react";

const SectionTitle = ({ subHeading, mainHeading }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center my-12">
      <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
      <h2 className="text-3xl font-semibold border-y-4 py-4 uppercase">
        {mainHeading}
      </h2>
    </div>
  );
};

export default SectionTitle;
