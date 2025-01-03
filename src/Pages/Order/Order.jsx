import React, { useState } from "react";
import Cover from "../shared/Cover/Cover";
import orderCover from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useMenu } from "../../hooks/useMenu";
import FoodCard from "../../components/FoodCard";
import OrderTabs from "./OrderComponents/OrderTabs";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["dessert", "pizza", "salad", "soup", "drinks"];
  const { category } = useParams();
  // console.log(category);
  const intialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(intialIndex);
  const [menu] = useMenu();

  const drinks = menu.filter((item) => item.category === "drinks");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss - Food Order</title>
      </Helmet>
      <Cover img={orderCover} title={"Order Food"}></Cover>

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Dessert</Tab>
          <Tab>Pizza</Tab>
          <Tab>Salad</Tab>
          <Tab>Soup</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderTabs items={desserts}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs items={pizzas}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs items={salads}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs items={soups}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs items={drinks}></OrderTabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
