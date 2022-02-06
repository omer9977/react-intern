import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import CourseService from '../../services/courseService';
import { Link } from 'react-router-dom';

export default function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    let courseService = new CourseService();
    courseService.getCourses().then(result => setCourses(result.data))
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
            <td><Link to={`/products/${course.id}`}>{course.title}</Link></td>
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
