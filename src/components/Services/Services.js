import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';
import baby from '../../img/baby.gif'
const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
            <div className="baby-area">
                <h2 >Baby Health Tips</h2>
                <Row>
                    <Col md={6} className="baby-img">
                        <div>
                            <img className="container-fluid" src={baby} alt="" />
                        </div>
                        <div>
                            <h4 className="px-4 baby-txt">Every parent wishes for their child to grow up happy and healthy. Find out how the right food, stimulation and care in the first 1,000 days provide a foundation for life.</h4>
                        </div>
                    </Col>
                    <Col md={6}>
                        <h1>Baby Health</h1>
                        <ul>
                            <h5><li>Poos and wees</li></h5>
                            Plenty of clear, colourless wee shows that your baby is healthy and getting enough fluids.
                            The frequency, colour, consistency and smell of baby poo varies a lot among babies.
                            Baby poo is affected by baby diet.
                            Poo problems include constipation and diarrhoea. It’s best to see your GP about poo problems.
                        </ul>

                        <ul>
                            <h5><li>Poos and wees</li></h5>
                            Diarrhoea is large, runny, frequent or watery poo. It’s common in children.
                            Diarrhoea might lead to dehydration, which can be a serious problem.
                            If your child has diarrhoea and could be dehydrated, seek medical attention.
                            If your child has diarrhoea, make sure that they have enough fluids to drink.
                        </ul>
                        <ul>
                            <h5><li>Nappy rahs</li></h5>
                            Nappy rash makes children’s bottoms sore and inflamed.
                            To treat nappy rash, change nappies often, keep your child’s bottom clean and dry, apply barrier cream and use disposable nappies.
                            Take your child to the GP if the rash isn’t improving or it’s making your child upset or unwell.
                        </ul>
                    </Col>
                </Row>
            </div>
            <div className="service-data-area">

                <div className="service-data">
                    {
                        services.map(service => <Service
                            key={service.ID}
                            service={service}

                        ></Service>)
                    }
                </div>
            </div>
        </>
    );
};

export default Services;