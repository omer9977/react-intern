import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import UserService from '../../services/userService';
import { Link } from 'react-router-dom';

export default function UserList() {
  const [users, setUsers] = useState([]);
  


  useEffect(() => {
    let userService = new UserService();
    
      userService.getUsers().then(result => setUsers(result.data))

  }, [])
  return <Table responsive>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Surname</th>
        <th>Username</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td><Link to={`/users/${user.id}`}>{user.name} {user.surname}</Link></td>
            <td>{user.surname}</td>
            <td>{user.username}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td><Button variant='info' as={Link} to={`/users/${user.id}`}>Detail</Button></td>
          </tr>
        ))}
    </tbody>
    <Button as={Link} to="add" >Add New User</Button>
  </Table>;
}
