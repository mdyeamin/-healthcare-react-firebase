import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css'
import doctor1 from '../../img/doctor1.jpg'
import doctor2 from '../../img/doctor2.jpg'
import doctor3 from '../../img/doctor3.jpg'
import HomeService from '../HomeService/HomeService';
import { NavLink } from 'react-router-dom';
const Home = () => {
    const [healthInfo, setHealthInfo] = useState([])
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setHealthInfo(data.slice(0, 4)))
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
                <h2>OUR SERVICES</h2>
                <p>Our doctors are specialized in their field and have more than 10 years of experiences.</p>
                <div className="home-data">
                    {
                        healthInfo.map(health => <HomeService
                            key={health.ID}
                            health={health}
                        ></HomeService>)
                    }
                </div>
                <NavLink to="/service"><button className="more-btn btn">More <i className="fas fa-arrow-right"></i></button></NavLink>
            </div>
        </>
    );
};

export default Home;