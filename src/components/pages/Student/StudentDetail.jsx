import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Form, Formik } from 'formik';
import TextInput from '../../../utilities/formControl';
import { toast } from 'react-toastify';
import StudentService from '../../../services/studentService';
import { useSelector } from 'react-redux';
import { roles } from '../../../data/roles';

export default function StudentDetail() {
  let { id } = useParams()

  const { userValue } = useSelector(state => state.user)

  const [student, setStudent] = useState({});

  let studentService = new StudentService(roles[userValue.user.roleId]);

  function deleteStudent(studentId) {
    studentService.deleteStudent(studentId).then(response => {toast.info(`Student is deleted successfully.`)})
    .catch(error => {
      if(error){
        toast.error(`${error}`)
      }
    });
  }

  useEffect(() => {
    studentService.getStudentById(id).then(result => setStudent(result.data))
  }, [])
  return <Formik
  ><Form className='ui form'>
      <label>ID</label>
      <TextInput disabled name="studentId" value={id}></TextInput>
      <label>Student No</label>
      <TextInput disabled name="studentNo" value={student.studentNo}></TextInput>
       <label>Name</label>
      <TextInput disabled name="name" value={`${student.user.name} ${student.user.surname}`}></TextInput>
      <label>Username</label>
      <TextInput disabled name="username" value={student.user.username}></TextInput>
      <label>Phone Number</label>
      <TextInput disabled name="phoneNumber" value={student.user.phoneNumber}></TextInput>
      <label>Email</label>
      <TextInput disabled name="email" value={student.user.email}></TextInput>
      <label>School Name</label>
      <TextInput disabled name="schoolName" value={student.school.name}></TextInput>
      <label>School Adress</label>
      <TextInput disabled name="schoolAdress" value={student.school.address}></TextInput>

      <Button onClick={()=>{deleteStudent(id)}} variant="danger" type="button">
        Delete
      </Button>
    </Form></Formik>;
}
