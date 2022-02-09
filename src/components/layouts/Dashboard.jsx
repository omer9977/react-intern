import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Login from '../authentication/Login';
import CourseAdd from '../pages/CourseAdd';
import CourseDetail from '../pages/CourseDetail';
import CourseList from '../pages/CourseList';
import StudentDetail from '../pages/StudentDetail';
import StudentList from '../pages/StudentList';
import TeacherDetail from '../pages/TeacherDetail';
import TeacherList from '../pages/TeacherList';
import UserAdd from '../pages/UserAdd';
import UserDetail from '../pages/UserDetail';
import UserList from '../pages/UserList';
import Navi from './Navi';
import SideBar from './SideBar';
import { ToastContainer } from 'react-toastify';

export default function Dashboard() {
  return <>
  <ToastContainer position="bottom-right"/>
  <Navi />
  <Container>
    <Row>
      <Col xs={1}>
    <SideBar />
    </Col>
    <Col xs={11}>
    <Routes>
      <Route path='/' exact element={<CourseList />} />
      <Route path='courses' exact element={<CourseList />} />
      <Route path='courses/:id' exact element={<CourseDetail />} />
      <Route path='courses/add' exact element={<CourseAdd />} />
      <Route path='students' exact element={<StudentList />} />
      <Route path='students/:id' exact element={<StudentDetail />} />
      <Route path='teachers' exact element={<TeacherList />} />
      <Route path='teachers/:id' exact element={<TeacherDetail />} />
      <Route path='users' element={<UserList />} />
      <Route path='users/:id' element={<UserDetail />} />
      <Route path='users/add' element={<UserAdd />} />
      <Route exact path='login' element={<Login />} />
    </Routes>
    </Col>
    </Row>
  </Container>
</>;
}
