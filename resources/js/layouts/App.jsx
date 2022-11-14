import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Navbar from './Navbar.jsx'

function App(){
    return(
        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route exact path="/" element={ <Home /> } />
                <Route  path="/about" element={ <About /> } />
                <Route  path="/contact-us" element={ <Contact /> } />

            </Routes>
        </BrowserRouter>

    );
}

if(document.getElementById('app')){
    createRoot(document.getElementById('app')).render(<App />)
}
