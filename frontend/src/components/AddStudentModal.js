import React from "react";
import {Form, Row, Col, Button, Modal} from 'react-bootstrap';
import {addStudent} from "../services/StudentService"

const AddStudentModal = (props) =>{

    const handleSubmit = (e) =>{
        e.preventDefault();
        addStudent(e.target)
        .then((result)=>{
            alert(result);
            props.setUpdated(true);
        },
        (error)=>{
            alert("Failed to add Student")
        }
        )
    }
    return(
        <div className="container">
             <Modal {...props}
             size="lg"
             aria-labelledby="contained-modal-title-vcenter"
             centered
             >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter"> Fill In Student Information</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="firstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" name="firstName" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="lastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" name="lastName" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="registrationNo">
                                    <Form.Label>Registration No.</Form.Label>
                                    <Form.Control type="text" name="registrationNo" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" name="email" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="course">
                                    <Form.Label>Course</Form.Label>
                                    <Form.Control type="text" name="course" required placeholder="" />
                            </Form.Group>
                            <Form.Group>
                                <p></p>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" type="submit" onClick={props.onHide}>
                        Close
                </Button>

                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddStudentModal;