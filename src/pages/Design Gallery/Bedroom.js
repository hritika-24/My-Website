import React, { useState } from 'react'
import './CommonDesignGallery.css';
import { Link } from 'react-router-dom';


import Bedroomwithbrickwall1 from '../../assets/designgallery/Bedroom/bedroom_with_brickwallcladding/bedroom_with_brickwallcladding (1).jpg'
import Bedroomwithbrickwall2 from '../../assets/designgallery/Bedroom/bedroom_with_brickwallcladding/bedroom_with_brickwallcladding (10).jpg'
import Bedroomwithbrickwall3 from '../../assets/designgallery/Bedroom/bedroom_with_brickwallcladding/bedroom_with_brickwallcladding (3).jpg'
import Bedroomwithbrickwall4 from '../../assets/designgallery/Bedroom/bedroom_with_brickwallcladding/bedroom_with_brickwallcladding (4).jpg'
import Bedroomwithbrickwall5 from '../../assets/designgallery/Bedroom/bedroom_with_brickwallcladding/bedroom_with_brickwallcladding (5).jpg'
import Bedroomwithbrickwall6 from '../../assets/designgallery/Bedroom/bedroom_with_brickwallcladding/bedroom_with_brickwallcladding (6).jpg'


import Bedroomwithsleekdresserunit1 from '../../assets/designgallery/Bedroom/Bedroom_With_Sleek_Dresser_TV Unit/bedroom_with_sleek_dresser_tvunit (1).webp'
import Bedroomwithsleekdresserunit2 from '../../assets/designgallery/Bedroom/Bedroom_With_Sleek_Dresser_TV Unit/bedroom_with_sleek_dresser_tvunit (2).jpg'
import Bedroomwithsleekdresserunit3 from '../../assets/designgallery/Bedroom/Bedroom_With_Sleek_Dresser_TV Unit/bedroom_with_sleek_dresser_tvunit (3).jpg'
import Bedroomwithsleekdresserunit4 from '../../assets/designgallery/Bedroom/Bedroom_With_Sleek_Dresser_TV Unit/bedroom_with_sleek_dresser_tvunit (4).jpg'
import Bedroomwithsleekdresserunit5 from '../../assets/designgallery/Bedroom/Bedroom_With_Sleek_Dresser_TV Unit/bedroom_with_sleek_dresser_tvunit (4).webp'
import Bedroomwithsleekdresserunit6 from '../../assets/designgallery/Bedroom/Bedroom_With_Sleek_Dresser_TV Unit/bedroom_with_sleek_dresser_tvunit (6).jpg'
import { BiSolidOffer } from 'react-icons/bi';
import { MdOutlineReplay10, MdOutlineThumbUpAlt } from 'react-icons/md';


import Bedroomwithstudyarea1 from '../../assets/designgallery/Bedroom/bedrom_with_separateStudyArea/bedrroom_with_separate_studyarea (1).jpg'
import Bedroomwithstudyarea2 from '../../assets/designgallery/Bedroom/bedrom_with_separateStudyArea/bedrroom_with_separate_studyarea (2).jpg'
import Bedroomwithstudyarea3 from '../../assets/designgallery/Bedroom/bedrom_with_separateStudyArea/bedrroom_with_separate_studyarea (3).jpg'
import Bedroomwithstudyarea4 from '../../assets/designgallery/Bedroom/bedrom_with_separateStudyArea/bedrroom_with_separate_studyarea (4).jpg'
import Bedroomwithstudyarea5 from '../../assets/designgallery/Bedroom/bedrom_with_separateStudyArea/bedrroom_with_separate_studyarea (5).jpg'
import Bedroomwithstudyarea6 from '../../assets/designgallery/Bedroom/bedrom_with_separateStudyArea/bedrroom_with_separate_studyarea (6).jpg'


import IndustrialBedroom1 from '../../assets/designgallery/Bedroom/Industrial_style_bedroom/An_Industrial_bedroom_design (8).jpg'
import IndustrialBedroom2 from '../../assets/designgallery/Bedroom/Industrial_style_bedroom/An_Industrial_bedroom_design (2).jpg'
import IndustrialBedroom3 from '../../assets/designgallery/Bedroom/Industrial_style_bedroom/An_Industrial_bedroom_design (3).jpg'
import IndustrialBedroom4 from '../../assets/designgallery/Bedroom/Industrial_style_bedroom/An_Industrial_bedroom_design (5).jpg'
import IndustrialBedroom5 from '../../assets/designgallery/Bedroom/Industrial_style_bedroom/An_Industrial_bedroom_design (6).jpg'
import IndustrialBedroom6 from '../../assets/designgallery/Bedroom/Industrial_style_bedroom/An_Industrial_bedroom_design (7).jpg'


import livingcumbedroom1 from '../../assets/designgallery/Bedroom/living_room_cum_bedroom/livingCumbedRoom (1).jpg'
import livingcumbedroom2 from '../../assets/designgallery/Bedroom/living_room_cum_bedroom/livingCumbedRoom (2).jpg'
import livingcumbedroom3 from '../../assets/designgallery/Bedroom/living_room_cum_bedroom/livingCumbedRoom (3).jpg'
import livingcumbedroom4 from '../../assets/designgallery/Bedroom/living_room_cum_bedroom/livingCumbedRoom (4).jpg'
import livingcumbedroom5 from '../../assets/designgallery/Bedroom/living_room_cum_bedroom/livingCumbedRoom (5).jpg'
import livingcumbedroom6 from '../../assets/designgallery/Bedroom/living_room_cum_bedroom/livingCumbedRoom (6).jpg'



const Bedroom = () => {
// ***********************************************
const [isExpanded1,setIsExpanded1]=useState(true);
const toggleContent1=()=>{
    setIsExpanded1(prev=>!prev)
};
// ***********************************************


// ***********************************************
const [isExpanded2,setIsExpanded2]=useState(false)
const toggleContent2=()=>{
    setIsExpanded2(prev=>!prev)
};
// ***********************************************

// // ***********************************************
// const [isExpanded3,setIsExpanded3]=useState(false)
// const toggleContent3=()=>{
//     setIsExpanded3(prev=>!prev)
// };
// // ***********************************************
  return (
    <div>
        <div className='bedroom design-gallery '>
            <div className='bedroom-heading container'>
                <h3>Bedroom Designs</h3>
                <p className='para'>
                    Explore our stunning bedroom designs. Transform your bedrrom with stylish, 
                    comfortabple and elegant interiors!
                </p>
            </div>
        {/*  **************************************************/}
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
                                <img src={ Bedroomwithbrickwall1} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={ Bedroomwithbrickwall2} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={ Bedroomwithbrickwall3} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={ Bedroomwithbrickwall4} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={ Bedroomwithbrickwall5} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={ Bedroomwithbrickwall6} class="d-block w-100" alt="..."/>
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
                <p className='img-details-and-btn'>Modern Bedroom With Brick Wall Cladding <Link className='btn form-btn' to= "/form">Get a Quote</Link></p>
    
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
                            A modern bedroom designed with simplicity and sleekness. A wardrobe with space to
                            hang trousers, a bed with full area storage and a unit for books and decor make this bedroom a space 
                            saver's dream.
                        </p>
                        <p className='extra-info-features'>Special Features</p>
                        <ul className='extra-info-list'>
                        <li>Brick wall cladding for an industrial style aesthetics.</li>
                        <li>Tall wooden open bookshelf with pull-out storage.</li>
                        <li>King size bed with ample storage.</li>
                        <li>Shutter wardrobes with hanger space for trousers.</li>
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
        <div style={{margin:'80px'}}  ></div>


            {/* slider-1 end */}

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
                                <img src={  Bedroomwithsleekdresserunit1} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={  Bedroomwithsleekdresserunit2} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={  Bedroomwithsleekdresserunit3} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={  Bedroomwithsleekdresserunit4} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={  Bedroomwithsleekdresserunit5} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={  Bedroomwithsleekdresserunit6} class="d-block w-100" alt="..."/>
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
                <p className='img-details-and-btn'>A Bedroom With A Sleek Dresser And TV Unit <Link className='btn form-btn' to= "/form">Get a Quote</Link></p>
    
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
                          This bedroom has a soothing aura to it thanks to an earthy colour scheme and a lot of woodwork. 
                          The room exhibits modern and stylish furniture pieces with a twist of Indian traditional design sensibilities.
                          It is kept organised and clutter-free with space-saving and modular furniture pieces.
                        </p>
                        <p className='extra-info-features'>Special Features</p>
                        <ul className='extra-info-list'>
                            <li>A gorgeous wooden laminate finished bed with a padded cushion headboard adds to the comfort of the space.</li>
                            <li>A sleek dressing unit in the same wooden laminate finish comes with handleless drawers and a full-length mirror.</li>
                            <li>An elegant wooden laminate TV unit with white laminate front handleless drawers and an open floating shelf complements the interiors of the bedroom.</li>
                            <li>A modular study unit, also in wooden laminate finish. has been designed with open shelf units.</li>
                            <li>The bedroom’s window bay seating improves the multifunctionality of the space.</li>
                            <li>A wooden ceiling fan with light adds lavishness to the whole bedroom setup</li>
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
        <div style={{margin:'80px'}}  ></div>

            {/* slider-2 end*/}
        </div>
        {/* ******************************** */}
        
                
                {/*whychooseourkitchen*/}
                    <div className='whyourkitchen'>
                      <h3>Why Choose Our Bedroom Designs</h3>
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
                {/*whychooseourkitchen*/}
        
        
              {/* ******************************** */}
        <div className='shapes container'>
            {/* Slider 3 */}
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
                                <img src={  Bedroomwithstudyarea1} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={  Bedroomwithstudyarea2} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={  Bedroomwithstudyarea3} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={  Bedroomwithstudyarea4} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={  Bedroomwithstudyarea5} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={  Bedroomwithstudyarea6} class="d-block w-100" alt="..."/>
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
                <p className='img-details-and-btn'>A Modern Bedroom With A Separate Study Area <Link className='btn form-btn' to= "/form">Get a Quote</Link></p>
    
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
                           This bedroom,in gray and wood, creates an elegant yet bold statement .While the smart design
                           blends style and functionality, the multifunctional furniture pieces
                           make the space ideal for millenial working couples.
                        </p>
                        <p className='extra-info-features'>Special Features</p>
                        <ul className='extra-info-list'>
                            <li>A king-size bed with twin bedside cabinets and an accent wall.</li>
                            <li>A four-door ightwood laminate wardrobe with separate His and His section.</li>
                            <li>An ergonomic study area separated by a partititon with a wall-mounted desk and overhead cabinets.</li>
                            <li>The study table comes with two handleless drawers to arrage your books and stationaries in a  clutter-free manner.</li>
                            <li>A wallmounted bookshelf and accent chair on the other side of the study unit to enjoy some leisure time between work.</li>
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
        <div style={{margin:'80px'}}  ></div>
    
            {/* Slider 3  end*/}

            {/* slider 4 */}
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
                                <img src={ IndustrialBedroom1} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={ IndustrialBedroom2} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={ IndustrialBedroom3} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={ IndustrialBedroom4} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={ IndustrialBedroom5} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={ IndustrialBedroom6} class="d-block w-100" alt="..."/>
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
                <p className='img-details-and-btn'>An Industrial Style Bedroom design <Link className='btn form-btn' to= "/form">Get a Quote</Link></p>
    
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
                          An industrial style bedroom with an exposed brick wall and pops of color.An all black,sleek sliding door wardrobe lends an edgy look to this space
                        </p>
                        <p className='extra-info-features'>Special Features</p>
                        <ul className='extra-info-list'>
                            <li>A sliding door wardrobe with multiple compartments.</li>
                            <li>A study table adjoints the wardrobe built with overhead cabinets and shelves</li>
                            <li>A walk in dresser unit with tall shelves on the side</li>
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
        <div style={{margin:'80px'}}  ></div>
    
                






            {/* slider 4 -end*/}

            {/* slider 5 */}
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
                                <img src={ livingcumbedroom1} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={ livingcumbedroom2} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={ livingcumbedroom3} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={ livingcumbedroom4} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={ livingcumbedroom5} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={ livingcumbedroom6} class="d-block w-100" alt="..."/>
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
                <p className='img-details-and-btn'>An Industrial Style Bedroom design <Link className='btn form-btn' to= "/form">Get a Quote</Link></p>
    
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
                          An industrial style bedroom with an exposed brick wall and pops of color.An all black,sleek sliding door wardrobe lends an edgy look to this space
                        </p>
                        <p className='extra-info-features'>Special Features</p>
                        <ul className='extra-info-list'>
                            <li>A sliding door wardrobe with multiple compartments.</li>
                            <li>A study table adjoints the wardrobe built with overhead cabinets and shelves</li>
                            <li>A walk in dresser unit with tall shelves on the side</li>
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
        <div style={{margin:'80px'}}  ></div>


            {/* slider 5 end*/}
        </div>        
        {/* ******************************** */}
        
        
              {/*whychooseourkitchen*/}
              <div className='whyourkitchen'>
                <h3>Why Choose Our Bedroom Designs</h3>
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
        
              {/*whychooseourkitchen*/}
                   <p className='disclaimer container'>Kindly note: Product images are representative and may not reflect exact offerings. Please contact us to create a design customized for you.</p>
        </div>

    </div>
  )
}

export default Bedroom