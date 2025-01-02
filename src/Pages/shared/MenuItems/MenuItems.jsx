import React from "react";

const MenuItems = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="flex space-x-4 items-center">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[100px]"
        src={image}
        alt=""
      />
      <div>
        <h2 className="uppercase">{name} -------------</h2>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-600">{price}</p>
    </div>
  );
};

export default MenuItems;
