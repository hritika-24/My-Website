import React, { useState } from 'react';
import './CommonDesignGallery.css';
import { Link } from 'react-router-dom';
import ushape1 from '../../assets/designgallery/kitchen gallery/u-shaped/u-shape (1).jpeg'
import ushape2 from '../../assets/designgallery/kitchen gallery/u-shaped/u-shape (2).jpeg'
import ushape3 from '../../assets/designgallery/kitchen gallery/u-shaped/u-shape (3).jpeg'
import ushape4 from '../../assets/designgallery/kitchen gallery/u-shaped/u-shape (4).jpeg'
import ushape5 from '../../assets/designgallery/kitchen gallery/u-shaped/u-shape (5).jpeg'
import ushape6 from '../../assets/designgallery/kitchen gallery/u-shaped/u-shape (6).jpeg'


import lshape1 from '../../assets/designgallery/kitchen gallery/L shape/l-shape (1).jpeg'
import lshape2 from '../../assets/designgallery/kitchen gallery/L shape/l-shape (10).jpeg'
import lshape3 from '../../assets/designgallery/kitchen gallery/L shape/l-shape (2).jpeg'
import lshape4 from '../../assets/designgallery/kitchen gallery/L shape/l-shape (3).jpeg'
import lshape5 from '../../assets/designgallery/kitchen gallery/L shape/l-shape (4).jpeg'
import lshape6 from '../../assets/designgallery/kitchen gallery/L shape/l-shape (6).jpeg'


import straightshape1 from '../../assets/designgallery/kitchen gallery/straight-shaped/straight-shaped (1).jpg'
import straightshape2 from '../../assets/designgallery/kitchen gallery/straight-shaped/straight-shaped (1).png'
import straightshape3 from '../../assets/designgallery/kitchen gallery/straight-shaped/straight-shaped (1).webp'
import straightshape4 from '../../assets/designgallery/kitchen gallery/straight-shaped/straight-shaped (2).jpg'
import straightshape5 from '../../assets/designgallery/kitchen gallery/straight-shaped/straight-shaped (3).jpg'
import straightshape6 from '../../assets/designgallery/kitchen gallery/straight-shaped/straight-shaped (9).jpg'


import parallel1 from '../../assets/designgallery/kitchen gallery/parallel-shape/parallel-shape (1).jpg'
import parallel2 from '../../assets/designgallery/kitchen gallery/parallel-shape/parallel-shape (2).jpg'
import parallel3 from '../../assets/designgallery/kitchen gallery/parallel-shape/parallel-shape (3).jpg'
import parallel4 from '../../assets/designgallery/kitchen gallery/parallel-shape/parallel-shape (4).jpg'
import parallel5 from '../../assets/designgallery/kitchen gallery/parallel-shape/parallel-shape (5).jpg'
import parallel6 from '../../assets/designgallery/kitchen gallery/parallel-shape/parallel-shape (6).jpg'


import islandkitchen1 from '../../assets/designgallery/kitchen gallery/island-kitchen-shape/island-kitchen (1).jpg'
import islandkitchen2 from '../../assets/designgallery/kitchen gallery/island-kitchen-shape/island-kitchen (11).jpg'
import islandkitchen3 from '../../assets/designgallery/kitchen gallery/island-kitchen-shape/island-kitchen (12).jpg'
import islandkitchen4 from '../../assets/designgallery/kitchen gallery/island-kitchen-shape/island-kitchen (14).jpg'
import islandkitchen5 from '../../assets/designgallery/kitchen gallery/island-kitchen-shape/island-kitchen (15).jpg'
import islandkitchen6 from '../../assets/designgallery/kitchen gallery/island-kitchen-shape/island-kitchen (16).jpg'
import { BiSolidOffer } from 'react-icons/bi';
import { MdOutlineReplay10, MdOutlineThumbUpAlt } from 'react-icons/md';
import { FaThumbsUp } from 'react-icons/fa';



const ModularKitchen = () => {
  const [isExpanded5, setIsExpanded5] = useState(false);

  const toggleContent5 = () => {
    setIsExpanded5(prev => !prev);
  };

  // *****************************************
  const [isExpanded1, setIsExpanded1] = useState(true);

  const toggleContent1 = () => {
    setIsExpanded1(prev => !prev);
  };
  // *****************************************
  const [isExpanded2, setIsExpanded2] = useState(false);

  const toggleContent2 = () => {
    setIsExpanded2(prev => !prev);
  };
  // *****************************************
  const [isExpanded3, setIsExpanded3] = useState(false);

  const toggleContent3 = () => {
    setIsExpanded3(prev => !prev);
  };
  // *****************************************
  const [isExpanded4, setIsExpanded4] = useState(false);

  const toggleContent4 = () => {
    setIsExpanded4(prev => !prev);
  };
  
  return (
    <div className='modular-kitchen  design-gallery'>
      <div className='modular-kitchen-heading container'>
        <h3>Modular Kitchen Designs</h3>
        <p className='para'>
          Discover stylish modular kitchen designs: Straight, L-shaped, U-shaped, Parallel & Island layouts. Combining functionality with modern, space-saving solutions.
        </p>
      </div>

      {/* ****************************** */}
      <div className='shapes container'>
          {/* Slider 1*/}
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
                  <img src={ushape1} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src={ushape2} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src={ushape3} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src={ushape4} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src={ushape5} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src={ushape6} class="d-block w-100" alt="..."/>
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
              <p className='img-details-and-btn'>Stylish and Roomy Pastel U-Shaped Kitchen Design <Link className='btn form-btn' to= "/form">Get a Quote</Link></p>

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
                    This modular kitchen has floral printed tiles that make this space more charming.
                    Inspired by the colours of the sea, this kitchen interior is soothing to look at
                    and spacious to work in with its clever storage solutions.
                  </p>
                  <p className='extra-info-features'>Special Features</p>
                  <ul className='extra-info-list'>
                    <li>An oil pull out</li>
                    <li>A skirting drawer</li>
                    <li>Cabinets with frosted glass</li>
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
          {/* slider 1 end*/}
          <div style={{margin:'80px'}}  ></div>


          {/* slider-2 */}
              <div id="carouselExampleIndicators2" class="carousel slide">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="5" aria-label="Slide 6"></button>
                  </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={lshape1} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src={lshape2} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src={lshape3} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src={lshape4} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src={lshape5} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src={lshape6} class="d-block w-100" alt="..."/>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>

              <div className='images-details mt-3'>
                <p className='img-details-and-btn'>A L-shaped Modular Kitchen Design With A Tiled Backsplash <Link className='btn form-btn' to= "/form">Get a Quote</Link></p>

                {/* Show More button */}
                {!isExpanded2 && (
                  <button
                    className=" show-more btn  mt-2"
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
                      This modular kitchen has floral printed tiles that make this space  more
                      charming. Inspired by the colours of the sea, tis kitchen interiors is soothing
                      to look at and spacious to work in with its clever storage solution
                    </p>
                    <p className='extra-info-features'>Special Features</p>
                    <ul className='extra-info-list'>
                      <li>An oil pull out</li>
                      <li>A skirting drawer</li>
                      <li>Cabinets with frosted glass</li>
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
          {/* slider-2 */}
      
      </div>
      {/* ******************************** */}

        
        {/*whychooseourkitchen*/}
            <div className='whyourkitchen'>
              <h3>Why Choose Our Kitchen</h3>
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
      <div  className='shapes container'>
        {/*  slider-3*/}
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
              <img src={straightshape1} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={straightshape2} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={straightshape3} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={straightshape4} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={straightshape5} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={straightshape6} class="d-block w-100" alt="..."/>
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
          <p className='img-details-and-btn'>A straight Shaped Kitchen With A Foldable Breakfast Counter <Link className='btn form-btn' to= "/form">Get a Quote</Link></p>

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
                This straight shaped kitchen with a marble countertop is perfect for those 
                who like to keep their cooking space simple and at easy access
              </p>
              <p className='extra-info-features'>Special Features</p>
              <ul className='extra-info-list'>
                <li>An oil pull out to store bottle</li>
                <li>A marble countertop in white</li>
                <li>A tall unit with space for a oven</li>
                <li>Bottom cabinets and drawers in olive green</li>
                <li>Overhead cabinets in white</li>
                <li>A foldable breakfast counter for rushed mornings</li>
              </ul>

              {/* Show Less button */}
              <button
                className=" show-less btn  mt-3"
                onClick={toggleContent3}
                aria-expanded={isExpanded3}
              >
                Show Less ▲
              </button>
            </div>
          )}
        </div>
        <div style={{margin:'80px'}}  ></div>
        
        {/* slider-3 */}

        {/* slider-4 */}
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
                <img src={parallel1} class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src={parallel2} class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src={parallel3} class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src={parallel4} class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src={parallel5} class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src={parallel6} class="d-block w-100" alt="..."/>
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
            <p className='img-details-and-btn'>A Stunning Parallel Kitchen Design <Link className='btn form-btn' to= "/form">Get a Quote</Link></p>

            {/* Show More button */}
            {!isExpanded4 && (
              <button
                className=" show-more btn mt-2"
                onClick={toggleContent4}
                aria-expanded={isExpanded4}
              >
                Show More ▼
              </button>
            )}

            {/* Expanded content */}
            {isExpanded4 && (
              <div className="extra-info mt-3 ">
                <p className='extra-info-para'>
                  This parallel kitchen is designed with an open layout for a spacious and airy look.
                  The handledless cabinets lend a sleek and sophisticated vibe and fit perfectly
                  in a modern electric home.
                </p>
                <p className='extra-info-features'>Special Features</p>
                <ul className='extra-info-list'>
                  <li>A parallel kitchen in dual combination finish of black base and white overhead cabinets</li>
                  <li>Base unit features hob unit with 3-tier basket, shutter units, drawers, oi pull outs, ad sink unit</li>
                  <li>Overhead cabinets feature long shutter units, frosted glass door box shelves and open shelves with backlighting</li>
                  <li>Kitchen extends into a light wood breakfast counter for three with cafe-style bar stool for seating</li>
                  <li>Chevron patterned backsplash and geometric tiling pattern add to the electric theme of the kitchen</li>
                </ul>

                {/* Show Less button */}
                <button
                  className=" show-less btn  mt-3"
                  onClick={toggleContent4}
                  aria-expanded={isExpanded4}
                >
                  Show Less ▲
                </button>
              </div>
            )}
          </div>
        {/* slider-4 */}

          <div style={{margin:'80px'}}  ></div>
        

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
                <img src={islandkitchen1} class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src={islandkitchen2} class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src={islandkitchen3} class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src={islandkitchen4} class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src={islandkitchen5} class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src={islandkitchen6} class="d-block w-100" alt="..."/>
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
            <p className='img-details-and-btn'>A Modular Island Kitchen Design With an Accent Wall<Link className='btn form-btn' to= "/form">Get a Quote</Link></p>

            {/* Show More button */}
            {!isExpanded5 && (
              <button
                className=" show-more btn mt-2"
                onClick={toggleContent5}
                aria-expanded={isExpanded5}
              >
                Show More ▼
              </button>
            )}

            {/* Expanded content */}
            {isExpanded5 && (
              <div className="extra-info mt-3 ">
                <p className='extra-info-para'>
                Island kitchen design featuring a modular layout and a striking accent wall.
                blue and grey cabinets with an accent wall make this kitchen look-stylish and chic.
                </p>
                <p className='extra-info-features'>Special Features</p>
                <ul className='extra-info-list'>
                  <li>An island in the centre with a hob unit and chimney above to cook and eat together.</li>
                  <li>Handleless cabinets in blue and grey blend together beautifully.</li>
                  <li>An accent wall in textured paint brings in character to the space.</li>
                  <li>A tiled backsplash bre aks the monotony of solid colours.</li>
                  <li>Two upholstered high chairs with gold legs have been placed as seating options at the island.</li>
                </ul>

                {/* Show Less button */}
                <button
                  className=" show-less btn  mt-3"
                  onClick={toggleContent5}
                  aria-expanded={isExpanded5}
                >
                  Show Less ▲
                </button>
              </div>
            )}
          </div>
          <div style={{margin:'80px'}}  ></div>
        {/* slider-5 */}



      </div>
      {/* ******************************** */}


      {/*whychooseourkitchen*/}
      <div className='whyourkitchen'>
        <h3>Why Choose Our Kitchen</h3>
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
      {/* FAQ's for kitchen */}
       <div className=' design gallery faq container'>
        <h2 className=' design gallery faq-heading'>Frequently asked questions on Modular Kitchen</h2>
        {/* <Link to="/contactForm" classNameName="btn btn-warning">Enquiry Form</Link> */}
        <div className="container accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                1. What is a modular kitchen , and how does it differ from a traditional kitchen ?
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" >
              <div className="accordion-body">A modular kitchen is a moder , pre-fabricated kitchen system where components like cabinets
                ,drawers and shelves are factorymade and assemled on-site. These kitchens are known for their sleek design,precision, and functionality.
                in contrast, traditional kitchens are usually made on-site by carpenters, often lacking the standardisation,innovative storage solutions,
                and advancedd materials of modular kitchens. modular kitchens are quick to install , easy to repair, and highly customisable, making them the go-to
                choice for homeowners looking to blend practicality with aesthetics.  </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              2. What are the benefits of installing a modular kitchen?
              </button>
            </h2> 
            <div id="flush-collapseTwo" className="accordion-collapse collapse" >
              <div className="accordion-body">
                opting for a modular kitchen comes with a host of advantages:
                <ul><br/>
                    <li><b>Space Optimisation: </b>Every module is designed to maximise.</li>
                    <li><b>Customisation:      </b>Choose from a wide range of materials , finishes and layout tailored to your needs.</li>
                    <li><b>Quick Installation: </b>Pre-fabricated modules mean your kitchen can be ready in a matter of weeks</li>
                    <li><b>Modern Aesthetics:  </b>Sleek,clean designs enhance the overall look of your home. </li>
                    <li><b>ease of Maintanance:</b>Individual modules are easy to clean , repair or replace</li>
                    <li><b>Durability:         </b>Built with high-quality materials like marine plywood and HDHMR, these kitchens are made to last.</li>
                </ul><br/>
                 A modular kitchen is not just a functional space-it's an investment in your home's style and value.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
             3. What layouts are available for modular kitchens and which ones are the most popular ? 
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" >
              <div className="accordion-body">Modular kitchens are avilable in a variety of layouts to suit every speed and need:
                <ul><br/>
                  <li><b>Straight Kitchen:</b> A single-line arrangement , perfect for small spacs or studio apartments</li>
                  <li><b>L-Shaped kitchen:</b> Utilises cornrs efficiently ,offering plenty of storage and workspace for medium-size homes.</li>
                  <li><b>u-shaped kitchen:</b> ideal for larger spaces, with abundant countertops and storage for multitasking</li>
                  <li><b>Parallel kitchen:</b> Great for narrow kitchens, with counters on opposite walls for easy workflow</li>
                  <li><b>insland kitchen: </b>adds a frestanding counter for extra storage or dining perfect for open layouts</li>
                </ul><br/>
                Each layout is designed to enhance functionality while maintaining the visual appeal of your kitchen designs. 
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
              4. What are the popular styles for modular kitchens ?
              </button>
            </h2>
            <div id="flush-collapseFour" className="accordion-collapse collapse" >
              <div className="accordion-body"> When it comes to modular kitchen design, the styles available are as versatile as they are practical, allowing you to personalise your kitchen to match your taste and lifestyle. Some popular styles include:
                <ul><br/>
                  <li><b>Minimalist Modern:  </b>Sleek, handleless cabinets with high-gloss or matte finishes, neutral tones, and clutter-free surfaces for a clean, contemporary look</li>
                  <li><b>Contemporary:       </b>A blend of traditional and modern elements, often featuring bold colours, geometric patterns, and a mix of textures.</li>
                  <li><b>Industrial:         </b>Think exposed finishes, metallic accents, concrete countertops, and stainless steel – ideal for those who prefer a raw, edgy aesthetic</li>
                  <li><b>Classic Wooden:     </b>Veneer finishes in warm wood tones or painted cabinets for a timeless and elegant appeal.</li>
                  <li><b>Traditional Indian: </b>Elements like jaali shutters, built-in spiceracks, and natursl materials such as stone or wood capture the essense of indian cooking spaces</li>
                </ul><br/>
                At Artical Art, we help you select a style that combines aesthetics with practicality, ensuring your kitchen interior design reflects your personality while meeting your daily needs. 
                </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                5. what are the countertop options available for modular kitchens and how to i choose the right one?
              </button>
            </h2>
            <div id="flush-collapseFive" className="accordion-collapse collapse" >
              <div className="accordion-body"> Countertops are an integral part of any modular kitchen interior design. Popular options include:
                <ul><br/>
                  <li><b>Granite:              </b> Durable, scratch-resistant, and affordable, making it a classic choice.</li>
                  <li><b>Quartz:               </b> Non-porous and luxurious, available in various colours and patterns.</li>
                  <li><b>Marble:               </b> Timeless and elegant but requires sealing for longevity.</li>
                  <li><b>Compact Laminate:     </b> Lightweight, affordable, and perfect for minimalistic designs.</li>
                  <li><b>Solid Surface (Corian)</b> Seamless, repairable, and ideal for contemporary kitchens.</li>
                  <li><b>Concrete:             </b> Gaining popularity for industrial-style kitchen design</li>
                </ul><br/>
                Each material offers a unique blend of functionality and aesthetics, allowing you to choose a countertop that complements your overall kitchen style.
             </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
              6. Which colour schemes work best for modular kitchens to create the ideal look?
              </button>
            </h2>
            <div id="flush-collapseSix" className="accordion-collapse collapse" >
              <div className="accordion-body">Choosing the right colour scheme can completely transform your kitchen’s ambiance. Here are some tried-and-tested combinations that work well for kitchen designs:
                <ul><br></br>
                  <li><b>Neutral Shades:      </b> Whites, greys, and beiges are timeless and create an open, airy feel—perfect for smaller spaces or minimalist designs.</li>
                  <li><b>Bold Accents:        </b> Deep hues like navy blue, emerald green, or mustard add a striking focal point when paired with neutral backdrops.</li>
                  <li><b>Two-Tone Combinations</b> Pair contrasting colours, such as white and wood or grey and yellow, to add depth and visual interest.</li>
                  <li><b>Monochrome:          </b> Black-and-white kitchens exude sophistication and work well in modern interiors.</li>
                  <li><b>Earthy Tones:        </b> Browns, terracotta, and olive shades are ideal for creating warm, rustic aesthetics.</li>
                </ul><br></br>
                Our designers can help you choose a colour scheme that enhances your kitchen interior design while complementing your home’s overall decor.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
               7. What are the trending modular kitchen designs for 2025 that i should explore ?
              </button>
            </h2>
            <div id="flush-collapseSeven" className="accordion-collapse collapse" >
              <div className="accordion-body">The future of modular kitchen design combines innovation, sustainability, and style. Here are some of the hottest trends for 2025: 
                <ul><br/>
                  <li><b>Biophilic Designs:   </b> Incorporating natural materials like wood and stone, along with indoor plants, to bring the outdoors in.</li>
                  <li><b>Smart Kitchens:      </b> Featuring voice-controlled appliances, app-integrated lighting, and advanced technology for seamless functionality.</li>
                  <li><b>Bold Colour Palettes:</b> Rich greens, blues, and maroons paired with metallic hardware for a dramatic yet elegant look</li>
                  <li><b>Invisible Appliances:</b> Built-in ovens, fridges, and hobs that blend seamlessly into the cabinetry for a sleek, clutter-free finish.</li>
                  <li><b>Open Shelving:       </b> A mix of open and closed cabinets for displaying your best crockery while maintaining storage.</li>
               </ul> <br/>
               </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
               
              8. Which modular kitchen design best suits my home?
              </button>
            </h2>
            <div id="flush-collapseEight" className="accordion-collapse collapse" >
              <div className="accordion-body"> The ideal modular kitchen design depends on your kitchen size, layout, and cooking habits.
                                                Whether you have a compact space or a spacious kitchen, selecting the right layout ensures efficiency, storage optimisation, 
                                                and a seamless cooking experience that complements your home interiors.<br/>
                 Popular Modular Kitchen Layouts and Their Suitability                               
                <ul><br/>
                  <li><b>L-Shaped Kitchen :         </b> Perfect for small to medium-sized kitchens, this design maximises corner space while allowing for an open layout and smooth workflow, seamlessly blending with house interior design.</li>
                  <li><b>U-Shaped Kitchen :         </b> Best suited for spacious kitchens, this layout provides ample counter space and storage, making it ideal for home interior design that requires functionality and aesthetics</li>
                  <li><b>Parallel (Galley) Kitchen :</b> Suitable for compact or narrow kitchens, this design offers two parallel counters for efficient movement and maximised workspace, aligning with modern interior designs.</li>
                  <li><b>Island Kitchen :           </b> Ideal for large open-plan kitchens, an island adds extra workspace, enhances aesthetics, and serves as a dining or socialising area, making it a stylish choice for interior design for home kitchens.</li>
                  <li><b>Straight-Line Kitchen :    </b> Best for studio apartments or small homes, this layout keeps all work zones in a single line for maximum space efficiency while maintaining a sleek home interio</li>
               </ul> <br/>
                Factors to Consider When Choosing a Modular Kitchen Design
                <ul><br/>
                  <li>Kitchen Size & Layout : The available space determines the best-suited layout for functionality and movement while complementing home interior design.</li>
                  <li>Storage Needs : Customising cabinets, pull-out drawers, and overhead storage ensures a clutter-free home interior</li>
                  <li>Work Triangle Efficiency : The placement of the hob, sink, and refrigerator should allow smooth movement for an ergonomic workflow that enhances the efficiency of house interior design.</li>
                  <li>Material & Finish Options : Choose durable materials like laminate, acrylic, or PU finishes for a stylish yet low-maintenance modular kitchen in modern interior designs.</li>
                  <li>Lighting & Ventilation : A well-lit and well-ventilated kitchen enhances comfort and prevents heat build-up, ensuring an inviting home interior design.</li>

                </ul><br/>
                For a well-optimised modular kitchen, consider professional consultation to customise storage solutions, maximise space, and ensure seamless integration with your home interiors
               </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
               9. What is the average cost of a modular kitchen in india?
              </button>
            </h2>
            <div id="flush-collapseNine" className="accordion-collapse collapse" >
              <div className="accordion-body">
                The cost of a modular kitchen in India ranges from ₹1.5 lakh to ₹6 lakh or more, depending on size, materials, finishes, and accessories. Here’s a breakdown:<br/>
                <ul><br/>
                  <li><b>Smaller Kitchens:         </b> Starting at around ₹1.5 lakh, ideal for basic layouts like Straight or Parallel kitchens.</li>
                  <li><b>Medium to Larger Kitchens:</b> Typically range between ₹3.5 lakh and ₹5 lakh, including layouts like L-shaped or U-shaped designs.</li>
                  <li><b>Premium Kitchens:         </b>  Can exceed ₹6 lakh, featuring imported finishes, high-end appliances, and innovative storage solutions</li>
               </ul> <br/>
               At Artical Art, we offer modular kitchen options that cater to both your budget and design preferences, ensuring you get the best blend of quality and aesthetics. 
               </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
               10. What factors influence the  price of the modular kitchen ?
              </button>
            </h2>
            <div id="flush-collapseTen" className="accordion-collapse collapse" >
              <div className="accordion-body">Several factors influence the price of a modular kitchen. These include:

                <ul><br/>
                  <li><b>Size and Layout:</b> Larger kitchens or complex layouts like U-shaped or Island designs cost more.</li>
                  <li><b>Materials:      </b> Marine plywood and HDHMR are more expensive but durable, while MDF is budget-friendly.</li>
                  <li><b>Finishes:       </b>  High-gloss acrylics and veneers are pricier compared to laminates.</li>
                  <li><b>Accessories:    </b> Magic corners, soft-close drawers, and pantry units add to the cost.</li>
                  <li><b>Appliances:     </b> Built-in options like dishwashers, ovens, and hobs increase the overall budget</li>
               </ul> <br/>
               Discussing your requirements with a professional designer can help you balance cost and functionality for the perfect kitchen interior design
               </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEleven" aria-expanded="false" aria-controls="flush-collapseEleven">
               11. Are the budget-friendly modular kitchen options available?
              </button>
            </h2>
            <div id="flush-collapseEleven" className="accordion-collapse collapse" >
              <div className="accordion-body">Yes, there are modular kitchen options available that suit a tight budget without compromising on functionality or style. By opting for basic layouts such as straight or L-shaped kitchens, you can reduce material usage and costs. 
                Choosing economical materials like laminate or PVC for cabinets and shutters is a budget-friendly option while still ensuring durability. 
                For countertops, materials like compact laminate or granite are both affordable and practical. Limiting the number of customisations and accessories can help keep costs under control, while standardised storage solutions can still offer great organisation.
                Additionally, opting for local brands for hardware and appliances can further bring down expenses. With careful planning and smart choices, you can create a modular kitchen that’s stylish, functional, and budget-friendly.
               </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwelve" aria-expanded="false" aria-controls="flush-collapseTwelve">
               12. How much maintenance does a modular kitchen require to stay in top condition?
              </button>
            </h2>
            <div id="flush-collapseTwelve" className="accordion-collapse collapse" >
              <div className="accordion-body">Maintaining a modular kitchen is simple, but regular care ensures its longevity:
                <ul><br/>
                  <li><b>Daily Cleaning:             </b> Use mild soapy water for laminates and acrylic finishes. Avoid harsh chemicals.</li>
                  <li><b>Prevent Water Damage:       </b> Wipe up spills quickly, especially near sinks and dishwashers.</li>
                  <li><b>Lubricate Hinges and Tracks:</b> Check and oil moving parts periodically for smooth operation.</li>
                  <li><b>Deep Clean Appliances:      </b> Clean hobs, chimneys, and built-in ovens regularly to prevent grease build-up</li>
                  <li><b>Avoid Overloading Cabinets: </b> This helps prevent wear and tear on hinges.</li>
                </ul><br/>
                By following these steps, your kitchen design will remain both functional and visually appealing for years.
               </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThirteen" aria-expanded="false" aria-controls="flush-collapseThirteen">
                13. What   are the best cleaning practises practises to maintain modular kitchen surfaces?
              </button>
            </h2>
            <div id="flush-collapseThirteen" className="accordion-collapse collapse" >
              <div className="accordion-body"> Cleaning and maintaining surfaces in your modular kitchen ensures both hygiene and durability. Here’s a quick guide:
                <ul><br/>
                  <li><b>Laminates and Acrylic Finishes:</b> Wipe with a damp cloth and mild detergent. Avoid abrasive scrubbers.</li>
                  <li><b>Veneer and Wood Finishes:      </b> Use a soft cloth with a gentle wood cleaner or polish to maintain the texture</li>
                  <li><b>Granite or Quartz Countertops: </b> Clean with soapy water or a pH-balanced cleaner to prevent stains.</li>
                  <li><b>Glass Surfaces:                </b> Use a glass cleaner for streak-free results.</li>
                  <li><b>Stainless Steel:               </b> Wipe with a damp cloth or specialised cleaner to remove fingerprints and smudges.</li>
                </ul><br/>
                Regular cleaning will keep your modular kitchen interiors looking as good as new!
               </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFourteen" aria-expanded="false" aria-controls="flush-collapseFourteen">
                14. What kind of guarantees or quality checks are carried out during installation?
              </button>
            </h2>
            <div id="flush-collapseFourteen" className="accordion-collapse collapse" >
              <div className="accordion-body">  To ensure your kitchen design is flawless, several quality checks are carried out during installation:
                <ul><br/>
                  <li>Cabinets and drawers are aligned perfectly.</li>
                  <li>Hinges, handles, and fittings are securely fixed and tested.</li>
                  <li>Pull-outs, soft-close mechanisms, and appliances are checked for smooth functionality.</li>
                  <li>All edges, laminates, and finishes are inspected for a seamless appearance.</li>
                </ul><br/>
             Most reputable providers, including Artical Art, also offer a 10-year structural warranty, giving you peace of mind that your kitchen is built to last.               </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFifteen" aria-expanded="false" aria-controls="flush-collapseFifteen">
                15. How long does it take to design and install a mosular kitchen from start to finish?
              </button>
            </h2>
            <div id="flush-collapseFifteen" className="accordion-collapse collapse" >
              <div className="accordion-body"> The entire process of designing and installing a modular kitchen usually takes around 4–6 weeks, broken down into three stages:
                <ul><br/>
                  <li><b>Design Consultation (1–2 weeks):</b> Discussing layouts, materials, and customisation options with our experts.</li>
                  <li><b>Manufacturing (2–3 weeks):      </b> Building the pre-fabricated modules with precision in our factory.</li>
                  <li><b>Installation (1 week):          </b> Assembling the modules on-site with minimal disruption to your daily routine.</li>
                </ul><br/>
                Our streamlined process ensures you can enjoy your new modular kitchen in no time.
             </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSixteen" aria-expanded="false" aria-controls="flush-collapseSixteen">
                16.What is the process for designing and installing a modular kitchen ?
              </button>
            </h2>
            <div id="flush-collapseSixteen" className="accordion-collapse collapse" >
              <div className="accordion-body"> Designing and installing a modular kitchen involves a well-structured process:
                <ul><br/>
                  <li><b>Consultation: </b>Meet with a designer to discuss your space, requirements, and budget. Share your vision for the kitchen interior design.</li>
                  <li><b>Site Measurement: </b> Accurate measurements are taken to ensure all modules fit perfectly.</li>
                  <li><b>Design Finalisation: </b>Select your preferred kitchen layout, materials, finishes, and accessories. This stage ensures your kitchen reflects your personal style.</li>
                  <li><b>Manufacturing: </b>The modular units are fabricated off-site in a factory, ensuring high precision and quality.</li>
                  <li><b>Installation: </b>The pre-made modules are assembled in your home, making the process quick and hassle-free.</li>
                  <li><b>Final Checks: </b>The installation team ensures that all cabinets, drawers, and appliances are perfectly aligned and functioning smoothly.</li>
                </ul><br/>
                Our streamlined process ensures you can enjoy your new modular kitchen in no time.
             </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeventeen" aria-expanded="false" aria-controls="flush-collapseSeventeen">
                17.What makes Artical Art the right choice for my modular kitchen needs ?
              </button>
            </h2>
            <div id="flush-collapseSeventeen" className="accordion-collapse collapse" >
              <div className="accordion-body"> At Artical Art, we pride ourselves on delivering modular kitchens that combine style, functionality, and quality. Here’s why you should choose us:
                <ul><br/>
                  <li><b>Customised Designs: </b>Tailored to your unique space and preferences.</li>
                  <li><b>Premium Materials: </b> We use durable options like marine plywood and HDHMR to ensure longevity. </li>
                  <li><b>Expert Designers: </b> Our team specialises in creating kitchens that maximise space and functionality.</li>
                  <li><b>10-Year Warranty: </b>For added peace of mind and long-term reliability.</li>
                  <li><b>End-to-End Service: </b>From consultation to installation, we handle everything to make your experience seamless.</li>
                </ul><br/>
                Our streamlined process ensures you can enjoy your new modular kitchen in no time.
             </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEighteen" aria-expanded="false" aria-controls="flush-collapseEighteen">
                18. Can i get a free cost estimate or consultation for my nodular kitchen design?  ?
              </button>
            </h2>
            <div id="flush-collapseEighteen" className="accordion-collapse collapse" >
              <div className="accordion-body"> 
                Booking a consultation with Artical Art is incredibly easy! Head to our website and schedule a free design consultation with our experts. 
                During the session, share your preferences—whether you want an L-shaped modular kitchen design, an elegant island layout, or a compact straight kitchen.
                Our team will create a tailored plan based on your budget, space, and style. We’re here to guide you every step of the way, from kitchen design ideas to final installation, making your dream kitchen a reality.

             </div>
            </div>
          </div>
           <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse19" aria-expanded="false" aria-controls="flush-collapse19">
                19. How does Artical Art ensure that my modular kitchen is tailored to my specific needs ?
              </button>
            </h2>
            <div id="flush-collapse19" className="accordion-collapse collapse" >
              <div className="accordion-body"> At Artical Art, we prioritize personalization to deliver a modular kitchen that perfectly aligns with your unique requirements. Here’s how we ensure it:
                <ul><br/>
                  <li><b>Understanding Your Needs: </b>e begin by discussing your lifestyle, preferences, and functional requirements to create a design that reflects your vision.</li>
                  <li><b>Custom Fit for Any Space: </b> Whether it’s a compact apartment or a spacious villa, our designs adapt seamlessly, even optimizing awkward corners and irregular layouts. </li>
                  <li><b>Diverse Choices: </b>  We offer a vast selection of materials, finishes, and accessories to match your style preferences while maintaining durability.</li>
                  <li><b>Innovative Storage Solutions: </b> Incorporating features like pull-out cabinets, corner units, and multi-functional elements ensures maximum utility and organization.</li>
                  <li><b>Collaborative Design Process: </b> Our expert designers work closely with you, combining aesthetics with functionality to create a kitchen that’s both beautiful and practical.</li>
                </ul><br/>
                With Artical Art, you get a modular kitchen that is uniquely yours, tailored to fit your space, lifestyle, and taste perfectly.
             </div>
            </div>
          </div>
        </div>
    </div>

      

      {/* FAQ's for kitchen  end*/}
           <p className='disclaimer container'>Kindly note: Product images are representative and may not reflect exact offerings. Please contact us to create a design customized for you.</p>

    </div>
  );
};

export default ModularKitchen;
