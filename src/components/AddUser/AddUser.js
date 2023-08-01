import React, {useState} from 'react';
import Form from "../Layout/Form";
import Button from "../Layout/Button";
import Row from "../Layout/Row";

const AddUser = ({addNewUserHandler,closeModel}) => {
    // const [input, setInput] = useState({
    //     name: "",
    //     age: "",
    //     address: "",
    //     phone: "",
    //     type: "",
    // });
    //
    // const inputHandler = (e) => {
    //     console.log(e.target);
    //     const key = e.target.id;
    //     const value = e.target.value;
    // if(key === name){ setAge(e.target.value) }
    //     // setInput({...input, [key]: value});
    //     setInput((prevState) => ({...prevState, [key]: value}));
    // }
    const onSubmitHandler = (e) => {
        // console.log(input);
        // console.log(name,age,address,phone,type);
        e.preventDefault();
        addNewUserHandler({
            id: Math.round(Math.random() * 100),
            name,
            age,
            address,
            phone,
            type,
        });
        setName("");
        setAge("");
        setPhone("");
        setType("");
        setAddress("");
        closeModel();
    }

    const [name , setName] = useState("");
    const [age , setAge] = useState("");
    const [phone , setPhone] = useState("");
    const [address , setAddress] = useState("");
    const [type , setType] = useState("");

    return (
        <Form onSubmit={onSubmitHandler}>
            <Form.Controller>
                <label htmlFor="name">Name</label>
                <input type="name" id="name" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}/>
            </Form.Controller>
            <Form.Controller>
                <label htmlFor="age">Age</label>
                <input type="name" id="age" placeholder="Enter age" value={age} onChange={(e) => setAge(e.target.value)}/>
            </Form.Controller>

            <Form.Controller>
                <label htmlFor="phone">Phone</label>
                <input type="name" id="phone" placeholder="Enter phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
            </Form.Controller>
            <Form.Controller>
                <label htmlFor="address">Address</label>
                <input type="name" id="address" placeholder="Enter address" value={address}
                       onChange={(e) => setAddress(e.target.value)}/>
            </Form.Controller>
            <Form.Controller>
                <label htmlFor="type">type</label>
                <input type="name" id="type" placeholder="Enter type" value={type}
                       onChange={(e) => setType(e.target.value)}/>
            </Form.Controller>
            <Row>
                <Button
                    type="submit"
                    style={{marginRight: "20px"}}
                >
                    Save
                </Button>
                <Button type="reset">Reset</Button>
            </Row>
        </Form>
    )
}
export default AddUser;