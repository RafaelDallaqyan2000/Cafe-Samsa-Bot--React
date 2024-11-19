import "./productStyles.css";
import {AddToCartComponent} from "../Cart/CartComponent";
import React from "react";

export default function EveryProduct({ product, openItem, getCartTotal }: any) {
  return (
    <div key={product.id} className="items" onClick={() => openItem(product)}>
      <img src={product.images[0]} width={"100%"} alt="" />
      <div>
        <p>{product.name}</p>
        {/*<p>{item.description}</p>*/}
        <p>{product.price}</p>
        <p>{product.category.name}</p>
      </div>
        <AddToCartComponent product={product} getCartTotal={getCartTotal}/>
    </div>
  );
}
