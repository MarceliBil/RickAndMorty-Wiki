import React from 'react'

const Search = ({ setSearch, setPageNumber }) => {

    let findCharacter = (e) => {
        setPageNumber(1);
        setSearch(e.target.value);
    }

    return (
        <form className='d-flex justify-content-center my-5 px-2 search' action=''>
            <input className="form-control mr-3 bg-dark text-light" type="text" placeholder="Type character name..." onChange={findCharacter} />
        </form>
    )
}

export default Search
