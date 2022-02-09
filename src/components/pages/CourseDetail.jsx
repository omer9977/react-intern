import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as Yup from "yup";
import { Button } from 'react-bootstrap'
import CourseService from '../../services/courseService';
import { Form, Formik } from 'formik';
import TextInput from '../../utilities/formControl';

export default function CourseDetail() {
  let { id } = useParams()

  const [course, setCourse] = useState({});

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

  useEffect(() => {
    let courseService = new CourseService();
    courseService.getCourseById(id).then(result => setCourse(result.data))
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
      <TextInput disabled name="id" placeholder="ID"></TextInput>
      <label>Name</label>
      <TextInput name="name" placeholder="Name"></TextInput>
      <label>Subject</label>
      <TextInput name="subject" placeholder="Subject"></TextInput>
      <label>Teacher ID</label>
      <TextInput name="teacherId" placeholder="Teacher ID"></TextInput>
      <label>Teacher Name</label>
      <TextInput disabled name="teacherName" placeholder="Teacher Name"></TextInput>

      <Button variant="primary" type="submit">
        Update
      </Button>

      <Button variant="danger" type="button">
        Delete
      </Button>
    </Form></Formik>;
}
