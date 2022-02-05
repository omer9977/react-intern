import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function SignedIn({signOut}) {
  return <Nav.Item>
  <Button as={Link} to="login" onClick={signOut} className='button'>Logout</Button>
</Nav.Item>
//   <Menu.Item>
//   <Image avatar spaced="right" src="https://i.tmgrup.com.tr/gq/original/17-06/22/user_male_circle_filled1600.png"/>
//   <Dropdown pointing="top left" text='Omer'>
//       <Dropdown.Menu>
//           <Dropdown.Item text="Bilgilerim" icon="info"/>
//           <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
//       </Dropdown.Menu>
//   </Dropdown>
// </Menu.Item>
;
}
