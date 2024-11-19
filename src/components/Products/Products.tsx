import React from "react";
import "./productStyles.css";
import EveryProduct from "./EveryProduct";
import {AddToCartComponent} from "../Cart/CartComponent.jsx";

type ItemsComponentType = {
  items: any;
  openItem: (item: any) => void; // Function to open the item modal with the selected item
  getCartTotal: (total:any) => void;
};

const Products = ({ items, openItem, getCartTotal }: ItemsComponentType) => {
  return (
    <div className="items-container">
      {items?.map((item: any) => {
        return <>
        <EveryProduct product={item} openItem={openItem} getCartTotal={getCartTotal}  />
        </>;
      })}
    </div>
  );
};

export default Products;
