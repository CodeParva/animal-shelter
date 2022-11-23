import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Tab } from '../Components/Tab/Tab';


export const MyPetsModal=props=>{
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        dialogClassName="modalStyle"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className='py-lg-2 pb-3'>
          What all pets do we have ?  
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Tab/>
        </Modal.Body>

      </Modal>
    );
  }