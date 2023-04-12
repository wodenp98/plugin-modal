import React from "react";
import "./Modal.css";
const Modal = ({
  toggle,
  children
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-bg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-container"
  }, /*#__PURE__*/React.createElement("i", {
    onClick: () => toggle(false),
    className: "fa-sharp fa-solid fa-circle-xmark"
  }), /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, children)));
};
export default Modal;