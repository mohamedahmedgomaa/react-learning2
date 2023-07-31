import React from "react";
import Card from "../Card/Card";

const CardList = ({namesList, deleteHandler}) => {

    const cards = namesList.map(({id, ...otherProps}) => <Card key={id} {...otherProps} id={id}  deleteHandler={deleteHandler} />);
    return <div className="mainContainer">{cards}</div>;
}

export default CardList;