import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeService = (props) => {
    const { no, name, photo, dec } = props.health;
    return (
        <>

            <div className="card" style={{ width: "18rem" }}>
                <img src={photo} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3>{name}</h3>

                    <p className="card-text">{dec}</p>
                    <NavLink to={`/service/${no}`}> <button>Detail</button></NavLink>
                </div>
            </div>

        </>
    );
};

export default HomeService;