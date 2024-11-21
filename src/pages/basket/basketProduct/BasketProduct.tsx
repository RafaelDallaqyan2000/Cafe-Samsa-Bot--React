import "../basketStyles.scss";
import {useState} from "react";
import products from "../../../components/Products/Products";
import {MethodType, request} from "../../../data/data";

export default function BasketProduct({
  product, setCart
}: {
  product: {
      item_id: number;
      name: string;
      price: number | string;
      quantity: number;
      image: string;
  };
    setCart: (cart: any) => void
}) {
  const [isLoading, setIsLoading] = useState(false);

    const chatId = 795363892

  const handleClickIncrement = (e: any) => {
    e.stopPropagation();
    setIsLoading(true);
    setTimeout(() => {
        addToCart();
      setIsLoading(false);
    }, 1000);
  };

  const handleClickDecrement = (e: any) => {
    e.stopPropagation();
    if (product.quantity > 0) {
      setIsLoading(true);
      setTimeout(() => {
          removeFromCart();
        setIsLoading(false);
      }, 1000);
    }
  };

    const addToCart = () => {
        request(MethodType.PUT, 'cart', {
            "chat_id": chatId,
            "item_id": product.item_id
        }, result => setCart(result));

    }

    const removeFromCart = () => {
        request(MethodType.DELETE, `cart/${chatId}/items/${product.item_id}`, {}, result => setCart(result));
    }


  return (
    <div className="basket-product__container">
      <div className="image_container">
        <img
          src={product.image}
          width={32}
          height={32}
        />
      </div>
      <div className="body">
        <h3>{product.name}</h3>
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
                disabled={product.quantity === 1}
                className={`decrement_button ${product.quantity === 1 && "disabled"}`}
              >
                -
              </button>
              <p>{product.quantity}</p>
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
