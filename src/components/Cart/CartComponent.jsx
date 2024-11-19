import './CartComponent.css'
import {useState} from "react";
import {request, MethodType} from "../../data/data";

const CartComponent = ({ total,
                           openCart = () => {}
                       }) => {


    return <>
        <div className="cart" onClick={() => openCart()}>
            <p>КОРЗИНА ({total.totalQuantity})</p>
        </div>
    </>
}

const AddToCartComponent = ({product, getCartTotal}) => {
    const [count, setCount] = useState(0)

    return <>
        <div className="add-to-cart" onClick={() => {
            if(count === 0) {
                request(MethodType.PUT, 'cart', {chat_id:444, item_id: product.id}, result => {
                    setCount(result?.cartItems?.filter(item => item.item_id === product.id)?.quantity);
                    getCartTotal({
                        totalQuantity : result?.cartItems?.reduce((a,b) => a + b, 0),
                        totalPrice: result?.totalPrice
                    })
                } )

            }
        }}>
            {count !==0 && <p onClick={()=>{
                    request(MethodType.DELETE, `cart/${555}/items/${product.id}`, {}, result => {
                        setCount(result?.cartItems?.filter(item => item.item_id === product.id)?.quantity)
                    } )
                }}>-</p>}
            {
                !count ?
                    <p>В корзину</p>
                    : <p>{count}</p>
            }
            {count !==0  && <p onClick={() => {
                request(MethodType.PUT, 'cart', {chat_id:444, item_id: product.id}, result => {
                    setCount(result?.cartItems?.filter(item => item.item_id === product.id)?.quantity)
                } )
            }}>+</p>}
        </div>
    </>
}

export default CartComponent;
export {AddToCartComponent};

