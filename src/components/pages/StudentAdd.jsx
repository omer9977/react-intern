import { Form, Formik } from 'formik';
import React from 'react';
import { Button } from 'react-bootstrap';
import * as Yup from "yup";
import StudentService from '../../services/studentService';
import TextInput from '../../utilities/formControl';
import { toast } from 'react-toastify'

export default function StudentAdd() {
  const initialValues = {
    studentNo: "",
    userId: "",
    schoolId: ""
  }

  const validationSchema = Yup.object({
    studentNo: Yup.string().required('Required'),
    userId: Yup.string().required('Required'),
    schoolId: Yup.string().required('Required')
  })

  function handleSubmit(values) {
    let studentService = new StudentService();
    studentService.addUser(values).then(response => {toast.success(`${values.name} ${values.surname} is added.`)})
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
      <label>Student No</label>
      <TextInput name="studentNo" placeholder="studentNo"></TextInput>
      <label>User ID</label>
      <TextInput name="userId" placeholder="userId"></TextInput>
      <label>School ID</label>
      <TextInput name="schoolId" placeholder="schoolId"></TextInput>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>

  </Formik>;
}
