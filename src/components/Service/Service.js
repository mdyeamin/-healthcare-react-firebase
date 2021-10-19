import React from 'react';
import { NavLink } from 'react-router-dom';
import './Service.css'
const Service = (props) => {

    const { no, name, photo, dec } = props.service
    return (
        <>
            <div className="card mb-5" style={{ width: "18rem" }}>
                <img src={photo} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3>{name}</h3>

                    <p className="card-text">{dec}</p>

                </div>
                <div className="text-center">
                    <NavLink to={`/service/${no}`}> <button className="detail-btn">Detail <i className=" i fas fa-angle-double-right"></i></button></NavLink>
                </div>
            </div>
        </>
    );
};

export default Service;