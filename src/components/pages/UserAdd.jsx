import { Form, Formik } from 'formik';
import React from 'react';
import { Button } from 'react-bootstrap';
import * as Yup from "yup";
import UserService from '../../services/userService';
import TextInput from '../../utilities/formControl';
import { toast } from 'react-toastify'

export default function UserAdd() {
  const initialValues = {
    username: "",
    password: "",
    name: "",
    surname: "",
    phoneNumber: "",
    email: "",
    roleId: 0
  }

  const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
    name: Yup.string().required('Required'),
    surname: Yup.string().required('Required'),
    phoneNumber: Yup.string().required('Required'),
    email: Yup.string().required('Required'),
    roleId: Yup.string().required('Required')
  })

  function handleSubmit(values) {
    let userService = new UserService();
    userService.addUser(values).then(response => {toast.success(`${values.name} ${values.surname} is added.`)})
    .catch(error => {
      if(error){
        toast.error(`${error}`)
      }
    });
  }
  return <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      handleSubmit(values);
    }}
  >
    <Form className="ui form">
      <label>Username</label>
      <TextInput name="username" placeholder="Username"></TextInput>
      <label>Password</label>
      <TextInput name="password" type="password" placeholder="Password"></TextInput>
      <label>Name</label>
      <TextInput name="name" placeholder="Name"></TextInput>
      <label>Surname</label>
      <TextInput name="surname" placeholder="Surname"></TextInput>
      <label>Phone Number</label>
      <TextInput name="phoneNumber" placeholder="Phone Number"></TextInput>
      <label>Email</label>
      <TextInput name="email" placeholder="Email"></TextInput>
      <label>Role Id</label>
      <TextInput name="roleId" placeholder="Role Id"></TextInput>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>

  </Formik>;
}
