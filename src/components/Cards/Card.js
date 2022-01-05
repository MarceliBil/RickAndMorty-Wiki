import React from 'react'
import { Link } from "react-router-dom"

const Card = ({ results }) => {

    let display;

    if (results) {

        display = results.map(x => {
            let { id, status, name, image, location } = x;

            let status__color;

            switch (status) {
                case 'Alive':
                    status__color = 'bg-success';
                    break;

                case 'Dead':
                    status__color = 'bg-danger';
                    break;
                case 'unknown':
                    status__color = 'bg-dark';
                    break;
                default:
                    break;
            }

            return (
                <Link to={`${id}`}
                    key={id} className=" p-3 bg-dark character__card " style={{ maxWidth: "230px" }}>

                    <div className="character__card__image position-relative">
                        <img src={image} alt="thumbnail" className='img-fluid' />
                        <p className={`position-absolute px-3 py-1 text-light ${status__color} status`}>{status}</p>
                    </div>

                    <div className="character__card__details">
                        <h4 className='fs-4 fw-bold py-3 name m-0 text-light'>{name}</h4>
                        <p className='last__location mt-3 text-info'>Last location:</p>
                        <p className='mt-1 text-light'>{location.name}</p>
                    </div>

                </Link>
            )
        })
    }
    else {
        display = "Character not found...";
    }
    return (
        <>
            {display}
        </>

    )
}

export default Card
