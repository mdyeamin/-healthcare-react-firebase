import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
            <div className="service-data-area">
                <div className="service-data">
                    {
                        services.map(service => <Service
                            key={Service.ID}
                            service={service}

                        ></Service>)
                    }
                </div>
            </div>
        </>
    );
};

export default Services;