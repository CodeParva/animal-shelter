import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { FormSection } from '../Components/Form/FormSection';

export const MyGiveAwayModal=props=>{
    return(
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        dialogClassName="modalStyle"
        centered
      >
        <Modal.Header closeButton onclick=" location.reload()">
          <Modal.Title id="contained-modal-title-vcenter">
          Give Away
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h5 className="mb-3">What pet do you want to give?</h5>
            <FormSection/>
        </Modal.Body>

      </Modal>
    )
}
