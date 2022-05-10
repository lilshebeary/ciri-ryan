import React, { useEffect } from "react";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    zIndex: 999999,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "2rem",
    maxHeight: "40rem",
    maxWidth: "40rem",
  },
};

const ViewPortfolio = (props) => {
  const { isOpen, onClose, children } = props;

  const onCloseModal = (...args) => {
    onClose(...args);
  };

  useEffect(() => {
    if (isOpen) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "initial";
    }
  }, [isOpen]);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {children}
      </Modal>
    </div>
  );
};

export default ViewPortfolio;
