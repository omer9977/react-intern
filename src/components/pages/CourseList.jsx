import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { roles } from '../../data/roles';
import CourseService from '../../services/courseService';

export default function CourseList() {
  const [courses, setCourses] = useState([]);

  const { userValue } = useSelector(state => state.user)

  useEffect(() => {
    let courseService = new CourseService(roles[userValue.user.roleId]);
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
          <td><Link to={`/teachers/${course.id}`}>{course.name} {course.surname}</Link></td>
          <td>{course.subject}</td>
          <td>{course.teacherId}</td>
          <td>{course.teacherName}</td>
          <td><Button variant='info' as={Link} to={`/courses/${course.id}`}>Detail</Button></td>
        </tr>
      ))}
  </tbody>
  <Button as={Link} to="add" >Add New Course</Button>
</Table>;;
}
