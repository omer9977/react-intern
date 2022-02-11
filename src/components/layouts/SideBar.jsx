import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Checkbox, Grid, Menu, Sidebar } from 'semantic-ui-react'
import { SidebarData } from '../../data/SidebarData';
import "../../css/Navbar.css";
import { useSelector } from 'react-redux';


export default function SideBar() {
  const { userValue } = useSelector(state => state.user)
  let roleId = 1;
  if (Object.keys(userValue).length!==0) {
    roleId = userValue.user.roleId;
  }
  return <>
    <Nav className='nav-menu active'>
      <ul className='nav-menu-items'>
        <li className='navbar-toggle'>
          <Navbar.Brand className='navbar-text'>School Management</Navbar.Brand>
        </li>
        {SidebarData.map((item, index) => {
          if (item.roleIds.indexOf(roleId)!==-1) {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </Nav></>;

}
