import React from 'react';
import { Col, Row } from 'react-bootstrap';
import useFirebase from '../../Hooks/useFirebase';
import './Signin.css'

const Signin = () => {
    const { signInUsingGoogle, handleEmailChange, handlePasswordChange, handleFormcontrol, error, toggolLogin, isLogin, handleNameChange } = useFirebase()

    return (
        <>
            <form onSubmit={handleFormcontrol}>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4} >
                        <div className=" from">
                            <h2>Pleace {isLogin ? 'Login' : 'Register'}</h2>
                            <div>
                                {!isLogin && <div className="user-name">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1"><i className="fas fa-user"></i></span>
                                        <input onBlur={handleNameChange} type="text" className="form-control" placeholder="Username" />
                                    </div>
                                </div>}
                                <div className="email-pass d-flex">
                                    <div className="input-group mb-3  w-50 me-2">
                                        <span className="input-group-text" id="basic-addon1"><i className="fas fa-envelope"></i></span>
                                        <input onBlur={handleEmailChange} type="email" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="input-group mb-3 w-50 ms-2">
                                        <span className="input-group-text" id="basic-addon1"><i className="fas fa-lock"></i></span>
                                        <input onBlur={handlePasswordChange} type="password" className="form-control" placeholder="Password" />
                                    </div>
                                </div>
                                <div >
                                    <input onChange={toggolLogin} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Already rejistered?
                                    </label>
                                </div>
                                <p className="text-danger text-center"> <small>{error}</small></p>
                            </div>
                            <button className="btn btn-dark">{isLogin ? 'LogIn' : 'Register'}</button>
                        </div>
                    </Col>
                    <Col md={4}></Col>
                </Row>
            </form>
            <Row className="mx-auto text-center">
                <Col md={5}> </Col>
                <Col md={2}>
                    <div className="signin-with">
                        <h4>Sign in with</h4>
                        <button className="btn btn-primary" onClick={signInUsingGoogle}><i className="fab fa-google"></i> Google</button>
                    </div>
                </Col>
                <Col md={5}></Col>
            </Row>
        </>
    );
};

export default Signin;