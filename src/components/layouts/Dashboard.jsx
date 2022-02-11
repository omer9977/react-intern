import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navi from './Navi';
import SideBar from './SideBar';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { getRoutesByRoleId } from '../../data/routes';

export default function Dashboard() {
  const { userValue } = useSelector(state => state.user)
  let roleId = 0;
  if (Object.keys(userValue).length!==0) {
    roleId = userValue.user.roleId;
  }
  return <>
    <ToastContainer position="bottom-right" />
    <Navi />
    <Container>
      <Row>
        <Col xs={1}>
          <SideBar />
        </Col>
        <Col xs={11}>
        {getRoutesByRoleId(roleId)}
        </Col>
      </Row>
    </Container>
  </>;
}