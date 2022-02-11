import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { roles } from '../../data/roles';
import StudentService from '../../services/studentService';

export default function StudentList() {
  const [students, setStudents] = useState([]);

  const { userValue } = useSelector(state => state.user)

  useEffect(() => {
    let studentService = new StudentService(roles[userValue.user.roleId]);
    studentService.getStudents().then(result => setStudents(result.data))

  }, [])

  return <Table responsive>
  <thead>
    <tr>
      <th>Student ID</th>
      <th>Student No</th>
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
      students.map(student => (
        <tr key={student.studentId}>
          <td>{student.studentId}</td>
          <td>{student.studentNo}</td>
          <td><Link to={`/students/${student.studentId}`}>{student.name} {student.surname}</Link></td>
          <td>{student.username}</td>
          <td>{student.phoneNumber}</td>
          <td>{student.email}</td>
          <td>{student.schoolId}</td>
          <td>{student.schoolName}</td>
          <td>{student.schoolAdress}</td>
          <td><Button variant='info' as={Link} to={`/students/${student.studentId}`}>Detail</Button></td>
        </tr>
      ))}
  </tbody>
  <Button as={Link} to="add" >Add New Student</Button>
</Table>;;
}
