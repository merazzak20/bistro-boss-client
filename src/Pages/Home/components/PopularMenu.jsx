import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuItems from "../../shared/MenuItems/MenuItems";
import { useMenu } from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const polpularItems = data.filter(
  //         (item) => item.category === "popular"
  //       );
  //       setMenu(polpularItems);
  //     });
  // }, []);
  const polpularItems = menu.filter((item) => item.category === "popular");
  return (
    <div>
      <SectionTitle
        subHeading="Popular Items"
        mainHeading="From Our Menu"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-12">
        {polpularItems.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <div className="mx-auto text-center mt-6">
        <button className="btn btn-outline border-0 border-b-4 mx-auto">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
