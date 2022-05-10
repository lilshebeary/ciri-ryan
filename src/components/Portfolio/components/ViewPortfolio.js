import React from "react";
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
  },
};

const ViewPortfolio = (props) => {
  const { isOpen, onClose, children } = props;
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
