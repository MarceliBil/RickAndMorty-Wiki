import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom"

import NotFound from '../../pages/NotFound';

const CardDetails = () => {

    let { id } = useParams();
    let [fetchedData, updateFetchedData] = useState([]);
    let { name, status, species, gender, origin, location, image } = fetchedData;

    let api = `https://rickandmortyapi.com/api/character/${id}`;

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then(res => res.json());
            updateFetchedData(data);
        })()

    }, [api]);


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


    let display;

    if (name) {
        return (
            <>

                <Helmet>
                    <title>Rickipedia | {name ? name : ""}</title>
                </Helmet>
                <div className='my-4 character__card__expanded__wrapper'>
                    <div className="col-3 p-3 m-0 character__card character__card__expanded bg-dark">
                        <div className="character__card__image position-relative">
                            <img src={image} alt="thumbnail" className='img-fluid' />
                            <p className={`position-absolute px-3 py-1 text-light ${status__color} status`}>{status}</p>
                        </div>
                        <div className="character__card__details">
                            <h4 className='fs-4 fw-bold py-3 name m-0 text-light details__item px-4 py-1 mt-2'>{name}</h4>

                            <div className='details__item px-4 py-1'>
                                <p className='last__location mt-3 text-info'>Species:</p>
                                <p className='mt-1 text-light'>{species}</p>
                            </div>
                            <div className='details__item px-4 py-1'>
                                <p className='last__location mt-3 text-info'>Gender:</p>
                                <p className='mt-1 text-light'>{gender}</p>
                            </div>

                            <div className='details__item px-4 py-1'>
                                <p className='last__location mt-3 text-info'>Origin:</p>
                                <p className='mt-1 text-light'>{origin?.name}</p>
                            </div>
                            <div className='details__item px-4 py-1'>
                                <p className='last__location mt-3 text-info'>Last location:</p>
                                <p className='mt-1 text-light'>{location?.name}</p>
                            </div>

                        </div>
                    </div>

                    <Link to={"/"} className='btn btn-outline-info homepage__link mt-4'>Back to the home page</Link>
                </div>
            </>
        )
    }
    else {
        display = <NotFound />
    }

    return (
        <>
            {display}

        </>
    )
}

export default CardDetails