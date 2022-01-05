import React from 'react'
import FilterBtn from '../FilterBtn'


const Status = ({ setStatus, setPageNumber }) => {
    let status = ['Alive', 'Dead', 'Unknown'];
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Status
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body bg-dark">
                    {status.map((items, index) => (
                        <FilterBtn key={index} name="status" items={items} index={index} className="filter__btn" task={setStatus} setPageNumber={setPageNumber} />
                    ))}

                </div>
            </div>
        </div>

    )
}

export default Status
