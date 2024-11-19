import SearchComponent from "../../components/Search/SearchComponent";
import CategoriesComponent from "../../components/Categories/CategoriesComponent";
import {initialData, MethodType, request} from "../../data/data";
import Products from "../../components/Products/Products";
import "./homeStyles.css";
import {useEffect, useState} from "react";

function Home() {
    const [categories, setCategories] = useState([])
    const [allItems, setAllItems] = useState([])
    const [items, setItems] = useState([])

    const onSearch = (value: string) => {
        request(MethodType.POST, 'showcase/main/search', {search_phrase: value}, response => {
            setCategories(response?.categories ?? []);
            setItems(response?.items ?? []);
        })
    }

    const onCategorySelect = (category: string) => {
        // request(MethodType.POST, 'showcase/main/category', {category}, response => {
        //     setItems(response?.shopItems ?? []);
        // })
        setItems(allItems.filter((item:any) => item.category === category));
    }

    useEffect(() => {
        request(MethodType.GET, 'showcase/main', {}, response => {
            setCategories(response?.categories ?? initialData.categories ?? []);
            setAllItems(response?.items);
            setItems(response?.items ?? initialData.items ?? []);
        })
    }, []);


  return (
    <div className="home-page__container">
      <div className="header__container">
        <SearchComponent onSearch={onSearch} />
      </div>
      <div className="home-page__body">
        <h2>Главная</h2>

        <CategoriesComponent categories={categories} onCategorySelect={onCategorySelect} />

        <Products items={items} />
      </div>
    </div>
  );
}

export default Home;
