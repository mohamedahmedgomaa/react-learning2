import React, {Fragment} from "react";
import ReactDom from "react-dom";
import Controller from "../Layout/Controller";
import styles from "./Model.module.css";

const BackDrop = ({close, show}) => {
    return <div className={`${styles.backDrop} ${show ? styles.showBackDrop : null}`} onClick={close}></div>;
}
const Overlay = ({show}) => {
    return  <div className={`${styles.overlay} ${show ? styles.showOverlay : null}`}>
        <form>
            <Controller>
                <label htmlFor="name">Name</label>
                <input type="name" placeholder="Enter name"/>
            </Controller>
        </form>
    </div>
};
const Model = ({show, closeModel}) => {
    return (

        <Fragment>
            {
                ReactDom.createPortal(
                    <Fragment>
                        <BackDrop close={closeModel} show={show}/>
                        <Overlay show={show}/>
                    </Fragment>, document.getElementById("model"))
            }
        </Fragment>

    );
}

export default Model;