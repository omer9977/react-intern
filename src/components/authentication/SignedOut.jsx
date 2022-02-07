import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function SignedOut() {
  return  <Nav.Item>
  <Button as={Link} to="login" className='button'>Login</Button>
</Nav.Item>;
}
