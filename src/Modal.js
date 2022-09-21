import React from "react";
//ReactDom contains the create portal method
import ReactDom from "react-dom";
import { CSSTransition } from "react-transition-group";



const Modal = ({ isOpen, children, onClose }) => {


  //Create portal allows for event delegation while render(like used in index.js) does not allow event delegation
  console.log(isOpen)

  return ReactDom.createPortal(
    <>
      <div className="overlay" onClick={onClose} />
      <div className="model-container">
        <CSSTransition
        in={isOpen}
        timeout={700}
        classNames="fade"
        >
        <div className="modal">
          <span className="close-button" onClick={() => onClose()}></span>
          {children}
        </div>
        </CSSTransition>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
