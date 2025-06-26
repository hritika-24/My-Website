import React, { useState } from 'react'
import './CommonDesignGallery.css';
import { Link } from 'react-router-dom';

import wardrobestudychair1 from '../../assets/designgallery/Wardrobe/wardrobe-with-studychair/wardrobewithchar (1).jpg'
import wardrobestudychair2 from '../../assets/designgallery/Wardrobe/wardrobe-with-studychair/wardrobewithchar (2).jpg'
import wardrobestudychair3 from '../../assets/designgallery/Wardrobe/wardrobe-with-studychair/wardrobewithchar (3).jpg'
import wardrobestudychair4 from '../../assets/designgallery/Wardrobe/wardrobe-with-studychair/wardrobewithchar (4).jpg'
import wardrobestudychair5 from '../../assets/designgallery/Wardrobe/wardrobe-with-studychair/wardrobewithchar (5).jpg'
import wardrobestudychair6 from '../../assets/designgallery/Wardrobe/wardrobe-with-studychair/wardrobewithchar (6).jpg'



import wardrobedresserunit1 from '../../assets/designgallery/Wardrobe/wardrobe-with-attached dresser unit/wardrobe-with-dewsser-unit (1).jpg'
import wardrobedresserunit2 from '../../assets/designgallery/Wardrobe/wardrobe-with-attached dresser unit/wardrobe-with-dewsser-unit (2).jpg'
import wardrobedresserunit3 from '../../assets/designgallery/Wardrobe/wardrobe-with-attached dresser unit/wardrobe-with-dewsser-unit (3).jpg'
import wardrobedresserunit4 from '../../assets/designgallery/Wardrobe/wardrobe-with-attached dresser unit/wardrobe-with-dewsser-unit (4).jpg'
import wardrobedresserunit5 from '../../assets/designgallery/Wardrobe/wardrobe-with-attached dresser unit/wardrobe-with-dewsser-unit (5).jpg'
import wardrobedresserunit6 from '../../assets/designgallery/Wardrobe/wardrobe-with-attached dresser unit/wardrobe-with-dewsser-unit (1).avif'



import wardrobeglassshutter1 from '../../assets/designgallery/Wardrobe/wardrobe -with-glass-shutter/wardrobe-glassshutter (2).jpg'
import wardrobeglassshutter2 from '../../assets/designgallery/Wardrobe/wardrobe -with-glass-shutter/wardrobe-glassshutter (1).webp'
import wardrobeglassshutter3 from '../../assets/designgallery/Wardrobe/wardrobe -with-glass-shutter/wardrobe-glassshutter (6).jpg'
import wardrobeglassshutter4 from '../../assets/designgallery/Wardrobe/wardrobe -with-glass-shutter/wardrobe-glassshutter (4).jpg'
import wardrobeglassshutter5 from '../../assets/designgallery/Wardrobe/wardrobe -with-glass-shutter/wardrobe-glassshutter (5).jpg'
import wardrobeglassshutter6 from '../../assets/designgallery/Wardrobe/wardrobe -with-glass-shutter/wardrobe-glassshutter (7).jpg'
import { BiSolidOffer } from 'react-icons/bi';
import { MdOutlineReplay10, MdOutlineThumbUpAlt } from 'react-icons/md';


import kidswardrobe1 from '../../assets/designgallery/Wardrobe/kids-wardrobe/kids-wardrobe (11).jpg'
import kidswardrobe2 from '../../assets/designgallery/Wardrobe/kids-wardrobe/kids-wardrobe (8).jpg'
import kidswardrobe3 from '../../assets/designgallery/Wardrobe/kids-wardrobe/kids-wardrobe (4).jpg'
import kidswardrobe4 from '../../assets/designgallery/Wardrobe/kids-wardrobe/kids-wardrobe (5).jpg'
import kidswardrobe5 from '../../assets/designgallery/Wardrobe/kids-wardrobe/kids-wardrobe (6).jpg'
import kidswardrobe6 from '../../assets/designgallery/Wardrobe/kids-wardrobe/kids-wardrobe (10).jpg'


import walkinwardrobe1 from '../../assets/designgallery/Wardrobe/Walkin_Wardrobe/walkin_Wardrobe (1).jpg'
import walkinwardrobe2 from '../../assets/designgallery/Wardrobe/Walkin_Wardrobe/walkin_Wardrobe (2).jpg'
import walkinwardrobe3 from '../../assets/designgallery/Wardrobe/Walkin_Wardrobe/walkin_Wardrobe (3).jpg'
import walkinwardrobe4 from '../../assets/designgallery/Wardrobe/Walkin_Wardrobe/walkin_Wardrobe (4).jpg'
import walkinwardrobe5 from '../../assets/designgallery/Wardrobe/Walkin_Wardrobe/walkin_Wardrobe (5).jpg'
import walkinwardrobe6 from '../../assets/designgallery/Wardrobe/Walkin_Wardrobe/walkin_Wardrobe (10).jpg'

const Wardrobe = () => {
    
// *****************************************
const [isExpanded1, setIsExpanded1] = useState(true);

const toggleContent1 = () => {
setIsExpanded1(prev => !prev);
};
// *****************************************
// *****************************************
const [isExpanded2, setIsExpanded2] = useState(false);

const toggleContent2 = () => {
setIsExpanded2(prev => !prev);
};
// *****************************************
// *****************************************
const [isExpanded3, setIsExpanded3] = useState(false);

const toggleContent3 = () => {
setIsExpanded3(prev => !prev);
};
// *****************************************
// *****************************************
const [isExpanded4, setIsExpanded4] = useState(false);

const toggleContent4 = () => {
setIsExpanded4(prev => !prev);
};
// *****************************************
// *****************************************
const [isExpanded5, setIsExpanded5] = useState(false);

const toggleContent5 = () => {
setIsExpanded5(prev => !prev);
};
// *****************************************
  return (
    <div className='wardrobe  design-gallery '>
        <div className='wardrobe container'>
            <h3>Wardrobe Designs</h3>
            <p className='para'>
                Explore wardrobe designs for every bedroom - from sliding doors to smart storage
                solutions.Discover stylish, space-saving and functionality wardrobes tailored
                to your needs
            </p>
        </div>
    {/* ***************************************************** */}
    <div className='shapes container'>
        {/* slider-1 */}
        <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
            </div>
            <div class="carousel-inner">
            <div class="carousel-item active">
                <img src={wardrobestudychair1} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src={wardrobestudychair2} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src={wardrobestudychair3} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src={wardrobestudychair4} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src={wardrobestudychair5} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src={wardrobestudychair6} class="d-block w-100" alt="..."/>
            </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div className='images-details mt-3'>
                    <p className='img-details-and-btn'>A wardrobe With AttachedStudy-Cum-Dressing Unit <Link className='btn form-btn' to= "/form">Get a Quote</Link></p>
        
                    {/* Show More button */}
                    {!isExpanded1 && (
                        <button
                        className=" show-more btn mt-2"
                        onClick={toggleContent1}
                        aria-expanded={isExpanded1}
                        >
                        Show More ▼
                        </button>
                    )}
        
                    {/* Expanded content */}
                    {isExpanded1 && (
                        <div className="extra-info mt-3 ">
                        <p className='extra-info-para'>
                           This floor-to-ceiling wardrobe is finished with a combination of walnut wood and white laminate.
                           The wardrobe has a plethora of modular storage compartments.
                        </p>
                        <p className='extra-info-features'>Special Features</p>
                        <ul className='extra-info-list'>
                            <li>This modern wardrobe is finished with walnut wood and white laminate.</li>
                            <li>The wardrobe has separate types of compartments to maintain a clutter-free look.</li>
                            <li>The four-door wardrobe has a combination of glass-front and handless drawers for a modern appeal.</li>
                            <li>The wardrobe has an attached study unit with a concealed lift-up mirror and accessory organiser that adds to the multifunctionality of the space.</li>
                            <li>The wardrobe loft adds storage space to the  bedroom  and is ideal for small homes.</li>
                            <li></li>
                        </ul>
        
                        {/* Show Less button */}
                        <button
                            className=" show-less btn  mt-3"
                            onClick={toggleContent1}
                            aria-expanded={isExpanded1}
                        >
                            Show Less ▲
                        </button>
                        </div>
                    )}
        </div>
        {/* slider-1 end */}
        <div style={{margin:'80px'}} ></div>
        {/* slider-2 */}
        <div id="carouselExampleIndicators1" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="5" aria-label="Slide 6"></button>
            </div>
            <div class="carousel-inner">
            <div class="carousel-item active">
                <img src={wardrobedresserunit1} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src={ wardrobedresserunit2} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src={ wardrobedresserunit3} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src={ wardrobedresserunit4} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src={ wardrobedresserunit5} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src={ wardrobedresserunit6} class="d-block w-100" alt="..."/>
            </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div className='images-details mt-3'>
                    <p className='img-details-and-btn'> A Floor To Ceiling Wardrobe With Glass Shutters<Link className='btn form-btn' to= "/form">Get a Quote</Link></p>
        
                    {/* Show More button */}
                    {!isExpanded2 && (
                        <button
                        className=" show-more btn mt-2"
                        onClick={toggleContent2}
                        aria-expanded={isExpanded2}
                        >
                        Show More ▼
                        </button>
                    )}
        
                    {/* Expanded content */}
                    {isExpanded2 && (
                        <div className="extra-info mt-3 ">
                        <p className='extra-info-para'>
                          This wardrobe with glass fronts makes it easy when it comes to finding things. It is
                          designed with multiple compartments and drawers for neat segregation of items.
                        </p>
                        <p className='extra-info-features'>Special Features</p>
                        <ul className='extra-info-list'>
                           <li>A wardrobe with glass doors for a to make access easy</li>
                           <li>Wooden shelves are built-in for secure storage of bags, shoes and other goods.</li>
                           <li>Hanging rods fro to natly hang your coats and jackets</li>
                           <li>An accessory tray to organise your jwellery, watches, and other smaller items.</li>
                        </ul>
        
                        {/* Show Less button */}
                        <button
                            className=" show-less btn  mt-3"
                            onClick={toggleContent2}
                            aria-expanded={isExpanded2}
                        >
                            Show Less ▲
                        </button>
                        </div>
                    )}
        </div>
        {/* slider-2 end */}
        <div style={{margin:'80px'}} ></div>
        {/* slider-3 */}
        <div id="carouselExampleIndicators3" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="5" aria-label="Slide 6"></button>
            </div>
            <div class="carousel-inner">
            <div class="carousel-item active">
                <img src={wardrobeglassshutter1} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src={wardrobeglassshutter2} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src={wardrobeglassshutter3} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src={wardrobeglassshutter4} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src={wardrobeglassshutter5} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src={wardrobeglassshutter6} class="d-block w-100" alt="..."/>
            </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div className='images-details mt-3'>
                    <p className='img-details-and-btn'> Sliding Door Wardrobe With An Attached Dresser Unit<Link className='btn form-btn' to= "/form">Get a Quote</Link></p>
        
                    {/* Show More button */}
                    {!isExpanded3 && (
                        <button
                        className=" show-more btn mt-2"
                        onClick={toggleContent3}
                        aria-expanded={isExpanded3}
                        >
                        Show More ▼
                        </button>
                    )}
        
                    {/* Expanded content */}
                    {isExpanded3 && (
                        <div className="extra-info mt-3 ">
                        <p className='extra-info-para'>
                          This charming floor-to-ceiling ivory wardrobe has an uber-cool appeal to it. 
                          Its sliding-door mechanism provides a clutter-free and clean design that create a long-lasting impression.
                        </p>
                        <p className='extra-info-features'>Special Features</p>
                        <ul className='extra-info-list'>
                            <li>An ivory wardrobe with a cutting-edge sliding doors mechanism.</li>
                            <li>The wardrobe comes with a variety of compartments such as handleless drawers.</li>
                            <li>The black mirrored glass strip adds a glamorous touch to the wardrobe.</li>
                            <li>The wardrobe also comes with loft storage that efficiently uses space.</li>
                            <li>An attached dresser unit has a sliding door mirror with hidden storage behind.</li>
                        </ul>
        
                        {/* Show Less button */}
                        <button
                            className=" show-less btn  mt-3 "
                            onClick={toggleContent3}
                            aria-expanded={isExpanded3}
                        >
                            Show Less ▲
                        </button>
                        </div>
                    )}
        </div>
        {/* slider-3 end */}
        <div style={{margin:'80px'}} ></div>



    </div>
    {/* ************************************** */}
    {/* why choose our wardrobe */}
                <div className='whyourkitchen'>
                  <h3>Why Choose Our Wardrobe</h3>
                  <div className='whyourkitchen-reason'>
                    <div className='icon-para-div1'>
                      <BiSolidOffer className='icon'/>
                      <p className='whyourkitchen-para'>20% Extra Space</p>
                    </div>
                    <div className='icon-para-div1'>
                      <MdOutlineReplay10  className='icon'/>
                      <p className='whyourkitchen-para'>10 Year Warranty</p>
                    </div>
                    <div className='icon-para-div1'>
                      <MdOutlineThumbUpAlt  className='icon'/>
                      <p className='whyourkitchen-para'>Installation by Professionals</p>
                    </div>
                  </div>
                </div>   
    {/* why choose our wardrobe */}
    {/* ************************************* */}
    {/* slider-4 */}
    <div className='shapes container'>
        <div id="carouselExampleIndicators4" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="5" aria-label="Slide 6"></button>
            </div>
            <div class="carousel-inner">
            <div class="carousel-item active">
                <img src={kidswardrobe1} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src={kidswardrobe2} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src={kidswardrobe3} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src={kidswardrobe4} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src={kidswardrobe5} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src={kidswardrobe6} class="d-block w-100" alt="..."/>
            </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div className='images-details mt-3'>
                    <p className='img-details-and-btn'> A Kids Wardrobe Design For A Bedroom<Link className='btn form-btn' to= "/form">Get a Quote</Link></p>
        
                    {/* Show More button */}
                    {!isExpanded2 && (
                        <button
                        className=" show-more btn mt-2"
                        onClick={toggleContent2}
                        aria-expanded={isExpanded2}
                        >
                        Show More ▼
                        </button>
                    )}
        
                    {/* Expanded content */}
                    {isExpanded2 && (
                        <div className="extra-info mt-3 ">
                        <p className='extra-info-para'>
                          A fun, full-length wardrobe design in grey and yellow with lts of storage for
                          everything that's perfect for a kids bedroom
                        </p>
                        <p className='extra-info-features'>Special Features</p>
                        <ul className='extra-info-list'>
                          <li>Simple swing shutters with profile handles for easy and safe access.</li>
                          <li>Open shelf space oon one side to display books and toys.</li>
                          <li>Multiple internal compartments to keep everything organised.</li>
                          <li>Top and bottom cabinets for extra syorage space.</li>
                          <li>A skirting drawer used dead space beneath.</li>
                        </ul>
        
                        {/* Show Less button */}
                        <button
                            className=" show-less btn  mt-3"
                            onClick={toggleContent2}
                            aria-expanded={isExpanded2}
                        >
                            Show Less ▲
                        </button>
                        </div>
                    )}
        </div>

    {/* slider-4 end*/}
    <div style={{margin:'80px'}} ></div>
    {/* slider-5 */}
         <div id="carouselExampleIndicators5" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="5" aria-label="Slide 6"></button>
            </div>
            <div class="carousel-inner">
            <div class="carousel-item active">
                <img src={walkinwardrobe1} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src={walkinwardrobe2} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src={walkinwardrobe3} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src={walkinwardrobe4} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src={walkinwardrobe5} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src={walkinwardrobe6} class="d-block w-100" alt="..."/>
            </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div className='images-details mt-3'>
                    <p className='img-details-and-btn'> A Walk-in Wardrobe Design With A Dressing Unit<Link className='btn form-btn' to= "/form">Get a Quote</Link></p>
        
                    {/* Show More button */}
                    {!isExpanded2 && (
                        <button
                        className=" show-more btn mt-2"
                        onClick={toggleContent2}
                        aria-expanded={isExpanded2}
                        >
                        Show More ▼
                        </button>
                    )}
        
                    {/* Expanded content */}
                    {isExpanded2 && (
                        <div className="extra-info mt-3 ">
                        <p className='extra-info-para'>
                         A large wooden walk-in closet with a dressing table alongside to
                         make getting ready a peaceful affair.
                        </p>
                        <p className='extra-info-features'>Special Features</p>
                        <ul className='extra-info-list'>
                          <li>A L-shaped wardrobe with glass doors and metal framesing lend a chic look.</li>
                          <li>Open shelves with rods so you can hang your clothes in neatly.</li>
                          <li>Drawers with glass fronts so you get to see what you store.</li>
                          <li>Skirting drawers that blend into the wardrobe can be used to put away less frequently used items.</li>
                        </ul>
        
                        {/* Show Less button */}
                        <button
                            className=" show-less btn  mt-3"
                            onClick={toggleContent2}
                            aria-expanded={isExpanded2}
                        >
                            Show Less ▲
                        </button>
                        </div>
                    )}
        </div>


    {/* slider-5 end*/}
    </div>
    {/* ************************************** */}
    {/* why choose our wardrobe */}
                <div className='whyourkitchen'>
                  <h3>Why Choose Our Wardrobe</h3>
                  <div className='whyourkitchen-reason'>
                    <div className='icon-para-div1'>
                      <BiSolidOffer className='icon'/>
                      <p className='whyourkitchen-para'>20% Extra Space</p>
                    </div>
                    <div className='icon-para-div1'>
                      <MdOutlineReplay10  className='icon'/>
                      <p className='whyourkitchen-para'>10 Year Warranty</p>
                    </div>
                    <div className='icon-para-div1'>
                      <MdOutlineThumbUpAlt  className='icon'/>
                      <p className='whyourkitchen-para'>Installation by Professionals</p>
                    </div>
                  </div>
                </div>   
    {/* why choose our wardrobe */}
    {/* ************************************* */}
    {/* FAQ'S for wardrobe */}
    <div className=' design gallery faq container'>
        <h2 className=' design gallery faq-heading'>Frequently asked questions on Wardrobe Design</h2>
        <div className="container accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    1. What is a modular wardrobe , and how does it differ from a traditional wardrobe ?
                </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" >
                <div className="accordion-body">
                    A <b>modular wardrobe</b> is a <b>customisable storage solution</b> made of pre-fabricated
                    units, offering flexibility in design,unlike traditional wardrobes that are on-site and fixed in place.<br></br>
                    <p><b>Key Differences</b></p>
                    <ul><br/>
                        <li><b>Installation : </b>Pre-fabricated and easyb to install vsbuilt pon-site and permanent.</li>
                        <li><b>Flexibility : </b>Custom combinations of shelves ,drawers ,and hanging spaces vs. limited options.</li>
                        <li><b>Mobility : </b>Easy to dismantle and relocate vs. fixed in place.</li>

                    </ul><br/>
                    <p><b>Benefits of Modular Kitchen</b></p>
                     <ul>
                        <li>Flexible storage configurations</li>
                        <li>Variety of finishes -laminates, glass, wood textures</li>
                        <li>Works for compact rooms and large walk-in wardrobes</li>
                        <li>Combines style and functionality</li>
                     </ul>
                </div>
                </div>
               </div> 
                <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    2. What are the different types of wardrobe designs available ?
                </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" >
                <div className="accordion-body">
                   There's no one-size-fits-all wardrobe design for bedrooms-the best option depends on your 
                   <b>space</b> and <b>preferences.</b>Here are the popular wardrobe types you can choose from : <br/><br/>
                   <p><b>1. Sliding Door Wardrobes</b></p>
                    <ul>
                        <li>Ideal for <b>compact spaces</b></li>
                        <li>Door slide sideways, so they don't take up extra room</li>
                    </ul><br/>
                   <p><b>2. Hinged Door Wardrobes</b></p>
                    <ul>
                        <li>Offers a <b>traditional look</b></li>
                        <li>Door swing open, allowing <b>full access</b>to the interiors</li>
                    </ul><br/>
                   <p><b>3. Walk-in Wardrobes</b></p>
                    <ul>
                        <li>Creates a <b>luxury dressing area</b></li>
                        <li>provides <b>ample storage space</b></li>
                    </ul><br/>
                   <p><b>4. Corner Wardrobes</b></p>
                    <ul>
                        <li>Makes use of <b>awkward corners</b>efficiently</li>
                        <li>Great for <b>small or irregular rooms</b></li>
                    </ul><br/>
                   <p><b>5. Floor-to-ceiling Wadrobes</b></p>
                    <ul>
                        <li>Pefect for a <b>sleek, built-in look</b></li>
                        <li>Blends seamlessly with your bedroom interiors</li>
                    </ul><br/>
                   <p><b>6. Open Wardrobes</b></p>
                    <ul>
                        <li>Gives a <b>modern, airy feel</b></li>
                        <li>Makes it easy to <b>access everyday essentials</b></li>
                    </ul><br/>
                    <p>Whether you need a <b>practical storage solution</b> or a <b>stylish statement piece,</b> there's a wardbe design to match every home.</p>

                </div>
                </div>
               </div> 
                <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    3. How can i chhoose the best wardrobe design for my bedroom ?
                </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" >
                <div className="accordion-body">
                   The best wardrobe design for a bedroom should look great and meet your storage needs.
                    Here’s a simple way to decide:<br/><br/>

                   <p><b>✅ Consider your room size:</b></p>
                    <ul>
                        <li>For small rooms, <b>sliding door wardrobes</b> save space.</li>
                        <li>For larger rooms, <b>hinged door wardrobes</b> offer <b>full visibility</b> of your belomgings.</li>
                    </ul><br/>

                   <p><b>✅ Think about storage features:</b></p>
                    <ul>
                        <li> <b>Hanging rods</b> for clothes.</li>
                        <li><b>Drawers</b> for accessories.</li>
                        <li><b>Shelves</b> for folded items.</li>
                    </ul><br/>

                   <p><b>✅ Add smart design elements</b></p>
                    <ul>
                        <li> <b>Built-in lighting</b> for a touch of luxury.</li>
                        <li> <b>Mirrored panels</b> to make small rooms feel bigger.</li>
                        <li> <b>Modular wardrobe designs</b> to a personalised layout that fits your lifestyle.</li>
                    </ul><br/>

                   <p><b>✅ Match the finish to your interiors:</b></p>
                    <ul>
                        <li>Choose a <b>finish,colour or material</b> that complements your bedroom decor</li>
                    </ul><br/>
                    
                    <p>With these tips, you’ll have a wardrobe that’s both stylish and practical for your bedroom.</p>
                </div>
                </div>
               </div> 
                <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    4.Which wardrobe design is best for small bedrooms?
                </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" >
                <div className="accordion-body">
                  If space is limited, choosing the right wardrobe design can make a big difference.
                   Here are some of the best wardrobe designs for small bedrooms:<br/><br/>

                   <ul>
                    <li><b>Sliding Door Wardrobes : </b>These are space-saving because they don’t need extra clearance to open.</li>
                    <li><b>Floor-to-Ceiling Wardrobes: </b>These make the most of vertical space and offer loft <b>compartments</b> to store seasonal items.</li>
                    <li><b>Mirrored Wardrobes: </b> These double up as a dressing area and create the illusion of a larger room.</li>
                    <li><b>Multi-Functional Wardrobes: </b> With built-in drawers and pull-out organisers, these keep everything neat without needing extra furniture.</li>
                    <li><b>Custom-Built Corner Wardrobes: </b> Ideal for awkward corners, these maximise every inch of space.</li>
                    <li><b>Light-Coloured Finishes & Glass Panels: </b>  Combined with sleek, handleless designs, these help the room feel more open and airy.</li>
                   </ul>

                    <p>Choosing the right combination of these features can help you design a <b>functional and stylish wardrobe </b>that fits perfectly in your small bedroom.</p>
                </div>
                </div>
               </div> 
                <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                   5. What are some space-saving wardrobe design ideas for compact homes?
                </button>
                </h2>
                <div id="flush-collapseFive" className="accordion-collapse collapse" >
                <div className="accordion-body">
                    In compact homes, every inch counts. The right wardrobe designs for bedrooms can help you <b>maximise space</b> without compromising on style.
                 <br/><br/>

                   <ul>
                    <li><b>✅ Sliding Door Wardrobes : </b>Ideal for tight spaces as they don’t swing open, saving floor space.</li>
                    <li><b>✅ Built-in Wardrobes with Loft Storage: </b>Utilise <b>vertical space</b> effectively for seasonal or rarely used items.</li>
                    <li><b>✅ Mirrored Wardrobes:  </b> Reflect light and make <b>the room feel bigger</b>, perfect for small bedrooms.</li>
                    <li><b>✅ Open Wardrobes with Modular Shelving: </b>Create an <b>airy, modern look</b> and keep essentials within easy reach.</li>
                    <li><b>✅ Foldable or Pull-out Compartments: </b> Add flexibility and enhance functionality for compact homes.</li>
                   </ul>
                   <p><b>Bonus Tip: </b></p>
                   <p>Choose a <b> bedroom wardrobe design</b>that includes<b>smart storage solutions </b> like :</p>
                   <ul>
                    <li>Hidden drawers</li>
                    <li>Pull-out racks</li>
                    <li>Adjustable shelves</li>
                   </ul>

                    <p>These features help keep the space <b>clutter-free and organised. </b>For even more flexibility, a modular wardrobe design lets you <b>customise the interiors</b> to match your specific storage needs.</p>
                </div>
                </div>
               </div> 
        </div>

     

    </div>

     <p className='disclaimer container'>Kindly note: Product images are representative and may not reflect exact offerings. Please contact us to create a design customized for you.</p>
    </div>
  )
}
export default Wardrobe