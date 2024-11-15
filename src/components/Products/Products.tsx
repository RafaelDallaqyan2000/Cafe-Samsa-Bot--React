import React from "react";
import "./productStyles.css";
import EveryProduct from "./EveryProduct";

type ItemsComponentType = {
  items: any;
  openItem: (item: any) => void; // Function to open the item modal with the selected item
};

const Products = ({ items, openItem }: ItemsComponentType) => {
  return (
    <div className="items-container">
      {items?.map((item: any) => {
        return <EveryProduct product={item} />;
      })}
    </div>
  );
};

export default Products;
