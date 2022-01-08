import React from 'react'
import { Helmet } from 'react-helmet'
import { useState, useEffect } from 'react'

import Search from '../components/Search/Search'
import Card from "../components/Cards/Card"

import Filters from "../components/Filters/Filters";
import Pagination from '../components/Pagination/Pagination'

const TITLE = 'Home';

const Home = () => {

    let [pageNumber, setPageNumber] = useState(1);
    let [search, setSearch] = useState("");
    let [status, setStatus] = useState("");
    let [gender, setGender] = useState("");
    let [species, setSpecies] = useState("");

    let [fetchedData, updateFetchedData] = useState([]);
    let [loading, setLoading] = useState(false);

    let { info, results } = fetchedData;

    let api = `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

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
