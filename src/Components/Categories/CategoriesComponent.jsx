import './CategoriesComponent.css';
import React from "react";


const CategoriesComponent = ({categories}) => {
    return <div className="categories-container">
        {
            categories?.map(item => {
                return <div key={item.id} className='categories'>
                    <img src={item.image} alt="" width={81} height={81} loading={'lazy'}/>
                    <p>{item.name}</p>
                </div>
            })
        }
    </div>
}

export default CategoriesComponent;
