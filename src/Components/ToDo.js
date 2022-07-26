import React, { Component } from 'react';
import { Container, Form, Row, Col, Button, InputGroup, ListGroup } from 'react-bootstrap';
import { IoIosAddCircle } from 'react-icons/io';
import { AiOutlineDelete, AiTwotoneEdit, AiOutlineCheckCircle } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
class ToDo extends Component {
    constructor(props) {
        super()
        this.state = {
            indx: "0",
            isEditing: false,
            inputFromUser: "",
            listGroupItems: []
        }
    }
    ToDoDelete(indexNumber) {
        this.setState((prevState) => ({
            listGroupItems: prevState.listGroupItems.filter((todo, index) => index !== indexNumber)
        }))
    }
    ToDoItemEdit(indexNumber) {
        this.setState((prevState) => ({
            inputFromUser: prevState.listGroupItems[indexNumber],
            isEditing: true,
            indx: indexNumber
        }))
    }
    addOrUpdateToDo(inputFromUser) {
        const { isEditing, listGroupItems, indx } = this.state
        if (inputFromUser) {
            if (isEditing) {
                listGroupItems[indx] = inputFromUser
                this.setState({
                    inputFromUser: "",
                    isEditing: false
                })

            }
            else {
                this.setState((prevState) => ({
                    listGroupItems: [...prevState.listGroupItems, inputFromUser],
                    inputFromUser: ""
                }))
            }
        }


    }
    render() {
        const { listGroupItems, inputFromUser, isEditing } = this.state;
        return (

            <>
                <Container style={{ margin: "20px auto" }}>
                    <Col md={{ span: 4, offset: 4 }}>

                        <InputGroup className="mb-3">

                            <Form.Control size="lg" type="text" placeholder="Enter To-Do " value={inputFromUser} onChange={(e) => this.setState({ inputFromUser: e.target.value })} />
                            <Button variant="outline-info" size='sm' onClick={() => this.addOrUpdateToDo(inputFromUser)} >{isEditing ? <AiOutlineCheckCircle /> : <IoIosAddCircle />}</Button>


                        </InputGroup>
                        <ListGroup style={{ textAlign: 'left' }}>

                            {listGroupItems.map((listGroupItems, index) => (
                                <ListGroup.Item variant="success" key={index}>
                                    <Row>
                                        <Col md={9}>
                                            {listGroupItems}
                                        </Col>
                                        <Col md={3} >{" "}
                                            <Button variant="warning" style={{ padding: "3px" }} onClick={() => this.ToDoItemEdit(index)}><AiTwotoneEdit /></Button>
                                            <Button variant="danger" style={{ padding: "3px", margin: "3px" }} onClick={() => this.ToDoDelete(index)}><MdDelete /></Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}

                        </ListGroup>


                    </Col>
                </Container>




            </>
        )
    }
}
export default ToDo