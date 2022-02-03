import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import CourseList from '../pages/CourseList';
import StudentList from '../pages/StudentList';
import Navi from './Navi';
import SideBar from './SideBar';

export default function Dashboard() {
  return <>
  <Navi />
  <Container>
    <Row>
      <Col xs={2}>
    <SideBar />
    </Col>
    <Col xs={10}>
    <Routes>
      <Route path='/' exact element={<CourseList />} />
      <Route exact path='reports' element={<StudentList />} />
      <Route path='products' element={<CourseList />} />
    </Routes>
    </Col>
    </Row>
  </Container>
</>;
}
