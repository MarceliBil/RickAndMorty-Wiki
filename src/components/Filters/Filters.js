import React from 'react'

import Gender from "../Filters/Category/Gender"
import Species from "../Filters/Category/Species"
import Status from "../Filters/Category/Status"


const Filters = ({ setStatus, setGender, setSpecies, setPageNumber }) => {

    let clearFilters = () => {
        window.location.reload(false)
    }

    return (

        <div className='col-lg-3  mb-5 bg-dark filters'>
            <h3 className='text-center m-0'>Filters</h3>

            <div className="accordion" id="accordionExample">
                <Status setStatus={setStatus} setPageNumber={setPageNumber} />
                <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
                <Gender setGender={setGender} setPageNumber={setPageNumber} />
            </div>
            <button type="button" className="btn btn-outline-light mt-3 clear__filters" onClick={clearFilters}>Clear Filters</button>
        </div>
    )
}

export default Filters
