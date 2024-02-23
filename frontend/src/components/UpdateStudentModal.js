import React,{Component} from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import { updateStudent } from '../services/StudentService';



const UpdateStudentModal = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedStudent = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            registrationNo: e.target.registrationNo.value,
            email: e.target.email.value,
            course: e.target.course.value,
        };
        updateStudent(updatedStudent, props.student.studentId)
            .then((result) => {
                alert(result);
                props.setUpdated(true);
                props.onHide(); // Hide the modal after successful update
            })
            .catch((error) => {
                console.error('Failed to update student:', error);
                alert('Failed to update student');
            });
    };
    

    return(
        <div className="container">

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Student Information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="firstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" name="firstName" required defaultValue={props.student.firstName} placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="lastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" name="lastName" required defaultValue={props.student.lastName} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="registrationNo">
                                    <Form.Label>Registration No.</Form.Label>
                                    <Form.Control type="text" name="registrationNo" required defaultValue={props.student.registrationNo} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" name="email" required defaultValue={props.student.email} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="course">
                                    <Form.Label>Course</Form.Label>
                                    <Form.Control type="text" name="course" required defaultValue={props.student.course} placeholder="" />
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
    );
}; 

export default UpdateStudentModal;