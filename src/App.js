import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import CardDetails from "./components/Cards/CardDetails"
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './index.scss';



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

        <Footer />
      </div>
    </Router>

  )
}


export default App;
