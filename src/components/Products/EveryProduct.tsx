import {useEffect, useLayoutEffect, useState} from "react";
import "./productStyles.scss";
import products from "./Products";

export default function EveryProduct({ product, onClick }: any) {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getCartData = (id: number = 0) => {
    const cart = JSON.parse(localStorage.getItem("cart") ?? '[]')

    if(id !== 0) {
      return cart?.find((item: any) => item.id === id);
    }

    return cart;
  }

  const addToCart = (quantity: number) => {
    const cartData = getCartData()
    const productDataIndex = cartData.findIndex((item: any) => item.id === product.id);

    if(productDataIndex > -1) {
      if(quantity === 0){
        cartData.splice(productDataIndex, 1)
      }
      else {
        cartData[productDataIndex].count = quantity;
        cartData[productDataIndex].price = product.price * quantity;
      }
    }
    else {
      if(quantity === 0){
        return
      }
      cartData.push({
        id: product.id,
        count: quantity,
        title: product.itemName,
        price: product.price * quantity,
        img: product.img[0],
        unitPrice: product.price,
      })
    }

    localStorage.setItem("cart", JSON.stringify(cartData))
  }

  const handleClickIncrement = (e: any) => {
    e.stopPropagation();
    setIsLoading(true);
    addToCart(count + 1)
    setCount((prev: number) => prev + 1);
    setIsLoading(false);
  };

  const handleClickDecrement = (e: any) => {
    e.stopPropagation();
    setIsLoading(true);
    addToCart(count - 1)
      setCount((prev: number) => prev - 1);
      setIsLoading(false);
  };

  const handleClickAddToCart = (e: any) => {
    e.stopPropagation();
    setIsLoading(true);
    addToCart(1)
    setCount(1);
    setIsLoading(false);
  };

  useLayoutEffect(() => {
    setCount(getCartData(product.id)?.count ?? 0)
  },[]);

  return (
    <div className="items" onClick={() => onClick(product)}>
      <img src={product.img[0]} width={"100%"} alt="logo" />
      <div className="body">
        <p className="title">{product.itemName}</p>
        {/*<p>{item.description}</p>*/}
        <p className="price">{product.price}</p>
        <span className="category">{product.category}</span>
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
