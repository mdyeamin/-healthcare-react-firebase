import React, { useEffect, useState } from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import './Home.css'
import doctor1 from '../../img/doctor1.jpg'
import doctor2 from '../../img/doctor2.jpg'
import doctor3 from '../../img/doctor3.jpg'
import HomeService from '../HomeService/HomeService';
import { NavLink } from 'react-router-dom';
import medical from '../../img/medical.jpg'
import hart from '../../img/hart.jpg'
// 
import oparetion1 from '../../img/oparetion1.jpg'
import oparetion2 from '../../img/oparetion2.jpg'
import oparetion3 from '../../img/oparetion3.jpg'
import oparetion4 from '../../img/oparetion4.jpg'
const Home = () => {
    const [healthInfo, setHealthInfo] = useState([])
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setHealthInfo(data.slice(0, 6)))
    }, [])
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={doctor1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2 className="text-white">operation theatre</h2>
                        <p>An operating theater (also known as an operating room (OR), </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={doctor2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2 className="text-white">test theater</h2>
                        <p>We are leading tester in operation theatre swab testing</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={doctor3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2 className="text-white">Doctor</h2>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="home-data-area">
                <div className="text-center mb-5">
                    <h2>OUR SERVICES</h2>
                    <p>Our doctors are specialized in their field and have more than 10 years of experiences.</p>
                </div>
                <div className="home-data">
                    {
                        healthInfo.map(health => <HomeService
                            key={health.ID}
                            health={health}
                        ></HomeService>)
                    }
                </div>
            </div>
            <div className="more">
                <NavLink to="/services"><button className=" more-bt btn  text-center">More <i className="fas fa-arrow-right"></i></button></NavLink>
            </div>

            <div className="medical-area m-5">
                <Row>
                    <Col md={6}>
                        <p className="m">OUR MEDICAL</p>
                        <h2 className="medical-heade">We're setting Standards in Research what's more, Clinical Care.</h2>
                        <img style={{ width: '60px' }} src={hart} alt="" />
                        <p>We provide the most full medical services, so every person could have the pportunity o receive qualitative medical help.</p>
                        <br />
                        <p>Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. We are among the most qualified implant providers in the AUS with over 30 years of uality training and experience.</p>
                    </Col>
                    <Col md={6}>
                        <img className="img-fluid" style={{ width: '100%' }} src={medical} alt="" />
                    </Col>
                </Row>
            </div>

            <div className="ambulance-serrvice-area my-5">

            </div>
            <div className="operation-theater">
                <h1 className="text-center my-5">Operation Theater</h1>
                <Row>
                    <Col md={3}>
                        <img className="img-fluid" src={oparetion1} alt="" />
                        <h5>Brooklyn single speciality medical practices and ambulatory surgry center</h5>
                    </Col>
                    <Col md={3}>
                        <img className="img-fluid" src={oparetion2} alt="" />
                        <h5>Brooklyn single speciality medical practices and ambulatory surgry center</h5>
                    </Col>
                    <Col md={3}>
                        <img className="img-fluid" src={oparetion3} alt="" />
                        <h5>Brooklyn single speciality medical practices and ambulatory surgry center</h5>
                    </Col>
                    <Col md={3}>
                        <img className="img-fluid" src={oparetion4} alt="" />
                        <h5>Brooklyn single speciality medical practices and ambulatory surgry center</h5>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Home;