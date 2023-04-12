import React, { useState } from "react";
import "./App.css";
import Modal from "./lib/components/Modal";

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <div className="modal-presentation">
        <h1>Plugin Modal</h1>
        <p>Click on the button below to display the modal</p>
        <div className="modal-btn" onClick={toggleModal}>
          Open modal
        </div>
      </div>
      {modalIsOpen && (
        <Modal toggle={toggleModal}>
          <h1>Employee Created!</h1>
        </Modal>
      )}
    </>
  );
};

export default App;
