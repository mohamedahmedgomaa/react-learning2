import React from "react";
import Card from "../Card/Card";

const CardList = ({namesList, deleteHandler}) => {
    console.log(namesList);
    const cards = namesList.map(({id, ...otherProps}) =>
        <Card key={id} id={id}  {...otherProps}  deleteHandler={deleteHandler} />
    );
    return <div className="mainContainer">{cards}</div>;
}

export default CardList;