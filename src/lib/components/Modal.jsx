import React from "react";
import "./Modal.css";

const Modal = ({ toggle, children }) => {
  return (
    <div className="modal-bg">
      <div className="modal-container">
        <i
          onClick={() => toggle(false)}
          className="fa-sharp fa-solid fa-circle-xmark"
        ></i>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
