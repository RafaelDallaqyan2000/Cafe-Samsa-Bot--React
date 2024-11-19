import axios from "axios";
import { useEffect, useState } from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import "./productStyles.scss";

export default function ProductDetails() {
  const { state } = useLocation();

  const [productData, setProductData] = useState({
    img: state.img[0],
    title: state.itemName,
    price: state.price,
    description: state.description,
    category: state.category,
    id: state.id,
  });
  const navigate = useNavigate();



  useEffect(() => {

  }, []);

  //@ts-ignore
  const goBack = (e: any) => {
    e?.stopPropagation();
    navigate("/home");
  };

  const handleClickToBusket = () => {
    navigate(`/basket/${state.id}`, {
      state,
    });
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
        <img src={productData.img} />
        <div className="text__container">
          <h1>{productData.price}</h1>
          <p className="title">{productData.title}</p>
          <p>{productData.description}</p>
        </div>
      </div>
      <button className="add-to-busket__button" onClick={handleClickToBusket}>
        В корзину
      </button>
    </div>
  );
}
