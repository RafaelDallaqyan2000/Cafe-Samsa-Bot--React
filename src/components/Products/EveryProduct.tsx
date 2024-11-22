import {useLayoutEffect, useState} from "react";
import "./productStyles.scss";
import {MethodType, request} from "../../data/data";

export default function EveryProduct({ product, onClick, cart, setCart }: any) {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const chatId = 795363892

  const getCartData = () => {

    setCount(cart?.cartItems.find((item: any) => item.item_id === product.id)?.quantity ?? 0)
    // request(MethodType.POST, 'cart', {
    //   chat_id: chatId
    // }, result => setCount(result.cartItems.find((item: any) => item.item_id === product.id)?.quantity ?? 0))
  }

  const addToCart = () => {
    request(MethodType.PUT, 'cart', {
      "chat_id": chatId,
      "item_id": product.id
    }, result => {
      setCount(result?.cartItems.find((item: any) => item.item_id === product.id)?.quantity ?? 0)
      setCart(result)
    });
  }

  const removeFromCart = () => {
    request(MethodType.DELETE, `cart/${chatId}/items/${product.id}`, {}, result => {
      setCount(result?.cartItems.find((item: any) => item.item_id === product.id)?.quantity ?? 0)
      setCart(result)
    });
  }

  const handleClickIncrement = (e: any) => {
    e.stopPropagation();
    setIsLoading(true);
    setTimeout(() => {
      addToCart()
      // setCount((prev: number) => prev + 1);
      setIsLoading(false);
    }, 1000)


  };

  const handleClickDecrement = (e: any) => {
    e.stopPropagation();
    setIsLoading(true);
    setTimeout(() => {
    removeFromCart()
      setCount((prev: number) => prev - 1);
      setIsLoading(false);
    }, 1000)

  };

  const handleClickAddToCart = (e: any) => {
    e.stopPropagation();
    setIsLoading(true);
    setTimeout(() => {
      addToCart()
      // setCount(1);
      setIsLoading(false);
    }, 1000)
  };

  useLayoutEffect(() => {
    getCartData()
  },[cart]);

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
