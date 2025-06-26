import React, { useState } from 'react'
import './CommonDesignGallery.css'

import bedroomwithspacesaving1 from '../../assets/designgallery/space saving designs/bedroom_with_space_saving_furnituredesign/bedroom_with_space_saving_furnituredesign (10).jpg'
import bedroomwithspacesaving2 from '../../assets/designgallery/space saving designs/bedroom_with_space_saving_furnituredesign/bedroom_with_space_saving_furnituredesign (8).jpg'
import bedroomwithspacesaving3 from '../../assets/designgallery/space saving designs/bedroom_with_space_saving_furnituredesign/bedroom_with_space_saving_furnituredesign (7).jpg'
import bedroomwithspacesaving4 from '../../assets/designgallery/space saving designs/bedroom_with_space_saving_furnituredesign/bedroom_with_space_saving_furnituredesign (5).jpg'
import bedroomwithspacesaving5 from '../../assets/designgallery/space saving designs/bedroom_with_space_saving_furnituredesign/bedroom_with_space_saving_furnituredesign (4).jpg'
import bedroomwithspacesaving6 from '../../assets/designgallery/space saving designs/bedroom_with_space_saving_furnituredesign/bedroom_with_space_saving_furnituredesign (3).jpg'


import livingroomwithlifttoptvunit1 from '../../assets/designgallery/space saving designs/livingroom_with_lifttop_tvunit/livingroom_with_lifttop_tvunit (1).jpg'
import livingroomwithlifttoptvunit2 from '../../assets/designgallery/space saving designs/livingroom_with_lifttop_tvunit/livingroom_with_lifttop_tvunit (7).jpg'
import livingroomwithlifttoptvunit3 from '../../assets/designgallery/space saving designs/livingroom_with_lifttop_tvunit/livingroom_with_lifttop_tvunit (3).jpg'
import livingroomwithlifttoptvunit4 from '../../assets/designgallery/space saving designs/livingroom_with_lifttop_tvunit/livingroom_with_lifttop_tvunit (4).jpg'
import livingroomwithlifttoptvunit5 from '../../assets/designgallery/space saving designs/livingroom_with_lifttop_tvunit/livingroom_with_lifttop_tvunit (5).jpg'
import livingroomwithlifttoptvunit6 from '../../assets/designgallery/space saving designs/livingroom_with_lifttop_tvunit/livingroom_with_lifttop_tvunit (6).jpg'
import { Link } from 'react-router-dom'

import balconywithlaundaryspace1 from '../../assets/designgallery/space saving designs/balcony_with_laundryspace/balcony_with_laundaryspace (8).jpg'
import balconywithlaundaryspace2 from '../../assets/designgallery/space saving designs/balcony_with_laundryspace/balcony_with_laundaryspace (3).jpg'
import balconywithlaundaryspace3 from '../../assets/designgallery/space saving designs/balcony_with_laundryspace/balcony_with_laundaryspace (1).jpg'
import balconywithlaundaryspace4 from '../../assets/designgallery/space saving designs/balcony_with_laundryspace/balcony_with_laundaryspace (7).jpg'
import balconywithlaundaryspace5 from '../../assets/designgallery/space saving designs/balcony_with_laundryspace/balcony_with_laundaryspace (5).jpg'
import balconywithlaundaryspace6 from '../../assets/designgallery/space saving designs/balcony_with_laundryspace/balcony_with_laundaryspace (1).webp'


import sidecabinetbuiltinseating1 from '../../assets/designgallery/space saving designs/side_cabinet_with_builtin_seating/side_cabinet_with_buit_in_seating (10).jpg'
import sidecabinetbuiltinseating2 from '../../assets/designgallery/space saving designs/side_cabinet_with_builtin_seating/side_cabinet_with_buit_in_seating (12).jpg'
import sidecabinetbuiltinseating3 from '../../assets/designgallery/space saving designs/side_cabinet_with_builtin_seating/side_cabinet_with_buit_in_seating (3).jpg'
import sidecabinetbuiltinseating4 from '../../assets/designgallery/space saving designs/side_cabinet_with_builtin_seating/side_cabinet_with_buit_in_seating (4).jpg'
import sidecabinetbuiltinseating5 from '../../assets/designgallery/space saving designs/side_cabinet_with_builtin_seating/side_cabinet_with_buit_in_seating (5).jpg'
import sidecabinetbuiltinseating6 from '../../assets/designgallery/space saving designs/side_cabinet_with_builtin_seating/side_cabinet_with_buit_in_seating (6).jpg'


import kitchenwithfoldablediningtable1 from '../../assets/designgallery/space saving designs/kitchen_with_foldable_diningtable/kitchen_with_foldable_diningtable (1).jpg'
import kitchenwithfoldablediningtable2 from '../../assets/designgallery/space saving designs/kitchen_with_foldable_diningtable/kitchen_with_foldable_diningtable (2).jpg'
import kitchenwithfoldablediningtable3 from '../../assets/designgallery/space saving designs/kitchen_with_foldable_diningtable/kitchen_with_foldable_diningtable (3).jpg'
import kitchenwithfoldablediningtable4 from '../../assets/designgallery/space saving designs/kitchen_with_foldable_diningtable/kitchen_with_foldable_diningtable (4).jpg'
import kitchenwithfoldablediningtable5 from '../../assets/designgallery/space saving designs/kitchen_with_foldable_diningtable/kitchen_with_foldable_diningtable (3).avif'
import kitchenwithfoldablediningtable6 from '../../assets/designgallery/space saving designs/kitchen_with_foldable_diningtable/kitchen_with_foldable_diningtable (2).avif'

import { BiSolidOffer } from 'react-icons/bi'
import { MdOutlineReplay10, MdOutlineThumbUpAlt } from 'react-icons/md'
const SpaceSaving = () => {
 // **************************************************
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
  return (
    <div className='space_saving design-gallery '>
      <div className='space_saving container'>
          <h3>Space Saving Designs</h3>
          <p className='para'>
            Check out popular Space Saving Designs amongst our happy customers.
          </p>
      </div>

    {/* *************************************************** */}
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
                      <img src={bedroomwithspacesaving1} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                      <img src={bedroomwithspacesaving2} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                      <img src={bedroomwithspacesaving3} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                      <img src={bedroomwithspacesaving4} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                      <img src={bedroomwithspacesaving5} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                      <img src={bedroomwithspacesaving6} class="d-block w-100" alt="..."/>
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
                  <p className='img-details-and-btn'>A Bedroom With Space Saving Furniture Design <Link className='btn form-btn' to= "/form">Get a Quote</Link></p>
      
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
                         Here’s a perfect bedroom for a studio apartment.
                         A murphy bed built with storage along the wall and a study unit makes optimum use of space.
                      </p>
                      <p className='extra-info-features'>Special Features</p>
                      <ul className='extra-info-list'>
                          <li>A muphy bed that folds into the wall when not in use.</li>
                          <li>Floor to ceiling storage with overhead and base cabinets</li>
                          <li>Open shelve storage for books and knick-knacks.</li>
                          <li>A pull-out bookshelf to keep everything dust free.</li>
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



        {/*slider-2  */}

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
                    <img src={livingroomwithlifttoptvunit1} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={livingroomwithlifttoptvunit2} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={livingroomwithlifttoptvunit3} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={livingroomwithlifttoptvunit4} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={livingroomwithlifttoptvunit5} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={livingroomwithlifttoptvunit6} class="d-block w-100" alt="..."/>
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
                <p className='img-details-and-btn'>A Compact Living Room With Lift Top TV Unit <Link className='btn form-btn' to= "/form">Get a Quote</Link></p>
    
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
                      This compact living room is designed in a neutral colour palette for an airy spacious vibe.
                      Perfect for compact homes that require additional space, this living room features a modular 
                      space-saving solution that can be easily concealed to give a minimalistic vibe to the space.
                    </p>
                    <p className='extra-info-features'>Special Features</p>
                    <ul className='extra-info-list'>
                        <li>A lift-top TV unit with hidden shelf storage space helps keep the look of the living room neat and clutter-free.</li>
                        <li>Push-to-open drawers on the top and bottom of the TV unit.</li>
                        <li>An open box shelf above the TV unit for displaying books and decor items</li>
                        <li>A glass top coffee table with a beige ottoman for leg support.</li>
                        <li>An L-shaped seating space with decorative pillows</li>
                        <li>A gold accent side table with marble top for books and miscellaneous items</li>
                        <li>Wall sconces, contemporary lighting and a geometric area rug complete the look.</li>
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

        {/*slider-2 end */}
        <div style={{margin:'80px'}} ></div>

        


    </div>

    {/* **************************************************** */}
     {/*whychooseourkitchen*/}
                <div className='whyourkitchen'>
                  <h3>Why Choose Our Space Saving Designs</h3>
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
    {/* *************************************************** */}
    <div className='shapes container'>
      {/* slider-3 */}
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
                      <img src={balconywithlaundaryspace1} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                      <img src={balconywithlaundaryspace2} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                      <img src={balconywithlaundaryspace3} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                      <img src={balconywithlaundaryspace4} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                      <img src={balconywithlaundaryspace5} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                      <img src={balconywithlaundaryspace6} class="d-block w-100" alt="..."/>
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
              <p className='img-details-and-btn'>A Spacious Balcony With Dedicated Laundry Space<Link className='btn form-btn' to= "/form">Get a Quote</Link></p>
  
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
                    This balcony comes with a grey finish laundry storage solution featuring designated spots for keeping all your wash essentials.
                     This design is perfect for larger homes that have a load of laundry going in and out on a daily.
                  </p>
                  <p className='extra-info-features'>Special Features</p>
                  <ul className='extra-info-list'>
                     <li>A laundry area created in the balcony with a Moroccan tiled backsplash and dedicated space for a washing machine.</li>
                     <li>The main storage unit features overhead cabinets for keeping supplies and open shelves for storing daily laundry essentials.</li>
                     <li>Lower section includes a drawer for storing washed folded clothes and shutter units for miscellaneous items</li>
                     <li>A tall janitorial unit for storing cleaning supplies helps in utilising the vertical space in the corne</li>
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
      
      {/*slider-3 end */}
      <div style={{margin:'80px'}} ></div>

      {/* slider-4 */}
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
                      <img src={sidecabinetbuiltinseating1} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                      <img src={sidecabinetbuiltinseating2} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                      <img src={sidecabinetbuiltinseating3} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                      <img src={sidecabinetbuiltinseating4} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                      <img src={sidecabinetbuiltinseating5} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                      <img src={sidecabinetbuiltinseating6} class="d-block w-100" alt="..."/>
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
              <p className='img-details-and-btn'>A Side Cabinet With In-Built Seating<Link className='btn form-btn' to= "/form">Get a Quote</Link></p>
  
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
                    This side cabinet is designed with a sequence of drawers for deep storage. 
                     It comes with ottoman seating as part of the space saving design.
                  </p>
                  <p className='extra-info-features'>Special Features</p>
                  <ul className='extra-info-list'>
                     <li>A side cabinet with a sequence of six drawers</li>
                     <li>Ottoman seating with drawer storage as a space saving feature</li>
                     <li>A clean top to display knick-knacks</li>
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

      {/* slider-4 end */}
      <div style={{margin:'80px'}} ></div>


      {/* slider-5 */}
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
                      <img src={kitchenwithfoldablediningtable1} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                      <img src={kitchenwithfoldablediningtable2} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                      <img src={kitchenwithfoldablediningtable3} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                      <img src={kitchenwithfoldablediningtable4} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                      <img src={kitchenwithfoldablediningtable5} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                      <img src={kitchenwithfoldablediningtable6} class="d-block w-100" alt="..."/>
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
              <p className='img-details-and-btn'>An L-shaped Kitchen With A Foldable Dining Table<Link className='btn form-btn' to= "/form">Get a Quote</Link></p>
  
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
                   A spacious L-shaped kitchen designed for large families and couples with kids in teak and grey finish.
                   It features a smart dining space that makes optimum use of available space.
                  </p>
                  <p className='extra-info-features'>Special Features</p>
                  <ul className='extra-info-list'>
                    <li>An L-shaped kitchen with granite countertop, grey base cabinet and teak wood overhead cabinets</li>
                    <li>The base unit features wire drawers, oil pull-out, shutter units and handle drawers for kitchen essentials.</li>
                    <li>The sink unit comprises four floating shelves on the side to display crockery and indoor plants.</li>
                    <li>The kitchen and living room is divided into two distinct areas with a duco partition</li>
                    <li>A foldable dining table is wall-mounted on the wall across the base unit, and can seat two people at a time.</li>
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

      {/* slider-5 end */}
      <div style={{margin:'80px'}} ></div>













    </div> 
 {/* **************************************************** */}
     {/*whychooseourkitchen*/}
                <div className='whyourkitchen'>
                  <h3>Why Choose Our Space Saving Designs</h3>
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
    {/* *************************************************** */}

           <p className='disclaimer container'>Kindly note: Product images are representative and may not reflect exact offerings. Please contact us to create a design customized for you.</p>




        
    </div>
  )
}

export default SpaceSaving