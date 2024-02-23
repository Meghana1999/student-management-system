import React from 'react';
import {Navbar, Container} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import logo from '../static/logo.png'
import "../App.css"


import {
    CDBSidebar,
    CDBSidebarHeader,
    CDBSidebarMenuItem,
    CDBSidebarContent,
    CDBSidebarMenu, 
    CDBSidebarFooter,
  } from 'cdbreact';


const Navigation = () => {
    return(
        <div>
            <Navbar bg='dark' variant='dark' expand="lg"> 
          <Navbar.Brand className="app-logo" href="/">
            <img
              alt=""
              src={logo}
              width="40"
              height="50"
              className="d-inline-block align-center"
            />{' '}
            Student Management Application
          </Navbar.Brand> 
      </Navbar>

      <div className='sidebar'>
      <CDBSidebar textColor='#333' backgroundColor='#f0f0f0'>
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Navigation</CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            
            <NavLink exact to="/students" activeClassName="activeClicked"> 
            <CDBSidebarMenuItem icon="list">Students List</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/manage" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="user" iconType="solid">
              Manage Students
            </CDBSidebarMenuItem>
            </NavLink>

            
          </CDBSidebarMenu>
        </CDBSidebarContent> 
      </CDBSidebar>
      </div> 
        </div>
    )
}

export default Navigation