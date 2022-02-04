import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Login from '../authentication/Login';
import CourseList from '../pages/CourseList';
import StudentList from '../pages/StudentList';
import TeacherList from '../pages/TeacherList';
import Navi from './Navi';
import SideBar from './SideBar';

export default function Dashboard() {
  return <>
  <Navi />
  <Container>
    <Row>
      <Col xs={1}>
    <SideBar />
    </Col>
    <Col xs={11}>
    <Routes>
      <Route path='/' exact element={<CourseList />} />
      <Route exact path='login' element={<Login />} />
      <Route path='products' element={<TeacherList />} />
    </Routes>
    </Col>
    </Row>
  </Container>
</>;
}
