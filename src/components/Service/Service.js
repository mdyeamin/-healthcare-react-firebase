import React from 'react';

const Service = (props) => {
    // console.log(props);
    const { name, photo, dec } = props.service
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src={photo} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3>{name}</h3>

                    <p className="card-text">{dec}</p>
                    <button>Detail</button>
                </div>
            </div>
        </>
    );
};

export default Service;