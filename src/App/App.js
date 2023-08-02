import React, {Fragment, useState} from "react";
import styles from "./App.module.css";
import CardList from "../components/CardList/CardList";
import FilterInput from "../components/FilterInput/FilterInput";
import Model from "../components/Model/Model";
import Button from "../components/Layout/Button";
import Row from "../components/Layout/Row";
import AddUser from "../components/AddUser/AddUser";

const App = () => {
    // const inputEl = useRef(null);
    const [cardToggle, setCardToggle] = useState(true);
    const [filter, setFilter] = useState("");
    const [showModel, setShowModel] = useState(false);
    const [state, setState] = useState([
        {
            id: 1,
            name: "mohamed",
            age: 15,
            address: "el aharm",
            phone: "202125548",
            type: "boy"
        }, {
            id: 2,
            name: "nana",
            age: 16,
            address: "ela aharm",
            phone: "2021255481",
            type: "girl"
        }, {
            id: 3,
            name: "moha",
            age: 16,
            address: "ela aharm",
            phone: "2021255481",
            type: "boy"
        }, {
            id: 4,
            name: "Ha",
            age: 122,
            address: "el aharm",
            phone: "202125548",
            type: "girl"
        },
    ]);

    const addNewUserHandler = (data) => {
        // setState((prevState) => {
        //     return [
        //       ...prevState,
        //         {
        //             id: prevState.length + 1,
        //             name: data.name,
        //             age: data.age,
        //             address: data.address,
        //             phone: data.phone,
        //             type: data.type
        //         }
        //     ];
        // });
        setState((prevState) => [...prevState , data]);
        // setShowModel(false);
    }

    const deleteHandler = (e, selectedID) => {
        setState((prevState) => {
            return prevState.filter((el) => el.id !== selectedID);
        });
    }

    const filterNames = (name) => {
        setFilter(name);
    }
    const namesHandler = () => {
        if (filter.length !== 0) {
            return state.filter((el) => el.name.includes(filter));
        }
        return state;
    }

    return (
        <Fragment>
            <Row className={styles.mainContainer}>

                <h1>List of Data</h1>
                <Row style={{display: "flex", marginBottom: "10px"}}>
                    {/* new button */}
                    <Button
                        style={{marginRight: "20px"}}
                        onClick={() => setCardToggle(!cardToggle)}
                    >
                        {cardToggle ? "Hide Names" : "Show Names"}
                    </Button>

                    {/*<button style={{marginRight: "20px"}} className={styles.button}*/}
                    {/*        onClick={() => setCardToggle(!cardToggle)}>{cardToggle ? "Hide Names" : "Show Names"}</button>*/}

                    {/*<button style={{marginRight: "20px"}} className={styles.button} onClick={() => setShowModel(true)}>*/}
                    {/*    New Record*/}
                    {/*</button>*/}

                    <Button style={{marginRight: "20px"}} onClick={() => setShowModel(true)}>
                        New Record
                    </Button>
                </Row>
                <Row className={cardToggle ? styles.show : styles.hide}>

                    <FilterInput filteration={filterNames}/>
                    {/*<input type="text" placeholder="for test ref" ref={inputEl} onChange={testHandler}/>*/}
                    {/*<button style={{marginBottom: "20px"}} onClick={onclick}>click</button>*/}
                    <CardList
                        namesList={namesHandler()}
                        type="men"
                        deleteHandler={deleteHandler}
                    />

                </Row>
            </Row>

            <Model show={showModel} closeModel={() => setShowModel(false)}>
                <AddUser addNewUserHandler={addNewUserHandler} closeModel={() => setShowModel(false)}/>
            </Model>
        </Fragment>
    );
}

export default App;