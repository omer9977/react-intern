import { Form, Formik } from 'formik';
import * as Yup from "yup";
import React from 'react';
import { Button } from 'react-bootstrap';
import TextInput from '../../utilities/formControl';
import '../../css/Login.css'
import { Label, Segment } from 'semantic-ui-react';
import UserService from '../../services/userService';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';
import { token } from '../../data/token';

export default function Login() {

  const history = useNavigate();

  const dispatch = useDispatch();

  const { userValue } = useSelector(state => state.user)

  const initialValues = {
    username: '',
    password: ''
  }

  const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required')
  })

  async function handleSubmit(values) {
    let userService = new UserService();

    

    let user = {}
    await userService.getUserByUsernameAndPassword(values.username, values.password).then(result => user = result)
    token(user.token)
    console.log(user.token)
    dispatch(login(user))
    // history.push("/");
  }

  return <div className='login'><Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      handleSubmit(values)
    }}
  >
    <Segment size='huge' padded color='black'>
      <h3>Login</h3>
      <Form className="ui form">
        <TextInput name="username" placeholder="Username"></TextInput>
        <TextInput type="password" name="password" placeholder="Password"></TextInput>
        <Button type="submit">Submit</Button>
      </Form>
    </Segment>
  </Formik>
  </div>
}
