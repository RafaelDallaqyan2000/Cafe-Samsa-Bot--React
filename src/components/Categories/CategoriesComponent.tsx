import { useState } from "react";
import "./CategoriesComponent.css";
import CategoryItem from "./CategoryItem/CategoryItem";

const CategoriesComponent = ({ categories }: any) => {
  const [selectedCategory, setSelectedCategory] = useState({ id: 0 });

  const handleSelectCategory = (category: any) => {
    setSelectedCategory(category);
  };

  return (
    <div className="categories-container">
      {[...categories, ...categories]?.map((item: any) => (
        <CategoryItem
          key={item.id}
          category={item}
          onClick={handleSelectCategory}
          isActive={item.id === selectedCategory.id}
        />
      ))}
    </div>
  );
};

export default CategoriesComponent;
