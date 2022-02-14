import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form, Formik } from 'formik';
import TextInput from '../../../utilities/formControl';
import UserService from '../../../services/userService';
import { useSelector } from 'react-redux';

export default function Profil() {

  const [user, setUser] = useState({});

  const { userValue } = useSelector(state => state.user)

  let userService = new UserService();

  useEffect(() => {
    userService.getUserById(userValue.user.id).then(result => setUser(result.data))
  }, [])
  return <Formik
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
    </Form></Formik>;
}
