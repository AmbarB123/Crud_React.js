import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmDelete = ({ show, handleClose, handleConfirm }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Eliminar Pokemon</Modal.Title>
            </Modal.Header>
            <Modal.Body>¿Esta seguro de eliminar este registro?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="danger" onClick={handleConfirm}>
                    Eliminar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmDelete;
