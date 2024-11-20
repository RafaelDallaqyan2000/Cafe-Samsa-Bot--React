import "../basketStyles.scss";
import {useState} from "react";
import products from "../../../components/Products/Products";

export default function BasketProduct({
  product, updateProduct
}: {
  product: {
      id: number;
    title: string;
    price: number | string;
    unitPrice: number | string;
    count: number;
    img: string;
  };
    updateProduct: (product: any) => void
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClickIncrement = (e: any) => {
    e.stopPropagation();
    setIsLoading(true);
      addToCart(product.count + 1);
      setIsLoading(false);
  };

  const handleClickDecrement = (e: any) => {
    e.stopPropagation();
    setIsLoading(true);
      addToCart(product.count - 1);
      setIsLoading(false);
  };


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
                updateProduct({...product, count: quantity, price: product.unitPrice as number  * quantity});
            }
            else {
                cartData[productDataIndex].count = quantity;
                cartData[productDataIndex].price = product.price as number  * quantity;
                updateProduct({...product, count: quantity, price: product.unitPrice as number  * quantity});
            }
        }
        else {
            return;
        }
        localStorage.setItem("cart", JSON.stringify(cartData))
    }


  return (
    <div className="basket-product__container">
      <div className="image_container">
        <img
          src={product.img}
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
              <p>{product.count}</p>
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
