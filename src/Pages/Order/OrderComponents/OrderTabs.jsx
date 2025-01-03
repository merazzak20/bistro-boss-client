import React from "react";
import FoodCard from "../../../components/FoodCard";

const OrderTabs = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3 gap-7">
      {items.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTabs;
