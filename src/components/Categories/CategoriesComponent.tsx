import "./CategoriesComponent.css";
import CategoryItem from "./CategoryItem/CategoryItem";

const CategoriesComponent = ({ categories }: any) => {
  return (
    <div className="categories-container">
      {[...categories, ...categories]?.map((item: any) => (
        <CategoryItem key={item.id} category={item} />
      ))}
    </div>
  );
};

export default CategoriesComponent;
