import './ItemsComponent.css';
import React from "react";
import {AddToCartComponent} from "../Cart/CartComponent.jsx";

const ItemsComponent = ({items, openItem = () => {}}) => {
    return <div className="items-container">
        {
            items?.map(item => {
                return <div key={item.id} className='items'>
                    <div onClick={() => openItem(item)}>
                        <img src={item.images[0]} width={'100%'} alt=""/>
                        <p>{item.name}</p>
                        {/*<p>{item.description}</p>*/}
                        <p>{item.price}</p>
                        <p>{item.category.name}</p>
                    </div>
                    <AddToCartComponent/>
                </div>
            })
        }
    </div>
}

export default ItemsComponent;
