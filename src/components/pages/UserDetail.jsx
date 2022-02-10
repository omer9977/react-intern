import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as Yup from "yup";
import { Button } from 'react-bootstrap';
import { Form, Formik } from 'formik';
import TextInput from '../../utilities/formControl';
import UserService from '../../services/userService';
import { toast } from 'react-toastify';

export default function UserDetail() {
  let { id } = useParams()

  const [user, setUser] = useState({});

  let userService = new UserService();

  const initialValues = {
    id: '',
    name: '',
    subject: '',
    teacherId: '',
    teacherName: ''
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    subject: Yup.string().required('Required'),
    teacherId: Yup.string().required('Required'),
    teacherName: Yup.string().required('Required')
  })

  function deleteUser(userId) {
    userService.deleteUser(userId).then(response => {toast.info(`${user.name} ${user.surname} is deleted.`)})
    .catch(error => {
      if(error){
        toast.error(`${error}`)
      }
    });
  }

  useEffect(() => {
    userService.getUserById(id).then(result => setUser(result.data))
  }, [])
  return <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      // handleSubmit(values)
      console.log(values)
    }}
  ><Form className='ui form'>
      <label>ID</label>
      <TextInput disabled name="id" value={user.id}></TextInput>
      <label>Username</label>
      <TextInput disabled name="username" value={user.username}></TextInput>
      <label>Name</label>
      <TextInput disabled name="name" value={`${user.name} ${user.surname}`}></TextInput>
      <label>Phone Number</label>
      <TextInput disabled name="phoneNumber" value={user.phoneNumber}></TextInput>
      <label>Email</label>
      <TextInput disabled name="email" value={user.email}></TextInput>
      <label>Role</label>
      <TextInput disabled name="role" value={user.role}></TextInput>

      <Button onClick={()=>{deleteUser(user.id)}} variant="danger" type="button">
        Delete
      </Button>
    </Form></Formik>;
}
