import React from 'react'
import { ButtonGroup, Dropdown, DropdownButton, Nav, Navbar } from 'react-bootstrap'
import SignedIn from '../authentication/SignedIn';
import SignedOut from '../authentication/SignedOut';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/actions/authActions';
import { Link, useNavigate } from 'react-router-dom';


export default function Navi() {
  const {userValue} = useSelector(state => state.user)

  const navigate = useNavigate();

  const dispatch = useDispatch();

  function handleSignOut(){
    dispatch(logout())
    navigate("/")
    window.location.reload();
  }

    return (
      <Navbar className="justify-content-end">
      <Nav activeKey="/">
        {userValue.user!=null
        ?<DropdownButton
        style={{ marginRight: '50px' }}
        as={ButtonGroup}
        title={userValue.user.firstName}
      >
        <Dropdown.Item as={Link} to="/profil">Profil</Dropdown.Item>
        <Dropdown.Item><SignedIn signOut={handleSignOut}/></Dropdown.Item>
      </DropdownButton>
        :<SignedOut/>}
        
        
      </Nav>
    </Navbar>
    )
  }