import { useState } from "react";
import "./CategoriesComponent.css";
import CategoryItem from "./CategoryItem/CategoryItem";

const CategoriesComponent = ({ categories, onCategorySelect  }: any) => {
  const [selectedCategory, setSelectedCategory] = useState({});

  const handleSelectCategory = (category: any) => {

    onCategorySelect(category.categoryName);
    setSelectedCategory(category);
  };

  return (
    <div className="categories-container">
      {categories?.map((item: any) => (
        <CategoryItem
          key={item.categoryName}
          category={item}
          onClick={handleSelectCategory}
          isActive={item.categoryName === selectedCategory}
        />
      ))}
    </div>
  );
};

export default CategoriesComponent;
