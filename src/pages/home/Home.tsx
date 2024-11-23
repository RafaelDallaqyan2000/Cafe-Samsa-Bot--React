import SearchComponent from "../../components/Search/SearchComponent";
import CategoriesComponent from "../../components/Categories/CategoriesComponent";
import { initialData, MethodType, request } from "../../data/data";
import Products from "../../components/Products/Products";
import "./homeStyles.css";
import BusketButton from "../../components/BusketButton/BusketButton";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const navigate = useNavigate();

  const handleClickBusketBtn = () => {
    navigate("/busket");
  };

  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState<any>();

  const onSearch = (value: string) => {
    request(
      MethodType.POST,
      "showcase/main/search",
      { search_phrase: value },
      (response) => {
        setCategories(response?.categories ?? []);
        setItems(response?.items ?? []);
      }
    );
  };

  const onCategorySelect = (category: string) => {
    request(
      MethodType.POST,
      "showcase/main/category",
      { category_id: category },
      (response) => {
        setItems(response?.shopItems ?? []);
      }
    );
  };

  useEffect(() => {
    request(MethodType.GET, "showcase/main", {}, (response) => {
      setCategories(response?.categories ?? initialData.categories ?? []);
      setItems(response?.items ?? initialData.items ?? []);
    });

    const chatId = 795363892;

    request(
      MethodType.POST,
      "cart",
      {
        chat_id: chatId,
      },
      (result) => setCart(result)
    );
  }, [navigate]);

  return (
    <div className="home-page__container">
      <div className="header__container">
        <SearchComponent onSearch={onSearch} />
      </div>
      <div className="home-page__body">
        <h2>Главная</h2>

        <CategoriesComponent
          categories={categories}
          onCategorySelect={onCategorySelect}
        />

        <Products items={items} cart={cart} setCart={setCart} />
      </div>
      <BusketButton
        title={`КОРЗИНА (${cart?.total_quantity || 0})`}
        onClick={handleClickBusketBtn}
      />
    </div>
  );
}

export default Home;
