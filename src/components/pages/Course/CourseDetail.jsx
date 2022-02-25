import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Form, Formik } from 'formik';
import TextInput from '../../../utilities/formControl';
import { toast } from 'react-toastify';
import CourseService from '../../../services/courseService';
import { useSelector } from 'react-redux';
import { roles } from '../../../data/roles';


export default function CourseDetail() {
  const { userValue } = useSelector(state => state.user)

  let { id } = useParams()

  const [course, setCourse] = useState({});

  let courseService = new CourseService(roles[userValue.user.roleId]);

  function deleteCourse(courseId) {
    courseService.deleteCourse(courseId).then(response => {toast.info(`${course.name} is deleted successfully.`)})
    .catch(error => {
      if(error){
        toast.error(`${error}`)
      }
    });
  }

  useEffect(() => {
    courseService.getCourseById(id).then(result => setCourse(result.data))
  }, [])
  return <Formik
  ><Form className='ui form'>
      <label>ID</label>
      <TextInput disabled name="id" value={course.id}></TextInput>
      <label>Name</label>
      <TextInput disabled name="name" value={`${course.name}`}></TextInput>
      <label>Subject</label>
      <TextInput disabled name="subject" value={course.subject}></TextInput>
      <label>Teacher ID</label>
      <TextInput disabled name="teacherId" value={course.teacherId}></TextInput>
      <label>Teacher Name</label>
      <TextInput disabled name="teacherName" value={course.teacherName}></TextInput>

      <Button onClick={()=>{deleteCourse(course.id)}} variant="danger" type="button">
        Delete
      </Button>
    </Form></Formik>;
}
