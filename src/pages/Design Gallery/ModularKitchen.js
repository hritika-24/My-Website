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
  const [isExpanded1, setIsExpanded1] = useState(false);

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
          {/* slider 1*/}
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
    </div>
  );
};

export default ModularKitchen;
