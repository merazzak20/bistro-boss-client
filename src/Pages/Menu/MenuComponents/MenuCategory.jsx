import React from "react";
import MenuItems from "../../shared/MenuItems/MenuItems";
import Cover from "../../shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, coverImg, title }) => {
  return (
    <div>
      {title && (
        <Cover
          img={coverImg}
          title={title}
          info={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consectetur libero at voluptatem quis porro quas beatae nesciunt, "
          }
        ></Cover>
      )}
      <div className="grid md:grid-cols-2 gap-12 my-10">
        {items.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <div className="mx-auto text-center my-6">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4">
            Order Now!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
