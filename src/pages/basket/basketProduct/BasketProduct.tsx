import { useState } from "react";
import "../basketStyles.scss";

export default function BasketProduct({
  product,
}: {
  product: {
    title: string;
    price: number | string;
    count: number | string;
  };
}) {
  const [count, setCount] = useState(+product.count || 0);
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

  return (
    <div className="basket-product__container">
      <div className="image_container">
        <img
          src="https://samsa.ucoz.ae/_sh/00/24b.jpg?v=468"
          width={32}
          height={32}
        />
      </div>
      <div className="body">
        <h3>{product.title}</h3>
        <p>{product.price}</p>
        <div
          className={`btn__container ${isLoading && "btn_container_isLoading"}`}
        >
          {isLoading ? (
            <div className="loader"></div>
          ) : (
            <>
              <button
                onClick={handleClickDecrement}
                className="decrement_button"
              >
                -
              </button>
              <p>{count}</p>
              <button
                onClick={handleClickIncrement}
                className="increment_button"
              >
                +
              </button>
            </>
          )}
        </div>
      </div>
      <div className="close-icon__container">
        <button>
          <img src={require("../../../images/closeIcon.svg").default} />
        </button>
      </div>
    </div>
  );
}
