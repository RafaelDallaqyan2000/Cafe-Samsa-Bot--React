import "./busketBtnStyles.scss";

export default function BusketButton({
  busketCount = 0,
  onClick = () => {},
}: {
  busketCount: number;
  onClick: () => void;
}) {
  return (
    <div className="busket-btn__container">
      <button onClick={onClick}>КОРЗИНА ({busketCount})</button>
    </div>
  );
}
