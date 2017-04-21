import React from 'react'

import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ReactBootstrapToggle from 'react-bootstrap-toggle'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

let styles = {
  navbar: {
    background: '#03a9f4',
    borderRadius: 0, 
    boxShadow: '0 0 4px 0',
    margin: 0, 
    textTransform: 'uppercase',
  },
}

const Navigation = () => (
  <div>
    <Navbar inverse collapseOnSelect style={styles.navbar}>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Jan Ondruch</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="profile">
            <NavItem>Profile</NavItem>
          </LinkContainer>
          <LinkContainer to="programming">
            <NavItem>Programming</NavItem>
          </LinkContainer>
            <LinkContainer to="marketPromo">
             <NavItem>Marketing & Promotion</NavItem>
          </LinkContainer>
          <LinkContainer to="freetime">
            <NavItem>Freetime</NavItem>
          </LinkContainer>
          <LinkContainer to="contact">
            <NavItem>Contact</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)    

export default Navigation