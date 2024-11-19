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
  return (
    <div className="basket-product__container">
      <div>
        <img
          src="https://samsa.ucoz.ae/_sh/00/24b.jpg?v=468"
          width={32}
          height={32}
        />
      </div>
      <div className="body">
        <h3>{product.title}</h3>
        <p>{product.price}</p>
        <div className="btn__container">
          <button>-</button>
          <p>{product.count}</p>
          <button>+</button>
        </div>
      </div>
      <div>
        <button>X</button>
      </div>
    </div>
  );
}
