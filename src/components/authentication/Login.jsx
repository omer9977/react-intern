import { Form, Formik } from 'formik';
import * as Yup from "yup";
import React from 'react';
import { Button } from 'react-bootstrap';
import TextInput from '../../utilities/formControl';
import '../../css/Login.css'
import { Label, Segment } from 'semantic-ui-react';
import UserService from '../../services/userService';

export default function Login() {
  const initialValues = {
    email: '',
    password: ''
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email Format').required('Required'),
    password: Yup.string().required('Required')
  })

  function handleSubmit(values){
    let userService = new UserService();
    userService.getUserByUsernameAndEmail(values.email, values.password).then(result => console.log(result))
  }

  return <div className='login'><Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      handleSubmit(values)
      // console.log(values.email)
    }}
  >
    <Segment size='huge' padded color='black'>
    <h3>Login</h3>
    <Form className="ui form">
      <TextInput name="email" placeholder="Email"></TextInput>
      <TextInput type="password" name="password" placeholder="Password"></TextInput>
      <Button type="submit">Submit</Button>
    </Form>
    </Segment>
  </Formik>
  </div>
}
