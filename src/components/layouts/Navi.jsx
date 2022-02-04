import React, { Component } from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default function Navi() {

    return (
      <Navbar className="justify-content-end">
      <Nav activeKey="/">
        <Nav.Item>
          <Button as={Link} to="login" className='button'>Login</Button>
        </Nav.Item>
        <Nav.Item>
          <Button as={Link} to="products" className='button'>Logout</Button>
        </Nav.Item>
      </Nav>
    </Navbar>
    )
  }