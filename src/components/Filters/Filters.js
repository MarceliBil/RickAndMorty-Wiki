import React from 'react'

import { useState } from 'react'

import Gender from "../Filters/Category/Gender"
import Species from "../Filters/Category/Species"
import Status from "../Filters/Category/Status"

const Filters = ({ setStatus, setGender, setSpecies, setPageNumber }) => {

    //SHOW / HIDE FILTERS
    let [showFilters, setShowFilters] = useState(false)
    let [btnText, setBtnText] = useState(false)

    const showHide = () => {
        setShowFilters(!showFilters)
        setBtnText(!btnText)
    }

    let clearFilters = () => {
        window.location.reload(false)
    }

    return (
        <div className="col-xxl-3 mb-5 ">

            <button className={`btn btn-info mx-2 show__filter__btn`} onClick={showHide}>{btnText ? "Hide filters" : "Show filters"}</button>

            <div className={`bg-dark filters ${showFilters ? "show" : "hide"}`}>
                <h3 className='text-center m-0'>Filters</h3>

                <div className="accordion" id="accordionExample">
                    <Status setStatus={setStatus} setPageNumber={setPageNumber} />
                    <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
                    <Gender setGender={setGender} setPageNumber={setPageNumber} />
                </div>
                <button type="button" className="btn btn-outline-light mt-3 clear__filters" onClick={clearFilters}>Clear Filters</button>
            </div>
        </div>
    )
}

export default Filters
