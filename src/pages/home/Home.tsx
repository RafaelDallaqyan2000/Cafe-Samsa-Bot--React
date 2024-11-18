import SearchComponent from "../../components/Search/SearchComponent";
import CategoriesComponent from "../../components/Categories/CategoriesComponent";
import { response } from "../../data/data";
import Products from "../../components/Products/Products";
import "./homeStyles.css";

function Home() {
  return (
    <div className="home-page__container">
      <div className="header__container">
        <SearchComponent />
      </div>
      <div className="home-page__body">
        <h2>Главная</h2>

        <CategoriesComponent categories={response?.categories} />

        <Products items={response?.items} />
      </div>
    </div>
  );
}

export default Home;
