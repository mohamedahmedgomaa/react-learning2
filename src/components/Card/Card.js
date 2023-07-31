import React from "react";
import styles from "./Card.module.css";

const Card = ({id,name,age,address,phone,type, deleteHandler}) => {
    return(
        <div
            className={styles.cardWrapper}
             style={{backgroundColor: type === "girl" ? "pink" : "green"}}
        >
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Address: {address}</div>
            <div>Phone: {phone}</div>
            <div className={styles.deleteBtn} onClick={(event) => deleteHandler(event,id)}>x</div>

        </div>
    );
}

export default Card;