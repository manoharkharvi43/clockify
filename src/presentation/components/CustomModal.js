import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
function CustomModal({ children, open, onCloseModal }) {
  return (
    <Modal open={open} onClose={onCloseModal} center showCloseIcon={false}>
      {children}
    </Modal>
  );
}

export default CustomModal;
