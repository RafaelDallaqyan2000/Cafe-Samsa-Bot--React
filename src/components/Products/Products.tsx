import { useNavigate } from "react-router-dom";
import EveryProduct from "./EveryProduct";
import "./productStyles.scss";

type ItemsComponentType = {
  items: any;
};

const Products = ({ items }: ItemsComponentType) => {
  const navigate = useNavigate();

  const handleProductClick = (item: any) => {
    navigate("/product-details/1");
    console.log(item);
  };

  return (
    <div className="items-container">
      {items?.map((item: any) => {
        return (
          <EveryProduct
            onClick={handleProductClick}
            product={item}
            key={item.id}
          />
        );
      })}
    </div>
  );
};

export default Products;
