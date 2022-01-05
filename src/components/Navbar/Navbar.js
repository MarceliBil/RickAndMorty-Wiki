import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header className='navbar d-flex justify-content-center align-items-center bg-dark'>
            <Link to="/" >
                <h1 className='text-center text-light bg-dark m-0 p-0'>The Rick and Morty  <span className='text-info'>Wiki</span> </h1>
            </Link>

        </header>
    )
}

export default Navbar
