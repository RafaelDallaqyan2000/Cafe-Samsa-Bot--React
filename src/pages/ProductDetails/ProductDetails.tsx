import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import "./productStyles.scss";
import BusketButton from "../../components/BusketButton/BusketButton";
import {MethodType, request} from "../../data/data";

export default function ProductDetails() {
  const { state } = useLocation();

  const [productData, setProductData] = useState(state);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [price, setPrice] = useState<any>(productData.price ?? 0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    request(MethodType.POST, "showcase/item", {item_id: state.id}, result => {
      setProductData(result)
    })
  }, []);

  useEffect(() => {
    setCount(state.cart?.cartItems.find((item: any) => item.item_id === productData.id)?.quantity ?? 0)
  }, [state.cart]);

  //@ts-ignore
  const goBack = (e: any) => {
    e?.stopPropagation();
    navigate("/home");
  };
  const chatId = 795363892

  const addToCart = () => {
    request(MethodType.PUT, 'cart', {
      "chat_id": chatId,
      "item_id": productData.id
    }, result => {state.setCart(result)});
  }

  const removeFromCart = () => {
    request(MethodType.DELETE, `cart/${chatId}/items/${productData.id}`, {}, result => {state.setCart(result)});
  }

  const handleClickToBusket = (e: any) => {
    // navigate(`/basket/${productId}`, {
    //   state: { productId },
    e.stopPropagation();
    setIsLoading(true);
    setTimeout(() => {
      addToCart()
      setIsLoading(false);
      setPrice(+productData.price);
    }, 1000);
    // });
  };

  const handleClickIncrement = (e: any) => {
    e.stopPropagation();
    setIsLoading(true);
    setTimeout(() => {
      addToCart()
      setIsLoading(false);
      setPrice((prev: any) => +prev + +productData.price);
    }, 1000);
  };

  const handleClickDecrement = (e: any) => {
    e.stopPropagation();
    setIsLoading(true);
    setTimeout(() => {
      removeFromCart()
      setPrice((prev: any) => +prev - +productData.price);
      setIsLoading(false);
    }, 1000);
  };

  const handleClickBusketBtn = () => {
    navigate("/busket");
  };

  return (
    <div className="product-details__container">
      <button
        onClick={goBack}
        className="close-icon__container"
        onTouchStart={(e) => {
          //@ts-ignore
          e.target.style.boxShadow = "none";
        }}
        onTouchEnd={(e) => {
          //@ts-ignore
          e.target.style.boxShadow = "-6px -4px 6px 0 rgb(0 0 0/51%)";
        }}
      >
        <img
          src={require("../../images/closeIcon.svg").default}
          width={20}
          height={50}
        />
      </button>
      <div className="image__container">
        <img src={productData.images[0]} style={{ width: "100%" , height: '300px', objectFit: "contain" }} />
        <div className="text__container">
          <h1>egp. {productData.price}</h1>
          <p className="title">{productData.name}</p>
          <p>{productData.description}</p>
        </div>
      </div>
      {count === 0 ? (
        <button className="add-to-busket__button" onClick={handleClickToBusket}>
          {isLoading ? (
            <div className="loader"></div>
          ) : (
            `В корзину (${count})`
          )}
        </button>
      ) : (
        <div className="add-to-busket__container">
          <p>egp. {price}</p>

          <div
            className={`count_container ${count && "loading_buttons"}`}
          >
            {isLoading ? (
              <div className="loader"></div>
            ) : (
              <>
                <button onClick={handleClickDecrement}>-</button>
                <span>{count}</span>
                <button onClick={handleClickIncrement}>+</button>
              </>
            )}
          </div>
        </div>
      )}
      <BusketButton busketCount={state.cart?.total_quantity} onClick={handleClickBusketBtn} />
    </div>
  );
}
