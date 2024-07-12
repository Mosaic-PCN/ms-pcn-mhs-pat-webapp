import React from 'react';
import Modal from 'react-modal';
import './HelpModal.css';

Modal.setAppElement('#root'); // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

const HelpModal = ({ isOpen, onRequestClose, content }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Help Modal"
            className="modal"
            overlayClassName="overlay"
        >
            <div className="modal-content">
                <h2>Help</h2>
                <div>{content}</div>
                <button onClick={onRequestClose} className="btn btn-secondary">Close</button>
            </div>
        </Modal>
    );
};

export default HelpModal;