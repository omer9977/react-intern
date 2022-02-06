import React, { Component, useState } from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";
import SignedIn from '../authentication/SignedIn';
import SignedOut from '../authentication/SignedOut';


export default function Navi() {
  const [isAuthennticated, setIsAuthennticated] = useState(false);

  const history = useNavigate();

  function handleSignOut(){
    setIsAuthennticated(false);
    history.push("/");
  }

  function handleSignIn(){
    setIsAuthennticated(true);
  }

    return (
      <Navbar className="justify-content-end">
      <Nav activeKey="/">
        {isAuthennticated?<SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}
      </Nav>
    </Navbar>
    )
  }