import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalAppContext } from "./context";

const Modal = () => {
  const { showModal, closeModal } = useGlobalAppContext();

  return (
    <div className={`modal-overlay ${showModal ? "show-modal" : ""}`}>
      <div className="modal-container">
        <h3>Modal text is here</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
