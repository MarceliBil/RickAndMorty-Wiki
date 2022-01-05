import React from 'react'
import FilterBtn from '../FilterBtn'

const Species = ({ setSpecies, setPageNumber }) => {
    let species = [
        "Human",
        "Alien",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
        "Planet",
    ];
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Species
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body bg-dark">
                    {species.map((items, index) => (
                        <FilterBtn key={index} name="species" items={items} index={index} task={setSpecies} setPageNumber={setPageNumber} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Species
