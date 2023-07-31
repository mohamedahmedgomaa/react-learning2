import React from "react";
import styles from "./Card.module.css";

const Card = ({namesList, type, deleteHandler}) => {

    const cards = namesList.map(({name, age, address, phone}, idx) => (
        <div className={styles.cardWrapper} key={idx} style={{backgroundColor: type === "girl" ? "pink" : "green"}}>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Address: {address}</div>
            <div>Phone: {phone}</div>
            <div className={styles.deleteBtn} onClick={(event) => deleteHandler(event,idx)}>x</div>

        </div>
    ));
    return <div className="mainContainer">{cards}</div>;
}

export default Card;