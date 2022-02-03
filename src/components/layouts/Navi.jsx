import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default function Navi() {

    return (
      <Navbar variant='dark' bg='dark' className="justify-content-end">
      <Nav activeKey="/">
        <Nav.Item>
          <Nav.Link as={Link} to="/">Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="products">Logout</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
    )
  }