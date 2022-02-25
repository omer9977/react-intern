import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { roles } from '../../../data/roles';
import CourseService from '../../../services/courseService';
import AddNewCourse from '../Buttons/AddNewCourse';
import TakeCourse from '../Buttons/TakeCourse';

export default function CourseList() {
  const [courses, setCourses] = useState([]);

  const { userValue } = useSelector(state => state.user)

  let courseService = new CourseService(roles[userValue.user.roleId]);

  function takeCourse(userId, lessonId, values){
    console.log("asdsf")
    courseService.addCourseByUserIdAndLessonId(userId, lessonId, values).then(response => {toast.info(`Course is taken successfully.`)})
    .catch(error => {
      if(error){
        toast.error(`${error}`)
      }
    })
  }


  useEffect(() => {
      // courseService.getCoursesByUserId(userValue.user.id).then(result => setCourses(result.data))
      courseService.getCourses().then(result => setCourses(result.data))
      

  }, [])

  return <Table responsive>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Subject</th>
      <th>Teacher ID</th>
      <th>Teacher Name</th>
    </tr>
  </thead>
  <tbody>
    {
      courses.map(course => (
        <tr key={course.id}>
          <td>{course.id}</td>
          <td>{course.name}</td>
          <td>{course.subject}</td>
          <td>{course.teacherId}</td>
          <td>{course.teacherName}</td>
          {userValue.user.roleId===5 ? <td><Button variant='info' as={Link} to={`/courses/${course.id}`}>Detail</Button></td>:<></>}
          <th><TakeCourse click={()=>takeCourse(userValue.user.id, course.id, course)} roleId={userValue.user.roleId}/></th>
        </tr>
      ))}
  </tbody>
  <AddNewCourse roleId={userValue.user.roleId}/>
</Table>;;
}
