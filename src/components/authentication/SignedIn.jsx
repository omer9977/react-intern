import React from 'react';

export default function SignedIn({signOut}) {
  return <Menu.Item>
  <Image avatar spaced="right" src="https://i.tmgrup.com.tr/gq/original/17-06/22/user_male_circle_filled1600.png"/>
  <Dropdown pointing="top left" text='Omer'>
      <Dropdown.Menu>
          <Dropdown.Item text="Bilgilerim" icon="info"/>
          <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
      </Dropdown.Menu>
  </Dropdown>
</Menu.Item>;
}
