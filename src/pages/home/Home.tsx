import SearchComponent from "../../components/Search/SearchComponent";
import CategoriesComponent from "../../components/Categories/CategoriesComponent";
import { response } from "../../data/data";
import Products from "../../components/Products/Products";
import "./homeStyles.css";
import BusketButton from "../../components/BusketButton/BusketButton";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClickBusketBtn = () => {
    navigate("/busket");
  };

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
      <BusketButton busketCount={1} onClick={handleClickBusketBtn} />
    </div>
  );
}

export default Home;
