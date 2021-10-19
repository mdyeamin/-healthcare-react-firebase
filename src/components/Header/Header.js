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
                    <Navbar.Brand href="#home"><h2>Health <img style={{ width: '1.4em' }} src={logo} alt="" /> Sense</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link> */}

                        </Nav>
                        <Nav className="nav-link">

                            <NavLink to="/home">Home</NavLink>
                            <NavLink to="/services">Service</NavLink>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/">Home</NavLink>
                            {/* <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link> */}

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
                        {/* <NavLink to="/signin">
                            <button className="btn signin btn-sm">Register</button>
                        </NavLink> */}
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





































