import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StudentService from '../../services/studentService';

export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    let studentService = new StudentService();
    studentService.getStudents().then(result => setStudents(result.data))

  }, [])

  return <Table responsive>
  <thead>
    <tr>
      <th>ID</th>
      <th>Student No</th>
      <th>Name</th>
      <th>Username</th>
      <th>Phone</th>
      <th>Email</th>
      <th>Role</th>
      <th>School ID</th>
      <th>School Name</th>
      <th>School Address</th>
    </tr>
  </thead>
  <tbody>
    {
      students.map(student => (
        <tr key={student.id}>
          <td>{student.id}</td>
          <td><Link to={`/teachers/${student.id}`}>{student.name} {student.surname}</Link></td>
          <td>{student.username}</td>
          <td>{student.phoneNumber}</td>
          <td>{student.email}</td>
          <td>{student.role}</td>
          <td>{student.schoolId}</td>
          <td>{student.schoolName}</td>
          <td>{student.schoolAdress}</td>
          <td><Button variant='info' as={Link} to={`/students/${student.id}`}>Detail</Button></td>
        </tr>
      ))}
  </tbody>
  <Button as={Link} to="add" >Add New User</Button>
</Table>;;
}
