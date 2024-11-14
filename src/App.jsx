import './App.css'
import React from "react";
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import {Icon, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import SearchComponent from "./Components/Search/SearchComponent.jsx";
import CategoriesComponent from "./Components/Categories/CategoriesComponent.jsx";
import ItemsComponent from "./Components/Items/ItemsComponent.jsx";
import ItemModal from "./Components/Items/ItemModal.jsx";


function App() {

    const [modalVisible, setModalVisible] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState(null);

    const response = JSON.parse(`{
        "items": [
            {
                "id": 1,
                "name": "Меренговый рулет",
                "description": "Описание товара 1",
                "price": 400.0,
                "category": {
                    "id": "desert",
                    "name": "Категория 1"
                },
                "images": ["https://samsa.ucoz.ae/_sh/00/25b.jpg?v=569"]
            },
            {
                "id": 2,
                "name": "Компот Домашний 0,5л",
                "description": "Описание товара 2",
                "price": 15.0,
                "category": {
                    "id": "napitki",
                    "name": "Категория 2"
                },
                "images": ["https://samsa.ucoz.ae/_sh/00/26b.jpg?v=886"]
            },
            {
                "id": 3,
                "name": "Товар 3",
                "description": "Описание товара 3",
                "price": 300.0,
                "category": {
                    "id": "category3",
                    "name": "Категория 3"
                },
                "images": ["image4.jpg"]
            },
            {
                "id": 4,
                "name": "Товар 4",
                "description": "Описание товара 4",
                "price": 400.0,
                "category": {
                    "id": "category4",
                    "name": "Категория 4"
                },
                "images": ["image5.jpg"]
            }
        ],
        "categories": [
            {
                "id": "sup",
                "name": "Супы",
                "image": "../public/images/sup.jpg"
            },
            {
                "id": "garyachi",
                "name": "Горячие блюда",
                "image": "../public/images/garyachi.jpg"
            },
            {
                "id": "muchni",
                "name": "Мучные изделия",
                "image": "../public/images/muchni.jpg"
            },
            {
                "id": "desert",
                "name": "Десерты",
                "image": "../public/images/desert.webp"
            },
            {
                "id": "napitki",
                "name": "Напитки",
                "image": "../public/images/napitki.jpg"
            }
        ]
    }`)


    const openItem = (item) => {
        setSelectedItem(item);
        setModalVisible(true);
    }

  return (
      <>
          <SearchComponent/>

          <h1>Главная</h1>

          <CategoriesComponent categories={response?.categories} />

          <ItemsComponent items={response?.items} openItem={openItem} />

          <ItemModal modalVisible={modalVisible} setModalVisible={setModalVisible} selectedItem={selectedItem} />
      </>
  )
}

export default App
