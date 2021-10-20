import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../img/health.ico'
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <>
            <Navbar className="nav" collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <NavLink style={{ textDecoration: "none" }} to="/">
                        <h2>Health <img style={{ width: '1.2em' }} src={logo} alt="" /> Sense</h2>
                    </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className="nav-link">

                            <NavLink to="/home">Home</NavLink>
                            <NavLink to="/services">Service</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/Booking">Booking</NavLink>
                            <NavLink to="/privacy">Privacy</NavLink>

                        </Nav>
                    </Navbar.Collapse>
                    <div className="user-logo">
                        <span>{user?.displayName}</span>
                        <img src={user?.photoURL} alt="" />
                    </div>


                </Container>
                <div className="me-5">
                    {!user.email ? <div>
                        <NavLink to="/signin">
                            <button className="btn btn-sm me-2 login">Login</button>
                        </NavLink>
                    </div> :
                        <NavLink to="/">
                            <button onClick={logOut} className="btn logout btn-sm">Logout</button>
                        </NavLink>}
                </div>
            </Navbar>
        </>
    );
};

export default Header;





































