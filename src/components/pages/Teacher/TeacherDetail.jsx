import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Form, Formik } from 'formik';
import TextInput from '../../../utilities/formControl';
import { toast } from 'react-toastify';
import TeacherService from '../../../services/teacherService';
import { useSelector } from 'react-redux';
import { roles } from '../../../data/roles';

export default function TeacherDetail() {
  let { id } = useParams()

  const { userValue } = useSelector(state => state.user)

  const [teacher, setTeacher] = useState({});

  let teacherService = new TeacherService(roles[userValue.user.roleId]);

  function deleteUser(teacherId) {
    teacherService.deleteTeacher(teacherId).then(response => {toast.info(`${teacher.name} ${teacher.surname} is deleted successfully.`)})
    .catch(error => {
      if(error){
        toast.error(`${error}`)
      }
    });
  }

  useEffect(() => {
    teacherService.getTeacherById(id).then(result => setTeacher(result.data))
  }, [])
  return <Formik
  ><Form className='ui form'>
      <label>ID</label>
      <TextInput disabled name="id" value={teacher.teacherId}></TextInput>
      <label>Name</label>
      <TextInput disabled name="name" value={`${teacher.name} ${teacher.surname}`}></TextInput>
      <label>Username</label>
      <TextInput disabled name="username" value={teacher.username}></TextInput>
      <label>Phone Number</label>
      <TextInput disabled name="phoneNumber" value={teacher.phoneNumber}></TextInput>
      <label>Email</label>
      <TextInput disabled name="email" value={teacher.email}></TextInput>
      <label>School ID</label>
      <TextInput disabled name="schoolId" value={teacher.schoolId}></TextInput>
      <label>School Name</label>
      <TextInput disabled name="schoolName" value={teacher.schoolName}></TextInput>
      <label>School Adress</label>
      <TextInput disabled name="schoolAdress" value={teacher.schoolAdress}></TextInput>

      <Button onClick={()=>{deleteUser(teacher.teacherId)}} variant="danger" type="button">
        Delete
      </Button>
    </Form></Formik>;;
}
