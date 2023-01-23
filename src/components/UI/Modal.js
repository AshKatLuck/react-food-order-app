import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import { Fragment } from "react";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClickBackdrop} />;
};

const ModalOverLay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClickBackdrop={props.onClickBackdrop} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
