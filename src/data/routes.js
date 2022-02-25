import { Route, Routes } from 'react-router-dom';
import Login from '../components/authentication/Login';
import CourseAdd from '../components/pages/Course/CourseAdd';
import CourseDetail from '../components/pages/Course/CourseDetail';
import CourseList from '../components/pages/Course/CourseList';
import StudentCourse from '../components/pages/Course/StudentCourse';
import StudentCourses from '../components/pages/Course/StudentCourses';
import TeacherCourses from '../components/pages/Course/TeacherCourses';
import Home from '../components/pages/Home';
import StudentAdd from '../components/pages/Student/StudentAdd';
import StudentDetail from '../components/pages/Student/StudentDetail';
import StudentList from '../components/pages/Student/StudentList';
import TeacherAdd from '../components/pages/Teacher/TeacherAdd';
import TeacherDetail from '../components/pages/Teacher/TeacherDetail';
import TeacherList from '../components/pages/Teacher/TeacherList';
import Profil from '../components/pages/User/Profil';
import UserAdd from '../components/pages/User/UserAdd';
import UserDetail from '../components/pages/User/UserDetail';
import UserList from '../components/pages/User/UserList';
import TeacherCourseAdd from '../components/pages/Course/TeacherCourseAdd';

export function getRoutesByRoleId(roleId) {
    if (roleId === 5) {
        return <Routes>
            {console.log("5")}
            <Route path='/' element={<Home />} />
            <Route path='courses' exact element={<CourseList />} />
            <Route path='courses/:id' exact element={<CourseDetail />} />
            <Route path='courses/add' exact element={<CourseAdd />} />
            <Route path='students' exact element={<StudentList />} />
            <Route path='students/add' exact element={<StudentAdd />} />
            <Route path='students/:id' exact element={<StudentDetail />} />
            <Route path='teachers' exact element={<TeacherList />} />
            <Route path='teachers/add' exact element={<TeacherAdd />} />
            <Route path='teachers/:id' exact element={<TeacherDetail />} />
            <Route path='users' element={<UserList />} />
            <Route path='users/:id' element={<UserDetail />} />
            <Route path='users/add' element={<UserAdd />} />
            <Route path='profil' element={<Profil />} />
        </Routes>
    } else if (roleId === 4) {
        return <Routes>
            {console.log("4")}
            <Route path='/' exact element={<Home />} />
            <Route path='students' exact element={<StudentList />} />
            <Route path='students/add' exact element={<StudentAdd />} />
            <Route path='students/:id' exact element={<StudentDetail />} />
            <Route path='teachers' exact element={<TeacherList />} />
            <Route path='teachers/add' exact element={<TeacherAdd />} />
            <Route path='teachers/:id' exact element={<TeacherDetail />} />
            <Route path='profil' element={<Profil />} />
        </Routes>
    }
    else if (roleId === 3) {
        return <Routes>
            {console.log("3")}
            <Route path='/' exact element={<Home />} />
            <Route path='courses' exact element={<CourseList />} />
            <Route path='courses/teacher' exact element={<TeacherCourses />} />
            <Route path='courses/:id' exact element={<CourseDetail />} />
            <Route path='courses/add' exact element={<CourseAdd />} />
            <Route path='courses/:teacherId/add' exact element={<TeacherCourseAdd />} />
            <Route path='profil' element={<Profil />} />
        </Routes>
    }
    else if (roleId === 2) {
        return <Routes>
            {console.log("2")}
            <Route path='/' exact element={<Home />} />
            <Route path='courses' exact element={<CourseList />} />
            <Route path='courses/student' element={<StudentCourses />} />
            <Route path='courses/:id' exact element={<CourseDetail />} />
            <Route path='courses/student/:id' exact element={<StudentCourse />} />
            <Route path='profil' element={<Profil />} />
        </Routes>
    }
    else {
        return <Routes>
            {console.log("1")}
            <Route exact path='/' element={<Home />} />
            <Route exact path='login' element={<Login />} />
        </Routes>
    }
}
