import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../shared/Cover/Cover";
import menuCover from "../../assets/menu/banner3.jpg";
import dessertCover from "../../assets/menu/dessert-bg.jpeg";
import pizzaCover from "../../assets/menu/pizza-bg.jpg";
import saladCover from "../../assets/menu/salad-bg.jpg";
import soupCover from "../../assets/menu/soup-bg.jpg";
import { useMenu } from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle";
import MenuCategory from "./MenuComponents/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss - Menu</title>
      </Helmet>
      <Cover
        img={menuCover}
        title={"Our Menu"}
        info={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consectetur libero at voluptatem quis porro quas beatae nesciunt, "
        }
      ></Cover>

      {/* Offered */}
      <SectionTitle
        subHeading={"Don't Miss"}
        mainHeading={"Today's Offer"}
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>

      {/* Dessert */}
      <MenuCategory
        items={dessert}
        title={"dessert"}
        coverImg={dessertCover}
      ></MenuCategory>

      {/* Pizza */}
      <MenuCategory
        items={pizza}
        title={"pizza"}
        coverImg={pizzaCover}
      ></MenuCategory>

      {/* Salad */}
      <MenuCategory
        items={salad}
        title={"salad"}
        coverImg={saladCover}
      ></MenuCategory>

      {/* Soup */}
      <MenuCategory
        items={soup}
        title={"soup"}
        coverImg={soupCover}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
