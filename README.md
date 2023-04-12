# Plugin - Modal

Link library: https://www.npmjs.com/package/@wodenp98/plugin-modal-react

## Presentation

I created a modal to simplify the visualization of an action or the appearance of a form for a React application.

## Install :

```
$ npm install --save @wodenp98/plugin-modal-react
$ yarn add @wodenp98/plugin-modal-react
```

#### Import Modal :

```js
import { Modal } from "@wodenp98/plugin-modal-react";
```

#### Create the initial state for the modal :

```js
const [modalIsOpen, setModalIsOpen] = useState(false);
```

#### Example of how to use the modal :

```js
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
```
