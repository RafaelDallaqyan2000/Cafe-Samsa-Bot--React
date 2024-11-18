import "./productStyles.css";

export default function EveryProduct({ product, onClick }: any) {
  return (
    <div className="items" onClick={() => onClick(product)}>
      <img src={product.images[0]} width={"100%"} alt="" />
      <div>
        <p>{product.name}</p>
        {/*<p>{item.description}</p>*/}
        <p>{product.price}</p>
        <p>{product.category.name}</p>
      </div>
    </div>
  );
}
