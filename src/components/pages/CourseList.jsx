import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import CourseService from '../../services/courseService';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { roles } from '../../data/roles';

export default function CourseList() {
  const [courses, setCourses] = useState([]);

  const {userValue} = useSelector(state => state.user)

  useEffect(() => {
    let role = ""
    if (Object.keys(userValue).length !== 0) {
      // console.log(roles[userValue.user.roleId])
      let role = roles[userValue.user.roleId]
      let courseService = new CourseService(role);
      courseService.getCoursess().then(result => setCourses(result.data))
    } 
  }, [])
  return <Table responsive>
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Price</th>
        <th>Category</th>
        <th>Rate</th>
        <th>Count</th>
      </tr>
    </thead>
    <tbody>
      {
        courses.map(course => (
          <tr key={course.id}>
            <td>{course.id}</td>
            <td><Link to={`/courses/${course.id}`}>{course.title}</Link></td>
            <td>{course.price}</td>
            <td>{course.category}</td>
            <td>{course.rating.rate}</td>
            <td>{course.rating.count}</td>
            <td></td>
          </tr>
        ))}
    </tbody>
  </Table>;
}
