import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './About.css'
import about1 from '../../img/about1.jpg'
import about2 from '../../img/about2.jpg'
import about3 from '../../img/about3.jpg'
const About = () => {
    return (
        <div className="my-5">
            <h1 className="mb-3">Latest Blog Posts</h1>

            <Row>
                <Col className="about-cart">
                    <img src={about1} alt="" />
                    <h4>Reasons to Visit a Breast Specialist</h4>
                    <span>June 21, 2021 at 8:12pm News</span>

                    <p>There are a lot of women that are unaware of the numerous risks associated with their health and eventually ignore the importance of visiting...</p>
                </Col>
                <Col className="about-cart">
                    <img src={about2} alt="" />
                    <h4>Picking the Right Diagnostic Services for Efficient Results</h4>
                    <span>June 21, 2021 at 8:12pm News</span>

                    <p>There have been a lot of cases in which people were not provided with accurate reports that eventually affected their medical treatment. There is always...</p>
                </Col>
                <Col className="about-cart">
                    <img src={about3} alt="" />
                    <h4>Preparing for an ECG in 8 Easy Steps: Tips From Our Diagnosticians</h4>
                    <span>June 21, 2021 at 8:12pm News</span>

                    <p>An ECG stands for an "electrocardiogram," which is a test that measures and records the electrical activity of the heart. It is used by doctors to obtain...</p>
                </Col>
            </Row>
        </div >
    );
};

export default About;