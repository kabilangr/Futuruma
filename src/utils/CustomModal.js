import React from 'react';
import Modal  from 'react-modal';
import "./customModal.css";

Modal.setAppElement(document.body);
// common modal layout with basic styles for embedding in other specific modals
function CustomModal({styles , ...props}){
  
    return (   
        <Modal
            style={{
                overlay: {
                    zIndex: 100,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                },
                content: {
                    margin : 'auto',
                    border: styles && styles.border || '1px solid #000',
                    background: styles && styles.background || '#000',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius:'10px',
                    outline: 'none',
                    // padding: '30px',
                    ...styles
                }
            }}
            isOpen={true}
            onRequestClose={props.closeModal}
            shouldCloseOnEsc={false}>
                <>
                <button className = "closeModalBtn" onClick = {props.closeModal}>X</button>
                {props.children}
                </>
        </Modal>
    )
}

export default CustomModal;