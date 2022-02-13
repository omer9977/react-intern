import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import SignedIn from '../authentication/SignedIn';
import SignedOut from '../authentication/SignedOut';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/actions/authActions';


export default function Navi() {
  const {userValue} = useSelector(state => state.user)

  const dispatch = useDispatch();

  function handleSignOut(){
    dispatch(logout())
  }

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