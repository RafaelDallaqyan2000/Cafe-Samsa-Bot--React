export const response = JSON.parse(`{
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
}`);
