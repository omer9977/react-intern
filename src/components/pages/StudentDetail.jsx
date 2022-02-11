import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Form, Formik } from 'formik';
import TextInput from '../../utilities/formControl';
import { toast } from 'react-toastify';
import StudentService from '../../services/studentService';

export default function StudentDetail() {
  let { id } = useParams()

  const [student, setStudent] = useState({});

  let studentService = new StudentService();

  function deleteUser(studentId) {
    studentService.deleteUser(studentId).then(response => {toast.info(`${student.name} ${student.surname} is deleted.`)})
    .catch(error => {
      if(error){
        toast.error(`${error}`)
      }
    });
  }

  useEffect(() => {
    studentService.getUserById(id).then(result => setStudent(result.data))
  }, [])
  return <Formik
  ><Form className='ui form'>
      <label>ID</label>
      <TextInput disabled name="id" value={student.id}></TextInput>
      <label>Student No</label>
      <TextInput disabled name="studentNo" value={student.studentNo}></TextInput>
      <label>Name</label>
      <TextInput disabled name="name" value={`${student.name} ${student.surname}`}></TextInput>
      <label>Username</label>
      <TextInput disabled name="username" value={student.username}></TextInput>
      <label>Phone Number</label>
      <TextInput disabled name="phoneNumber" value={student.phoneNumber}></TextInput>
      <label>Email</label>
      <TextInput disabled name="email" value={student.email}></TextInput>
      <label>Role</label>
      <TextInput disabled name="role" value={student.role}></TextInput>
      <label>School ID</label>
      <TextInput disabled name="schoolId" value={student.schoolId}></TextInput>
      <label>School Name</label>
      <TextInput disabled name="schoolName" value={student.schoolName}></TextInput>
      <label>School Adress</label>
      <TextInput disabled name="schoolAdress" value={student.schoolAdress}></TextInput>

      <Button onClick={()=>{deleteUser(student.id)}} variant="danger" type="button">
        Delete
      </Button>
    </Form></Formik>;
}
