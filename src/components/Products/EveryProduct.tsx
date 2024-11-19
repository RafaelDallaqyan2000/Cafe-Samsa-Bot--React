import { useState } from "react";
import "./productStyles.scss";

export default function EveryProduct({ product, onClick }: any) {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleClickIncrement = (e: any) => {
    e.stopPropagation();
    setIsLoading(true);
    setTimeout(() => {
      setCount((prev) => prev + 1);
      setIsLoading(false);
    }, 1000);
  };

  const handleClickDecrement = (e: any) => {
    e.stopPropagation();
    setIsLoading(true);
    setTimeout(() => {
      setCount((prev) => prev - 1);
      setIsLoading(false);
    }, 1000);
  };

  const handleClickAddToCart = (e: any) => {
    e.stopPropagation();
    setIsLoading(true);
    setTimeout(() => {
      setCount(1);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="items" onClick={() => onClick(product)}>
      <img src={product.images[0]} width={"100%"} alt="logo" />
      <div className="body">
        <p className="title">{product.name}</p>
        {/*<p>{item.description}</p>*/}
        <p className="price">{product.price}</p>
        <span className="category">{product.category.name}</span>
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
