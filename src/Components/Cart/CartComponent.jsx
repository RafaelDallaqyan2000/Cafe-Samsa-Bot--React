import './CartComponent.css'
import {useState} from "react";

const CartComponent = ({
                           openCart = () => {
                           }
                       }) => {
    const count = 1


    return <>
        <div className="cart" onClick={() => openCart()}>
            <p>КОРЗИНА ({count})</p>
        </div>
    </>
}

const AddToCartComponent = () => {
    const [count, setCount] = useState(0)
    return <>
        <div className="add-to-cart" onClick={() => {
            if(count === 0) {
                setCount(count + 1)
            }
        }}>
            {count !==0 && <p onClick={()=>{setCount(count - 1)}}>-</p>}
            {
                !count ?
                    <p>В корзину</p>
                    : <p>{count}</p>
            }
            {count !==0  && <p onClick={() => setCount(count + 1)}>+</p>}
        </div>
    </>
}

export default CartComponent;
export {AddToCartComponent};
