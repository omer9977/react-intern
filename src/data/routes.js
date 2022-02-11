import { Route, Routes } from 'react-router-dom';
import Login from '../components/authentication/Login';
import CourseAdd from '../components/pages/CourseAdd';
import CourseDetail from '../components/pages/CourseDetail';
import CourseList from '../components/pages/CourseList';
import Home from '../components/pages/Home';
import StudentDetail from '../components/pages/StudentDetail';
import StudentList from '../components/pages/StudentList';
import TeacherAdd from '../components/pages/TeacherAdd';
import TeacherDetail from '../components/pages/TeacherDetail';
import TeacherList from '../components/pages/TeacherList';
import UserAdd from '../components/pages/UserAdd';
import UserDetail from '../components/pages/UserDetail';
import UserList from '../components/pages/UserList';
import RequireAuth from './requireAuth';

export function getRoutesByRoleId(roleId) {
    if (roleId === 5) {
        return <Routes>
            {console.log("5")}
            <Route path='/' element={<Home />} />
            <Route path='courses' exact element={<CourseList />} />
            <Route path='courses/:id' exact element={<CourseDetail />} />
            <Route path='courses/add' exact element={<CourseAdd />} />
            <Route path='students' exact element={<StudentList />} />
            <Route path='students/:id' exact element={<StudentDetail />} />
            <Route path='teachers' exact element={<TeacherList />} />
            <Route path='teachers/add' exact element={<TeacherAdd />} />
            <Route path='teachers/:id' exact element={<TeacherDetail />} />
            <Route path='users' element={<UserList />} />
            <Route path='users/:id' element={<UserDetail />} />
            <Route path='users/add' element={<UserAdd />} />
        </Routes>
    } else if (roleId === 4) {
        return <Routes>
            {console.log("4")}
            <Route path='/' exact element={<Home />} />
            <Route path='students' exact element={<StudentList />} />
            <Route path='students/:id' exact element={<StudentDetail />} />
            <Route path='teachers' exact element={<TeacherList />} />
            <Route path='teachers/add' exact element={<TeacherAdd />} />
            <Route path='teachers/:id' exact element={<TeacherDetail />} />
        </Routes>
    }
    else if (roleId === 3) {
        return <Routes>
            {console.log("3")}
            <Route path='/' exact element={<Home />} />
            <Route path='courses' exact element={<CourseList />} />
            <Route path='courses/:id' exact element={<CourseDetail />} />
            <Route path='courses/add' exact element={<CourseAdd />} />
        </Routes>
    }
    else if (roleId === 2) {
        return <Routes>
            {console.log("2")}
            <Route path='/' exact element={<Home />} />
            <Route path='courses' exact element={<CourseList />} />
            <Route path='courses/:id' exact element={<CourseDetail />} />
            <Route path='courses/add' exact element={<CourseAdd />} />
        </Routes>
    }
    else {
        return <Routes>
            {console.log("1")}
            <Route exact path='/' element={<Home />} />
            <Route exact path='login' element={<Login />} />
            <Route path='login' element={<Login />} />
        </Routes>
    }
}
