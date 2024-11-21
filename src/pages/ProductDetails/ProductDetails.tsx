import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import "./productStyles.scss";
import BusketButton from "../../components/BusketButton/BusketButton";
import {MethodType, request} from "../../data/data";

export default function ProductDetails() {
  const { state } = useLocation();

  const [productData, setProductData] = useState(state);
  const navigate = useNavigate();
  const [itemInBusket, setItemInBusket] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [price, setPrice] = useState<any>(productData.price ?? 0);

  useEffect(() => {
    request(MethodType.POST, "showcase/item", {item_id: state.id}, result => {
      setProductData(result)
    })
  }, []);

  //@ts-ignore
  const goBack = (e: any) => {
    e?.stopPropagation();
    navigate("/home");
  };

  const handleClickToBusket = (e: any) => {
    // navigate(`/basket/${productId}`, {
    //   state: { productId },
    e.stopPropagation();
    setIsLoading(true);
    setTimeout(() => {
      setItemInBusket(1);
      setIsLoading(false);
      setPrice(+productData.price);
    }, 1000);
    // });
  };

  const handleClickIncrement = (e: any) => {
    e.stopPropagation();
    setIsLoading(true);
    setTimeout(() => {
      setItemInBusket((prev) => prev + 1);
      setIsLoading(false);
      setPrice((prev: any) => +prev + +productData.price);
    }, 1000);
  };

  const handleClickDecrement = (e: any) => {
    e.stopPropagation();
    setIsLoading(true);
    setTimeout(() => {
      setItemInBusket((prev) => prev - 1);
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
      {itemInBusket === 0 ? (
        <button className="add-to-busket__button" onClick={handleClickToBusket}>
          {isLoading ? (
            <div className="loader"></div>
          ) : (
            `В корзину (${itemInBusket})`
          )}
        </button>
      ) : (
        <div className="add-to-busket__container">
          <p>egp. {price}</p>

          <div
            className={`count_container ${itemInBusket && "loading_buttons"}`}
          >
            {isLoading ? (
              <div className="loader"></div>
            ) : (
              <>
                <button onClick={handleClickDecrement}>-</button>
                <span>{itemInBusket}</span>
                <button onClick={handleClickIncrement}>+</button>
              </>
            )}
          </div>
        </div>
      )}
      <BusketButton busketCount={1} onClick={handleClickBusketBtn} />
    </div>
  );
}
