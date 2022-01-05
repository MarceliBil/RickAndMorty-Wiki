import React from 'react'
import FilterBtn from '../FilterBtn'

const Gender = ({ setGender, setPageNumber }) => {

    let gender = ['Female', 'Male', 'Genderless', 'unknown'];

    return (

        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Gender
                </button>
            </h2>

            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body bg-dark">
                    {gender.map((items, index) => (
                        <FilterBtn key={index} name="gender" items={items} index={index} task={setGender} setPageNumber={setPageNumber} />
                    ))}

                </div>
            </div>
        </div>

    )
}

export default Gender
