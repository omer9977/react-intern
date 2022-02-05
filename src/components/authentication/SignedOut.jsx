import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function SignedOut({signIn}) {
  return  <Nav.Item>
  <Button as={Link} to="login" onClick={signIn} className='button'>Login</Button>
</Nav.Item>;
}
