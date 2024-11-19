import './CartModal.css';
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import React from "react";

const CartModal = ({cartModalVisible, setCartModalVisible }) => {
    return <Modal
        open={cartModalVisible}
        onClose={()=>setCartModalVisible(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onAbort={() => setCartModalVisible(false)}

    >
        <div className='cart-modal'>
            <div style={{padding:20}}>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <CloseIcon color="white" onClick={() => setCartModalVisible(false)}/>
                </div>
                <p>Hello world</p>
                {/*<div style={{display: 'flex', justifyContent: 'center'}}>*/}
                {/*    <img src={selectedItem?.images[0]} alt="" loading={'lazy'}/>*/}
                {/*</div>*/}
                {/*<p>{selectedItem?.price}</p>*/}
                {/*<p>{selectedItem?.name}</p>*/}
                {/*<p>{selectedItem?.category?.name}</p>*/}
                {/*<div style={{borderWidth: 1}}></div>*/}
                {/*<p>{selectedItem?.description}</p>*/}
            </div>
        </div>
    </Modal>
}
export default CartModal;
