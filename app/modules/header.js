import React from 'react';
import {withRouter} from 'react-router';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class header extends React.Component{
  navigate(url){
    this.props.history.push(url);
  }

  render() {
    return (
    	<div className="home-header">
         <Navbar className="navbar navbar-normal-pages navbar-show">
            <Navbar.Header>
              <Navbar.Brand>
                <a onClick={this.navigate.bind(this,"/")} >
                  <img src = "img/logosmall.png" />
                </a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem eventKey={2} onClick={this.navigate.bind(this,"/about")}>About Us</NavItem>
                <NavItem eventKey={3} onClick={this.navigate.bind(this,"/recentnews")}>News</NavItem>
                <NavItem eventKey={4} onClick={this.navigate.bind(this,"/faq")}>FAQ</NavItem>
                <NavItem eventKey={5} onClick={this.navigate.bind(this,"/sponsors")}>Sponsors</NavItem>
                <NavItem eventKey={6} onClick={this.navigate.bind(this,"/contact")}>Contact Us</NavItem>
                <NavItem className="btn-primary" eventKey={7} onClick={this.navigate.bind(this,"/donate")}>Donate Now</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
    	</div>
    	)
  }
};

export default withRouter(header);