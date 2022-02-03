import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Checkbox, Grid, Menu, Sidebar } from 'semantic-ui-react'
import { SidebarData } from '../../data/SidebarData';
import "../../css/Navbar.css";


export default function SideBar() {
  const [visible, setVisible] = React.useState(false)

  return  <>
      
    <Nav className='nav-menu active'>
        
    <ul className='nav-menu-items'>
      <li className='navbar-toggle'>
      <Navbar.Brand className='nav-text'>School Management System</Navbar.Brand>
        {/* <Link to='#' className='menu-bars'>
          <AiIcons.AiOutlineClose />
        </Link> */}
      </li>
      {SidebarData.map((item, index) => {
        return (
          <li key={index} className={item.cName}>
            <Link to={item.path}>
              {item.icon}
              <span>{item.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  </Nav></>;
  
}
