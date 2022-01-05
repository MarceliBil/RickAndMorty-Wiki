import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className='mt-4 not_found'>

            <Helmet>
                <title>Rickipedia | Not found</title>
            </Helmet>

            <h1 className='fw-bold'>Page Not Found</h1>

            <h2 className='text-secondary'>We couldn't find what you were looking for.</h2>

            <Link to={"/"} className='btn btn-outline-info homepage__link mt-4'>Back to the home page</Link>

        </div>
    )
}

export default NotFound
