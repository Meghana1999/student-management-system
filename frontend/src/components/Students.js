import React, {useEffect, useState} from "react";
import { Table } from "react-bootstrap";
import { getStudents } from "../services/StudentService";
import "../App.css"

const Students = () =>{
    const [students, setStudents] = useState([]);

    useEffect(()=>{
        let mounted = true;
        getStudents()
           .then(data => {
            if (mounted){
                setStudents(data)
            }
        })
        return () => mounted = false;
    }, []);

    return (
        <div className="row side-row"> 
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Registration Number</th>
              <th>Email</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index)=>(
                <tr>
                    <td>{student.studentId}</td>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.registrationNo}</td>
                    <td>{student.email}</td>
                    <td>{student.course}</td>
              </tr> 
            ))} 
          </tbody>
        </Table>
        </div>
      );
}

export default Students
