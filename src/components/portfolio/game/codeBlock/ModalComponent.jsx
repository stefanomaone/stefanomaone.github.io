import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

function ModalComponent({ isOpen, onRequestClose, title, children }) {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel={title}
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    width: '90vw',          // Adatta la larghezza al viewport per schermi piccoli
                    maxWidth: '100%',      // Limite massimo di larghezza per schermi grandi
                    height: 'auto',         // Adatta l'altezza al contenuto
                    maxHeight: '80vh',      // Limite massimo di altezza per evitare overflow
                    padding: '20px',        // Spazio interno per una buona leggibilità
                    overflow: 'auto',       // Abilita lo scroll se il contenuto supera l'altezza
                },
            }}
        >
            <h2>{title}</h2>
            <div>{children}</div>
        </ReactModal>
    );
}

ModalComponent.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
};


export default ModalComponent;
