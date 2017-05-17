import React from 'react';
import {Nav, NavItem, Navbar} from 'react-bootstrap';
import style from '../style/header.css';


const Header = (props) => {
    return (
            <Navbar className={style.header} style={{backgroundColor:"#CAEBF2"}} fixedTop collapseOnSelect={true}>
                <Navbar.Header>
                    <Navbar.Brand href="/">
                        CIVIC IDEA HUB
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem href="#" >
                            <span className={style.add} >ADD YOUR IDEA</span>
                        </NavItem>
                    </Nav>
            </Navbar.Collapse>
            </Navbar>
    );
}

export default Header;


// <NavItem href="#">
//     Sample 2
// </NavItem>
