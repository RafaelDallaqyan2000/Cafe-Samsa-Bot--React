import { useState } from "react";
import "./productStyles.css";

export default function EveryProduct({ product, onClick }: any) {
  const [count, setCount] = useState(0);

  const handleClickIncrement = (e: any) => {
    e.stopPropagation();
    setCount((prev) => prev + 1);
  };

  const handleClickDecrement = (e: any) => {
    e.stopPropagation();
    setCount((prev) => prev - 1);
  };

  const handleClickAddToCart = (e: any) => {
    e.stopPropagation();
    setCount(1);
  };
  return (
    <div className="items" onClick={() => onClick(product)}>
      <img src={product.images[0]} width={"100%"} alt="" />
      <div>
        <p>{product.name}</p>
        {/*<p>{item.description}</p>*/}
        <p>{product.price}</p>
        <p className="category">{product.category.name}</p>
      </div>
      <div className="button__container">
        {count <= 0 ? (
          <button onClick={handleClickAddToCart}>Add to cart</button>
        ) : (
          <>
            <button onClick={handleClickDecrement}>-</button>
            <span>{count}</span>
            <button onClick={handleClickIncrement}>+</button>
          </>
        )}
      </div>
    </div>
  );
}
