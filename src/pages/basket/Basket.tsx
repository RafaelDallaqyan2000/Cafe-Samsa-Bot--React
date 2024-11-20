import React from "react";
import BasketProduct from "./basketProduct/BasketProduct";
import { useNavigate } from "react-router-dom";

export default function Basket() {
  const navigate = useNavigate();

  const continueBuyingClick = () => {
    //... write code here to continue
    navigate("/home");
  };

  return (
    <div className="busket__container">
      <div className="busket__first_child">
        <div className="header">
          <h2>Корзина</h2>
          <button onClick={continueBuyingClick}>Продолжить покупки</button>
        </div>
        <div className="busket-items_container">
          {[
            { id: 1, title: "Banan", count: 1, price: 1000 },
            { id: 2, title: "Elak", count: 3, price: 7000 },
            { id: 3, title: "Banan", count: 1, price: 1000 },
            { id: 4, title: "Elak", count: 3, price: 7000 },
            { id: 5, title: "Banan", count: 1, price: 1000 },
            { id: 6, title: "Elak", count: 3, price: 7000 },
          ].map((e) => {
            return <BasketProduct key={e.id} product={e} />;
          })}
        </div>
        <p className="count">В корзине 5 товаров</p>
        <h3 className="price">Итого: 1340</h3>
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
    // </div>
  );
}
