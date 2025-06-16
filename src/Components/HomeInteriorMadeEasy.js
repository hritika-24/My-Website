import React from 'react'
import "./HomeInteriorMadeEasy.css"
import { Link } from 'react-router-dom'

import book from "./assets/book-appointment-with-best-interior-designers-340x340.jpg"
import meet from "./assets/meet-best-interior-designers-near-me-340x340.jpg"
import personalize from "./assets/personalised-interior-designs-by-top-interior-designers-340x340.jpg"
import getHome from "./assets/getHomeInterior.jpeg"

// images
//residential
import residential from "./assets/bedroom (1).jpg"

//commercial
import commercial from "./assets/conference hall (2).jpg"

const HomeInteriorMadeEasy = () => {
  return (
    <div className='HomeInteriorMadeEasy container'>
        <div className='interior-made-easy'>
            <h2>Home Interiors Made Easy</h2>
            <p>Book a <b>FREE consultation</b>, get expert guidance from top designers, and relax as we handle everything <b>from design to installation</b>. With <b>4,000+ homes transformed</b>, your dream home is just a step away. <b>Let’s design your dream home today!</b></p>
            <div className='img-div'>
                <div className='img-div-1'>
                    <img src={book} />
                    <div className='steps'>
                        <span className='num'>01</span>
                        <span className='txt'>Book an appointment</span>
                    </div>
                </div>
                <div className='img-div-2'>
                    <img src={meet} />
                    <div className='steps'>
                        <span className='num'>02</span>
                        <span className='txt'>Meet our designers</span>
                    </div>
                </div>
                <div className='img-div-3'>
                    <img src={personalize} />
                    <div className='steps'>
                        <span className='num'>03</span>
                        <span className='txt'>Personalise your designs</span>
                    </div>
                </div>
                <div className='img-div-4'>
                    <img src={getHome} />
                    <div className='steps'>
                        <span className='num'>04</span>
                        <span className='txt'>Move in</span>
                    </div>
                </div>
            </div>
            <div className='interior-made-easy-form-button-div'>
                <Link to="/form" className='btn '>Get Started Now</Link>
            </div>
        </div>
        <div className='projects-delievered'>
            <h2>4000+ Dream Home Delievered</h2>
            <div className='img-div'>
                <div className='img-div-specific img-div-1 '>
                    <img src={residential} />
                    <p>Residential</p>
                </div>
                <div className='img-div-specific img-div-2'>
                    <p>Commercial</p>
                    <img src={commercial} />
                </div>
            </div>
            <div className='projects-delievered-form-button-div'>
                <Link to="/form" className='btn '>Start Your Project</Link>
            </div>
            
        </div>
    </div>
  )
}

export default HomeInteriorMadeEasy