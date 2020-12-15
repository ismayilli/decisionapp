import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => {
    return (
        <div>
            <Modal
                isOpen={!!props.option}
                contentLabel="ModalOpen"
                onRequestClose={props.handleCloseModal} 
            >
                <h3 className="React__Content__title">Selected Option</h3>
                <p className="React__Content__result">{props.option}</p>
                <button className="React__Content__button" onClick={props.handleCloseModal}>Okay</button>
            </Modal>
        </div>
    )
}

export default OptionModal