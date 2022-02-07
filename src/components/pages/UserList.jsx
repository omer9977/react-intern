import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserService from '../../services/userService';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let userService = new UserService();
    userService.getUsers().then(result => setUsers(result.data))
    // userService.getUserByUsernameAndEmail("Sincere@april.biz", "Bret").then(u=>console.log(u));
  }, [])
  return <Table responsive>
  <thead>
    <tr>
      <th>#</th>
      <th>name</th>
      <th>username</th>
      <th>email</th>
      <th>phone</th>
      <th>website</th>
    </tr>
  </thead>
  <tbody>
    {
      users.map(user => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td><Link to={`/products/${user.id}`}>{user.name}</Link></td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{user.website}</td>
          <td></td>
        </tr>
      ))}
  </tbody>
</Table>;
}
