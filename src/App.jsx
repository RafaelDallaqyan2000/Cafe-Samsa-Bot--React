import './App.css'

function App() {

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
                      return <div key={item.id} className='items'>
                          <img src={item.images[0]} width={'100%'} alt=""/>
                          <p>{item.name}</p>
                          {/*<p>{item.description}</p>*/}
                          <p>{item.price}</p>
                          <p>{item.category.name}</p>
                      </div>
                  })
              }
          </div>

      </>
  )
}

export default App
