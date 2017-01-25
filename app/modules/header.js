import React from 'react';
import {Link} from 'react-router';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default React.createClass({
  render() {
    return (
    	<div className="home-header">
         <Navbar className="navbar navbar-normal-pages navbar-show">
            <Navbar.Header>
              <Navbar.Brand>
                <Link className="navbar-brand" to="/">
                  <img src = "img/logosmall.png" />
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <LinkContainer to ="/about" activeClassName="active">
                  <NavItem eventKey={2}>About Us</NavItem>
                </LinkContainer>
                <LinkContainer to ="/recentnews" activeClassName="active">
                  <NavItem eventKey={3}>News</NavItem>
                </LinkContainer>
                <LinkContainer to ="/faq" activeClassName="active">
                  <NavItem eventKey={4}>FAQ</NavItem>
                </LinkContainer>
                <LinkContainer to ="/sponsors" activeClassName="active">
                  <NavItem eventKey={5}>Sponsors</NavItem>
                </LinkContainer>
                <LinkContainer to ="/contact" activeClassName="active">
                  <NavItem eventKey={6}>Contact Us</NavItem>
                </LinkContainer>
                <LinkContainer to ="/donate" activeClassName="active">
                  <NavItem className="btn-primary" eventKey={7}>Donate Now</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
    	</div>
    	)
  }
})