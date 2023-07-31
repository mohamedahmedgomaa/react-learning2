import React, {Fragment} from "react";

const App = () => {
    const pStyles = {
        color: 'red',marginTop: "100px"
    };
    const myName = "Mohamed";
    const names = ["Mohamed", "Ahmed", "Gomaa"];
    return (
        <Fragment>
            <div style={pStyles}>Hello , {myName === "Mohamed" ? "Hello mohamed gomaa" : "Hello There"}</div>
            <div>{names.map((el) => (
                <p>{el}</p>
            ))}</div>
        </Fragment>
    );
} 

export default App;