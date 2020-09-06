import React from 'react';
import { Modal } from "react-bootstrap"

function CustomModal({header, body, children, show}) {
  return (
    <>
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>{header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          {children}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomModal