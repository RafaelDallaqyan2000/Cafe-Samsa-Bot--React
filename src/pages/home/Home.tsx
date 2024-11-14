import React from "react";
// import CategoriesComponent from "../../Components/Categories/CategoriesComponent";
// import ItemsComponent from "../../Components/Items/ItemsComponent";
// import ItemModal from "../../Components/Items/ItemModal";
// import { response } from "../../data/data";

import "./homeStyles.css";
import SearchComponent from "../../components/Search/SearchComponent";
import CategoriesComponent from "../../components/Categories/CategoriesComponent";
import { response } from "../../data/data";
import ItemsComponent from "../../components/Items/ItemsComponent";
import ItemModal from "../../components/Items/ItemModal";

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

        <ItemsComponent items={response?.items} openItem={openItem} />

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
