import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuItems from "../../shared/MenuItems/MenuItems";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const polpularItems = data.filter(
          (item) => item.category === "popular"
        );
        setMenu(polpularItems);
      });
  }, []);
  return (
    <div>
      <SectionTitle
        subHeading="Popular Items"
        mainHeading="From Our Menu"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-12">
        {menu.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
