import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function SignedIn({signOut}) {
  return <Nav.Item>
  <Button as={Link} to="/" onClick={signOut} className='button'>Logout</Button>
</Nav.Item>
;
}
