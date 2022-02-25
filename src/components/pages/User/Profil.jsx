import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form, Formik } from 'formik';
import TextInput from '../../../utilities/formControl';
import UserService from '../../../services/userService';
import { useSelector } from 'react-redux';

export default function Profil() {
  const { userValue } = useSelector(state => state.user)
  return <Formik
  ><Form className='ui form'>
      <label>ID</label>
      <TextInput disabled name="id" value={userValue.user.id}></TextInput>
      <label>Username</label>
      <TextInput disabled name="username" value={userValue.user.username}></TextInput>
      <label>Name</label>
      <TextInput disabled name="name" value={`${userValue.user.firstName} ${userValue.user.lastName}`}></TextInput>
      <label>Role</label>
      <TextInput disabled name="role" value={userValue.user.roleName}></TextInput>
    </Form></Formik>;
}
