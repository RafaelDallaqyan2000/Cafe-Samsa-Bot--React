import React from "react";
import SearchComponent from "../../components/Search/SearchComponent";
import CategoriesComponent from "../../components/Categories/CategoriesComponent";
import { response } from "../../data/data";
import ItemModal from "../../components/Products/ItemModal";
import Products from "../../components/Products/Products";
import "./homeStyles.css";

function Home() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const openItem = (item: any) => {
    setSelectedItem(item);
    setModalVisible(true);
  };
  return (
    <div className="home-page__container">
      <div className="header__container">
        <SearchComponent />
      </div>
      <div className="home-page__body">
        <h2>Главная</h2>

        <CategoriesComponent categories={response?.categories} />

        <Products items={response?.items} openItem={openItem} />

        <ItemModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          selectedItem={selectedItem}
        />
      </div>
    </div>
  );
}

export default Home;
