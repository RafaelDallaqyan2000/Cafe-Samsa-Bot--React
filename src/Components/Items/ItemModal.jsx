import './ItemModal.css';
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import React from "react";

const ItemModal = ({selectedItem, modalVisible, setModalVisible }) => {
    return <Modal
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
}
export default ItemModal;
