import './ItemsComponent.css';
import React from "react";

const ItemsComponent = ({items, openItem = () => {}}) => {
    return <div className="items-container">
        {
            items?.map(item => {
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
}

export default ItemsComponent;
