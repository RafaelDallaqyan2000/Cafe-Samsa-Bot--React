import './App.css'
import React from "react";
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import {Icon, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';


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
          <div>
              <input style={{borderRadius: 50, color: 'white', padding: 10, marginRight: 5, width: '80%'}}
                     placeholder={'Я ищу...'}/>
              <button style={{borderRadius: 10, color: 'white', padding: 10}} onClick={() => {
              }}> aaa
              </button>
          </div>

          <h1>Главная</h1>

          <div className="categories-container">
              {
                  response.categories.map(item => {
                      return <div key={item.id} className='categories'>
                          <img src={item.image} alt="" width={81} height={81} loading={'lazy'}/>
                          <p>{item.name}</p>
                      </div>
                  })
              }
          </div>

          <div className="items-container">
              {
                  response.items.map(item => {
                      return <div key={item.id} className='items' onClick={() => openItem(item)}>
                          <img src={item.images[0]} width={'100%'} alt=""/>
                          <p>{item.name}</p>
                          {/*<p>{item.description}</p>*/}
                          <p>{item.price}</p>
                          <p>{item.category.name}</p>
                      </div>
                  })
              }
          </div>

          <Modal
              open={modalVisible}
              onClose={()=>setModalVisible(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              onAbort={() => setModalVisible(false)}

          >
              <div className='modal'>
                  <div style={{padding:20}}>
                      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                          <CloseIcon color="white" onClick={() => setModalVisible(false)}/>
                      </div>
                      <div style={{display: 'flex', justifyContent: 'center'}}>
                          <img src={selectedItem?.images[0]} alt="" loading={'lazy'}/>
                      </div>
                      <p>{selectedItem?.price}</p>
                      <p>{selectedItem?.name}</p>
                      <p>{selectedItem?.category?.name}</p>
                      <div style={{borderWidth: 1}}></div>
                      <p>{selectedItem?.description}</p>
                  </div>
              </div>
          </Modal>
      </>
  )
}

export default App
