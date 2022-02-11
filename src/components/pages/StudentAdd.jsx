import { Form, Formik } from 'formik';
import React from 'react';
import { Button } from 'react-bootstrap';
import * as Yup from "yup";
import StudentService from '../../services/studentService';
import TextInput from '../../utilities/formControl';
import { toast } from 'react-toastify'
import { roles } from '../../data/roles';
import { useSelector } from 'react-redux';

export default function StudentAdd() {
  const { userValue } = useSelector(state => state.user)

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
    let studentService = new StudentService(roles[userValue.user.roleId]);
    studentService.addStudent(values).then(response => {toast.success(`Student is added succesfully.`)})
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
      <TextInput name="studentNo" placeholder="Student No"></TextInput>
      <label>User ID</label>
      <TextInput name="userId" placeholder="User Id"></TextInput>
      <label>School ID</label>
      <TextInput name="schoolId" placeholder="School Id"></TextInput>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  </Formik>;
}
