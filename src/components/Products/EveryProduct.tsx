import {useLayoutEffect, useState} from "react";
import "./productStyles.scss";
import {MethodType, request} from "../../data/data";

export default function EveryProduct({ product, onClick }: any) {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const chatId = 795363892

  const getCartData = () => {

    request(MethodType.POST, 'cart', {
      chat_id: chatId
    }, result => setCount(result.cartItems.find((item: any) => item.item_id === product.id)?.quantity ?? 0))
  }

  const addToCart = () => {
    request(MethodType.PUT, 'cart', {
      "chat_id": chatId,
      "item_id": product.id
    }, () => {});
  }

  const removeFromCart = () => {
    request(MethodType.DELETE, `cart/${chatId}/items/${product.id}`, {}, () => {});
  }

  const handleClickIncrement = (e: any) => {
    e.stopPropagation();
    setIsLoading(true);
    addToCart()
    setCount((prev: number) => prev + 1);
    setIsLoading(false);
  };

  const handleClickDecrement = (e: any) => {
    e.stopPropagation();
    setIsLoading(true);
    removeFromCart()
      setCount((prev: number) => prev - 1);
      setIsLoading(false);
  };

  const handleClickAddToCart = (e: any) => {
    e.stopPropagation();
    setIsLoading(true);
    addToCart()
    setCount(1);
    setIsLoading(false);
  };

  useLayoutEffect(() => {
    getCartData()
  },[]);

  return (
    <div className="items" onClick={() => onClick(product)}>
      <img src={product?.images[0]} width={"100%"} alt="logo" />
      <div className="body">
        <p className="title">{product.name}</p>
        {/*<p>{item.description}</p>*/}
        <p className="price">{product.price}</p>
        <span className="category">{product.category?.id}</span>
      </div>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`button__container ${isLoading && "loading_buttons"}`}
      >
        {isLoading ? (
          <div className="loader"></div>
        ) : count <= 0 ? (
          <button className="add-to-busket" onClick={handleClickAddToCart}>
            В корзину
          </button>
        ) : (
          <div className="count_container">
            <button onClick={handleClickDecrement}>-</button>
            <span>{count}</span>
            <button onClick={handleClickIncrement}>+</button>
          </div>
        )}
      </div>
    </div>
  );
}
