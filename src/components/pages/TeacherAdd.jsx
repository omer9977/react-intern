import { Form, Formik } from 'formik';
import React from 'react';
import { Button } from 'react-bootstrap';
import * as Yup from "yup";
import TeacherService from '../../services/teacherService';
import TextInput from '../../utilities/formControl';
import { toast } from 'react-toastify'
import { roles } from '../../data/roles';
import { useSelector } from 'react-redux';

export default function TeacherAdd() {
  const { userValue } = useSelector(state => state.user)

  const initialValues = {
    userId: "",
    schoolId: ""
  }

  const validationSchema = Yup.object({
    userId: Yup.string().required('Required'),
    schoolId: Yup.string().required('Required')
  })

  function handleSubmit(values) {
    let teacherService = new TeacherService(roles[userValue.user.roleId]);
    teacherService.addTeacher(values).then(response => {toast.success(`Teacher is added succesfully.`)})
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
      <label>User ID</label>
      <TextInput name="userId" placeholder="User ID"></TextInput>
      <label>School ID</label>
      <TextInput name="schoolId" placeholder="School Id"></TextInput>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>

  </Formik>;
}
