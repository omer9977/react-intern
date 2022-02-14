import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
    roleIds: [1, 2, 3, 4, 5]
  },
  {
    title: 'Courses',
    path: '/courses',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    roleIds: [2, 5]
  },
  {
    title: 'Courses',
    path: '/courses/teacher',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    roleIds: [3]
  },
  {
    title: 'MyCourses',
    path: '/courses/student',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    roleIds: [2]
  },
  {
    title: 'Students',
    path: '/students',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text',
    roleIds: [4, 5]
  },
  {
    title: 'Teachers',
    path: '/teachers',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text',
    roleIds: [4, 5]
  },
  {
    title: 'Users',
    path: '/users',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text',
    roleIds: [5]
  }
];