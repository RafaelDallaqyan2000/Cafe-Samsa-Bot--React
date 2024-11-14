import React from "react";
import "./ItemsComponent.css";

type ItemsComponentType = {
  items: any;
  openItem: (item: any) => void; // Function to open the item modal with the selected item
};

const ItemsComponent = ({ items, openItem }: ItemsComponentType) => {
  return (
    <div className="items-container">
      {items?.map((item: any) => {
        return (
          <div key={item.id} className="items" onClick={() => openItem(item)}>
            <img src={item.images[0]} width={"100%"} alt="" />
            <p>{item.name}</p>
            {/*<p>{item.description}</p>*/}
            <p>{item.price}</p>
            <p>{item.category.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ItemsComponent;
