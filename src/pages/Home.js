import React from 'react'
import { Helmet } from 'react-helmet'
import { useState, useEffect } from 'react'

import Search from '../components/Search/Search'
import Card from "../components/Cards/Card"

import Filters from "../components/Filters/Filters";
import Pagination from '../components/Pagination/Pagination'

const TITLE = 'Home';

const Home = () => {

    const [pageNumber, setPageNumber] = useState(1);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");
    const [gender, setGender] = useState("");
    const [species, setSpecies] = useState("");

    const [fetchedData, updateFetchedData] = useState([]);
    const [loading, setLoading] = useState(false);

    const { info, results } = fetchedData;

    const api = `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

    useEffect(() => {
        (async () => {
            setLoading(true)
            let data = await fetch(api)
                .then(res => res.json())
            updateFetchedData(data)
            setLoading(false)
        })()
    }, [api]);

    return (
        <div className='Home'>
            <Helmet>
                <title>Rickipedia | {TITLE}</title>
            </Helmet>
            <Search setSearch={setSearch} setPageNumber={setPageNumber} />

            <div className="container">
                <div className="row justify-content-center">
                    <Filters setStatus={setStatus} setGender={setGender} setSpecies={setSpecies} setPageNumber={setPageNumber} />

                    <div className="row gx-3 col-xxl-9 cards__wrapper">
                        {
                            loading ? <h2>Loading...</h2> : <Card results={results} />
                        }

                    </div>
                </div>
            </div>

            <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
        </div>
    )
}

export default Home
