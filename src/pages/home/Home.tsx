import React, {useEffect} from "react";
import SearchComponent from "../../components/Search/SearchComponent";
import CategoriesComponent from "../../components/Categories/CategoriesComponent";
import { response } from "../../data/data";
import ItemModal from "../../components/Products/ItemModal";
import Products from "../../components/Products/Products";
import "./homeStyles.css";
import CartModal from "../../components/Cart/CartModal";
import CartComponent from "../../components/Cart/CartComponent";

function Home() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);
    const [cartModalVisible, setCartModalVisible] = React.useState(false);
    const [result, setResult] = React.useState();

    const openItem = (item: any) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const openCart = () => {
    setCartModalVisible(true);
  }

  const [total, setTotal] = React.useState({totalQuantity: 0, totalPrice:0.0});


  useEffect(() => {
      localStorage.setItem('result', response)

      setResult(JSON.parse(localStorage.getItem('result') ?? ''));

    },[])

  return (
    <div className="home-page__container">
      <div className="header__container">
        <SearchComponent />
      </div>
      <div className="home-page__body">
        <h2>Главная</h2>

        {// @ts-ignore
          result?.categories && <CategoriesComponent categories={
              // @ts-ignore
          result?.categories
        }/>}

        {
          // @ts-ignore
            result?.items &&
          <Products items={
          // @ts-ignore
          result?.items
        } openItem={openItem} getCartTotal={ total => {
            setTotal(total);
          }}/>}

        <ItemModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          selectedItem={selectedItem}
        />

          <CartComponent openCart={openCart} total={total}/>
          <CartModal cartModalVisible={cartModalVisible} setCartModalVisible={setCartModalVisible}/>
      </div>
    </div>
  );
}

export default Home;
