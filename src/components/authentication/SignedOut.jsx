import React from 'react';

export default function SignedOut({signIn}) {
  return  <Menu.Item>
  <Button onClick={signIn} primary>Giriş Yap</Button>
  <Button primary style={{marginLeft:"0.5em"}}>Kayıt Ol</Button>
</Menu.Item>;
}
