import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Helmet } from 'react-helmet';

import Navbar from "./components/Navbar/Navbar";
import Search from './components/Search/Search';
import Card from "./components/Cards/Card";
import CardDetails from "./components/Cards/CardDetails"
import Filters from "./components/Filters/Filters";
import Pagination from './components/Pagination/Pagination';
import Footer from './components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './index.scss';

const TITLE = 'Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="wrapper flex__center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":id" element={<CardDetails />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  )
}

const Home = () => {

  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");

  let [fetchedData, updateFetchedData] = useState([]);

  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api)
        .then(res => res.json())
      updateFetchedData(data)

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
            <Card results={results} />
          </div>
        </div>
      </div>




      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  )
}
export default App;
