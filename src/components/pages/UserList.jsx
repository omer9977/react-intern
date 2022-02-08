import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UserService from '../../services/userService';

export default function UserList() {
  const [users, setUsers] = useState([]);
  


  useEffect(() => {
    let userService = new UserService();
    
      userService.getUsers().then(result => setUsers(result.data))

  }, [])
  return <Table responsive>
    <thead>
      <tr>
        <th>#</th>
        <th>name</th>
        <th>surname</th>
        <th>username</th>
        <th>phone</th>
        <th>email</th>
        <th>role</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td><Link to={`/products/${user.id}`}>{user.name}</Link></td>
            <td>{user.surname}</td>
            <td>{user.username}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td></td>
          </tr>
        ))}
    </tbody>
  </Table>;
}
