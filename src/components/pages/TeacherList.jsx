import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { roles } from '../../data/roles';
import TeacherService from '../../services/teacherService';

export default function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const { userValue } = useSelector(state => state.user)

  useEffect(() => {
    let teacherService = new TeacherService(roles[userValue.user.roleId]);
    teacherService.getTeachers().then(result => setTeachers(result.data))

  }, [])

  return <Table responsive>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Username</th>
      <th>Phone</th>
      <th>Email</th>
      <th>School ID</th>
      <th>School Name</th>
      <th>School Address</th>
    </tr>
  </thead>
  <tbody>
    {
      teachers.map(teacher => (
        <tr key={teacher.teacherId}>
          <td>{teacher.teacherId}</td>
          <td><Link to={`/teachers/${teacher.teacherId}`}>{teacher.name} {teacher.surname}</Link></td>
          <td>{teacher.username}</td>
          <td>{teacher.phoneNumber}</td>
          <td>{teacher.email}</td>
          <td>{teacher.schoolId}</td>
          <td>{teacher.schoolName}</td>
          <td>{teacher.schoolAdress}</td>
          <td><Button variant='info' as={Link} to={`/teachers/${teacher.teacherId}`}>Detail</Button></td>
        </tr>
      ))}
  </tbody>
  <Button as={Link} to="add" >Add New Teacher</Button>
</Table>;
}
