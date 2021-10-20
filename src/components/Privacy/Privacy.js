import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Privacy.css'
const Privacy = () => {
    return (
        <>
            <div className="privacy">
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <h1 className="privacy">Privacy</h1>

                    </Col>
                    <Col md={2}></Col>
                </Row>
            </div>
            <div className="container">
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <br />
                        <p>At McLean Hospital, we are committed to protecting privacy. See below for more information on patient privacy, website privacy, news media policies, and social media policies for the general public and McLean employees.</p>
                        <br /><br />
                        <hr />
                        <h1>Patient Privacy</h1>
                        <br />
                        <p>McLean Hospital is committed to treating people with dignity, respect, and mutuality; protecting their rights; providing the best care possible; and assisting them in their recovery.</p>
                        <br />
                        <h1>Privacy and Confidentiality</h1>
                        <br />
                        <p>McLean Hospital policies and state and federal law protect the privacy of patient identities and information. In general, any disclosure of clinical information requires a written consent from you, or, if you are under the age of 18, a parent or guardian. Disclosures, however, can occur without written consent in certain specific circumstances, such as by judicial order or in a medical emergency. McLean staff are “mandated reporters” for child and elder abuse and have a duty to warn if it is felt that you are a danger to yourself or to someone else.</p>
                        <br /><br />

                    </Col>
                    <Col md={2}></Col>
                </Row>
            </div>
        </>
    );
};

export default Privacy;