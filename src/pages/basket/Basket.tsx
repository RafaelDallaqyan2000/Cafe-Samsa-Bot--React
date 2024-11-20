import React, {useLayoutEffect, useState} from "react";
import BasketProduct from "./basketProduct/BasketProduct";
import {useLocation, useNavigate} from "react-router-dom";
import {MethodType, request} from "../../data/data";

export default function Basket() {
  const navigate = useNavigate();

  const[cart, setCart] = useState<any>()

  const continueBuyingClick = () => {
    //... write code here to continue
    navigate("/home");
  };

  const chatId = 795363892

  const getCartData = () => {

    request(MethodType.POST, 'cart', {
      chat_id: chatId
    }, result => setCart(result))
  }

  useLayoutEffect(()=>{
    getCartData()
  },[])

  return (
    <div className="busket__container">
      <div className="busket__first_child">
        <div className="header">
          <h2>Корзина</h2>
          <button onClick={continueBuyingClick}>Продолжить покупки</button>
        </div>
        <div className="busket-items_container">
        {cart?.cartItems.map((e: any) => {
          return <BasketProduct product={e} setCart={setCart} />;
        })}
      </div>
        <p className="count">В корзине {cart?.total_quantity} товаров</p>
        <h3 className="price">Итого: {cart?.total_price}</h3>
        <p className="description">
          Заказы принимаются только в рабочие часы. Работаем с 09:00 до 20:00
          вечера. Спасибо!
        </p>
      </div>
      {/* <div className="footer"> */}
      <p className="contact-info">
        <p className="number_title">Контактный телефон</p>
        <p className="number">+201118287099</p>
      </p>
    </div>
  );
}
