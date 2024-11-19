import "./categoryStyles.css";

export default function CategoryItem({ category, onClick, isActive }: any) {
  return (
    <div
      key={category.categoryName}
      className={`categories-item ${isActive && "active-category"}`}
      onClick={() => onClick(category)}
    >
      <div className="categories-item-body">
        <img
          src={
            category.categoryPhotoLink.replace('?usp=drive_link)', '')
          }
          alt=""
          width={81}
          height={81}
          loading={"lazy"}
        />
        <span>{category.categoryName}</span>
      </div>
    </div>
  );
}
