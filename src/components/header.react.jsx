import React from 'react';
import {Nav, NavItem, Navbar, button} from 'react-bootstrap';
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
                            <span className={style.add} >Add your idea</span>
                        </NavItem>
                        <NavItem href="#">
                          {
                            props.userId != "" ?
                            <span onClick={props.logOut}> Log Out {props.userDisplayName} </span>
                            :<span className={style.login}>Login</span>
                          }
                        </NavItem>
                    </Nav>
            </Navbar.Collapse>
            </Navbar>
    );
}

export default Header;
