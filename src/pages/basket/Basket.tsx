import React, {useLayoutEffect, useState} from "react";
import BasketProduct from "./basketProduct/BasketProduct";
import {useLocation, useNavigate} from "react-router-dom";

export default function Basket() {
  const navigate = useNavigate();
  const {state} = useLocation();

  const [cartItems, setCartItems] = useState<any>([]);

  const continueBuyingClick = () => {
    //... write code here to continue
    navigate("/home");
  };

  useLayoutEffect(()=>{
    const cart = JSON.parse(localStorage.getItem("cart") ?? '[]')

    setCartItems(cart);
  },[])

  const updateProduct = (product: any) => {
    const cartItemIndex = cartItems.findIndex((item: any) => item.id === product.id);
    const updatedCartItems = [...cartItems];
    if(product.count === 0){
      updatedCartItems.splice(cartItemIndex, 1);
    }
    else{
      updatedCartItems[cartItemIndex] = product;
    }

    setCartItems(updatedCartItems);
  }

  return (
    <div className="busket__container">
      <div className="busket__first_child">
        <div className="header">
          <h2>Корзина</h2>
          <button onClick={continueBuyingClick}>Продолжить покупки</button>
        </div>
        <div className="busket-items_container">
        {cartItems.map((e: any) => {
          return <BasketProduct product={e} updateProduct={updateProduct} />;
        })}
      </div>

        <p className="count">В корзине {cartItems.map((item: any) => item.count).reduce( (a:number, b:number) =>  a + b, 0)} товаров</p>
        <h3 className="price">Итого: {cartItems.map((item: any) => item.price).reduce( (a:number, b:number) =>  a + b, 0)}</h3>
        <p className="description">
          Заказы принимаются только в рабочие часы. Работаем с 09:00 до 20:00
          вечера. Спасибо!
        </p>
      </div>
      {/* <div className="footer"> */}
      <p className="contact-info">
        <p>Контактный телефон</p>
        <p>+201118287099</p>
      </p>
    </div>
  );
}
