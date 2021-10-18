import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
const ServiceDetail = () => {
    const { serviceId } = useParams()
    const [service, setService] = useState()
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    console.log(service);
    const item = service?.find(it => it.no === serviceId)
    console.log(item);
    return (
        <>
            <Row>
                <Col md={4}> </Col>
                <Col md={4}>
                    <div className="card mb-3">
                        <img src={item?.photo} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item?.name}</h5>
                            <p className="card-text">{item?.dec}</p>
                            <p className="card-text"><small className="text-muted"></small></p>
                        </div>
                    </div>
                </Col>
                <Col ms={4}></Col>
            </Row>

        </ >
    );
};

export default ServiceDetail;