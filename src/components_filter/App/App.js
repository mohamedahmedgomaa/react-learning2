import React, {useState, useRef} from "react";
import styles from "./App.module.css";
import Card from "../Card/Card";
import Filter from "../Filter/Filter";

const App = () => {
    const inputEl = useRef(null);
    const [cardToggle, setCardToggle] = useState(true);
    const [filter,setFilter] = useState("");
    const [state, setState] = useState([
        {
            name: "mohamed",
            age: 15,
            address: "el aharm",
            phone: "202125548"
        }, {
            name: "moha",
            age: 16,
            address: "ela aharm",
            phone: "2021255481"
        }, {
            name: "Ha",
            age: 122,
            address: "el aharm",
            phone: "202125548"
        },
    ]);

    const deleteHandler = (e, clickedIdx) => {
        console.log(clickedIdx);
        // const deleteOperation = state.filter((el, idx) => idx !== clickedIdx);
        // setState(deleteOperation);
        setState((prevState) => {
            return prevState.filter((el, idx) => idx !== clickedIdx);
        });
    }
    // const toggleHandler = () => {
    //     setCardToggle(!cardToggle);
    // }

    // const testHandler = () => {
    //     console.log(inputEl.current.value)
    // }

    // const onclick = () => {
    //     inputEl.current.focus();
    // }

    const filterNames = (name) => {
        setFilter(name);
    }
    const namesHandler = () => {
        if (filter.length !== 0) {
            return state.filter((el) => el.name.includes(filter));
        }
        return state;
    }

    return <div className={styles.mainContainer}>
        <h1>Boys Data</h1>
        <button style={{marginBottom: "20px"}}
                onClick={() => setCardToggle(!cardToggle)}>{cardToggle ? "Hide Names" : "Show Names"}</button>

        <div className={cardToggle ? styles.show : styles.hide}>

            <Filter filteration={filterNames}/>
            {/*<input type="text" placeholder="for test ref" ref={inputEl} onChange={testHandler}/>*/}
            {/*<button style={{marginBottom: "20px"}} onClick={onclick}>click</button>*/}
            <Card
                namesList={namesHandler()}
                type="men"
                deleteHandler={deleteHandler}
            />

        </div>
    </div>;
}

export default App;