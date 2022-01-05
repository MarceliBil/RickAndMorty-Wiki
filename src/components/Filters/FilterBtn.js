import React from 'react'

const FilterBtn = ({ items, index, name, task, setPageNumber }) => {

    let filterItems = () => {
        setPageNumber(1);
        task(items)
    }

    return (
        <div className='filter__item bg-dark'>
            <div className="form-check">
                <input
                    onClick={filterItems}
                    className="form-check-input filter__item__input"
                    type="radio"
                    name={name}
                    id={`${name}-${index}`} />

                <label
                    className="btn btn-outline-info"
                    htmlFor={`${name}-${index}`}>
                    {items}
                </label>
            </div>
        </div >
    )
}

export default FilterBtn
