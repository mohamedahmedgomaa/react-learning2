import React, {Fragment} from "react";
import ReactDom from "react-dom";
import styles from "./Model.module.css";

const BackDrop = ({close, show}) => {
    return <div className={`${styles.backDrop} ${show ? styles.showBackDrop : null}`} onClick={close}></div>;
}
const Overlay = ({children, show}) => {
    return  <div className={`${styles.overlay} ${show ? styles.showOverlay : null}`}>
        {children}
    </div>
};
const Model = ({children, show, closeModel}) => {
    return (

        <Fragment>
            {
                ReactDom.createPortal(
                    <Fragment>
                        <BackDrop close={closeModel} show={show}/>
                        <Overlay show={show}>{children}</Overlay>
                    </Fragment>, document.getElementById("model"))
            }
        </Fragment>

    );
}

export default Model;