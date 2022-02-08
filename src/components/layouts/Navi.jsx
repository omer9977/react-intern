import React, { Component, useState } from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";
import SignedIn from '../authentication/SignedIn';
import SignedOut from '../authentication/SignedOut';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/actions/authActions';


export default function Navi() {
  // const [isAuthennticated, setIsAuthennticated] = useState(false);

  const {userValue} = useSelector(state => state.user)
  
  const history = useNavigate();

  const dispatch = useDispatch();

  function handleSignOut(){
    dispatch(logout())
    history.push("/");
  }

  // function handleSignIn(){
  //   setIsAuthennticated(true);
  // }

    return (
      <Navbar className="justify-content-end">
      <Nav activeKey="/">
        {userValue.user!=null
        ?<SignedIn signOut={handleSignOut}/>
        :<SignedOut/>}
      </Nav>
    </Navbar>
    )
  }