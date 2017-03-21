import React from 'react';
import {Nav, NavItem, Navbar} from 'react-bootstrap';

const Header = (props) => {
    return (
            <Navbar fixedTop collapseOnSelect={true}>
                <Navbar.Header>
                    <Navbar.Brand href="/">
                        Civic Idea Hub
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem href="#">
                            Sample
                        </NavItem>
                        <NavItem href="#">
                            Sample 2
                        </NavItem>
                    </Nav>
            </Navbar.Collapse>
            </Navbar>
    );
}

export default Header;
