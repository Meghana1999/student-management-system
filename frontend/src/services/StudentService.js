import axios from 'axios';

export function getStudents() {
    return axios.get('http://127.0.0.1:8000/students/')
        .then(response => response.data)
        .catch(error => { 
            console.error('Error fetching students:', error);
            throw error;
        });
}

export function addStudent(student) {
    return axios.post('http://127.0.0.1:8000/students/',{
        studentId: null,
        firstName: student.firstName.value,
        lastName:  student.lastName.value,
        registrationNo:  student.registrationNo.value,
        email:  student.email.value,
        course: student.course.value,
    })
        .then(response => response.data)
}


// export function updateStudent(student, studentId) {
//     return axios.put('http://127.0.0.1:8000/students/'+ studentId+ "/",{ 
//         firstName: student.firstName.value,
//         lastName:  student.lastName.value,
//         registrationNo: student.registrationNo.value,
//         email:  student.email.value,
//         course: student.course.value,
//     })
//         .then(response => response.data)
// }

// export function updateStudent(student, studentId) {
//     console.log('Student object:', student);
//     console.log('Student ID:', studentId);
    
//     return axios.put(`http://127.0.0.1:8000/students/${studentId}`, { 
//         firstName: student.firstName.value,
//         lastName:  student.lastName.value,
//         registrationNo:  student.registrationNo.value,
//         email:  student.email.value,
//         course: student.course.value,
//     })
//     .then(response => response.data) 
// }

export function updateStudent(student, studentId) {
    console.log('Student object:', student);
    console.log('Student ID:', studentId);
    
    return axios.put(`http://127.0.0.1:8000/students/${studentId}`, { 
        firstName: student.firstName,
        lastName: student.lastName,
        registrationNo: student.registrationNo,
        email: student.email,
        course: student.course,
    })
    .then(response => response.data)
    .catch(error => {
        console.error('Error updating student:', error);
        throw error; // Rethrow the error to handle it in the calling code
    });
}


export function deleteStudent(studentId) {
    return axios.delete('http://127.0.0.1:8000/students/' + studentId, {
     method: 'DELETE',
     headers: {
       'Accept':'application/json',
       'Content-Type':'application/json'
     }
    })
    .then(response => response.data)
  }

