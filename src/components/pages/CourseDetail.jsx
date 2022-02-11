import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Form, Formik } from 'formik';
import TextInput from '../../utilities/formControl';
import { toast } from 'react-toastify';
import CourseService from '../../services/courseService';


export default function CourseDetail() {
  let { id } = useParams()

  const [course, setCourse] = useState({});

  let courseService = new CourseService();

  function deleteUser(courseId) {
    courseService.deleteUser(courseId).then(response => {toast.info(`${course.name} ${course.surname} is deleted.`)})
    .catch(error => {
      if(error){
        toast.error(`${error}`)
      }
    });
  }

  useEffect(() => {
    courseService.getUserById(id).then(result => setCourse(result.data))
  }, [])
  return <Formik
  ><Form className='ui form'>
      <label>ID</label>
      <TextInput disabled name="id" value={course.id}></TextInput>
      <label>Name</label>
      <TextInput disabled name="name" value={`${course.name} ${course.surname}`}></TextInput>
      <label>Subject</label>
      <TextInput disabled name="subject" value={course.subject}></TextInput>
      <label>Teacher ID</label>
      <TextInput disabled name="teacherId" value={course.teacherId}></TextInput>
      <label>Teacher Name</label>
      <TextInput disabled name="teacherName" value={course.teacherName}></TextInput>

      <Button onClick={()=>{deleteUser(course.id)}} variant="danger" type="button">
        Delete
      </Button>
    </Form></Formik>;
}
