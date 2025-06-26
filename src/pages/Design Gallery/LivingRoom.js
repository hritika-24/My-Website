import React, { useState } from 'react'
import './CommonDesignGallery.css';
import { Link } from 'react-router-dom';

import livingroomwithtvunit1 from '../../assets/designgallery/LivingRoom/livingroom_with_tvunit/livingroom_with_tvunitwithstorage (1).jpg'
import livingroomwithtvunit2 from '../../assets/designgallery/LivingRoom/livingroom_with_tvunit/livingroom_with_tvunitwithstorage (2).jpg'
import livingroomwithtvunit3 from '../../assets/designgallery/LivingRoom/livingroom_with_tvunit/livingroom_with_tvunitwithstorage (3).jpg'
import livingroomwithtvunit4 from '../../assets/designgallery/LivingRoom/livingroom_with_tvunit/livingroom_with_tvunitwithstorage (4).jpg'
import livingroomwithtvunit5 from '../../assets/designgallery/LivingRoom/livingroom_with_tvunit/livingroom_with_tvunitwithstorage (5).jpg'
import livingroomwithtvunit6 from '../../assets/designgallery/LivingRoom/livingroom_with_tvunit/livingroom_with_tvunitwithstorage (6).jpg'


import wfhlivingroom1 from '../../assets/designgallery/LivingRoom/wfhfriendly_livingroom/wfhfriendlylivingroom (1).jpg'
import wfhlivingroom2 from '../../assets/designgallery/LivingRoom/wfhfriendly_livingroom/wfhfriendlylivingroom (2).jpg'
import wfhlivingroom3 from '../../assets/designgallery/LivingRoom/wfhfriendly_livingroom/wfhfriendlylivingroom (3).jpg'
import wfhlivingroom4 from '../../assets/designgallery/LivingRoom/wfhfriendly_livingroom/wfhfriendlylivingroom (4).jpg'
import wfhlivingroom5 from '../../assets/designgallery/LivingRoom/wfhfriendly_livingroom/wfhfriendlylivingroom (5).jpg'
import wfhlivingroom6 from '../../assets/designgallery/LivingRoom/wfhfriendly_livingroom/wfhfriendlylivingroom (9).jpg'


import industrial1 from '../../assets/designgallery/LivingRoom/industrialstyle_livingroom/industrial_livingroom (1).jpg'
import industrial2 from '../../assets/designgallery/LivingRoom/industrialstyle_livingroom/industrial_livingroom (9).jpg'
import industrial3 from '../../assets/designgallery/LivingRoom/industrialstyle_livingroom/industrial_livingroom (3).jpg'
import industrial4 from '../../assets/designgallery/LivingRoom/industrialstyle_livingroom/industrial_livingroom (4).jpg'
import industrial5 from '../../assets/designgallery/LivingRoom/industrialstyle_livingroom/industrial_livingroom (5).jpg'
import industrial6 from '../../assets/designgallery/LivingRoom/industrialstyle_livingroom/industrial_livingroom (6).jpg'

import smallapartmentliving1 from '../../assets/designgallery/LivingRoom/smallapartments_livingroom/livingroomfor_smallapartments (1).jpg'
import smallapartmentliving2 from '../../assets/designgallery/LivingRoom/smallapartments_livingroom/livingroomfor_smallapartments (10).jpg'
import smallapartmentliving3 from '../../assets/designgallery/LivingRoom/smallapartments_livingroom/livingroomfor_smallapartments (3).jpg'
import smallapartmentliving4 from '../../assets/designgallery/LivingRoom/smallapartments_livingroom/livingroomfor_smallapartments (4).jpg'
import smallapartmentliving5 from '../../assets/designgallery/LivingRoom/smallapartments_livingroom/livingroomfor_smallapartments (5).jpg'
import smallapartmentliving6 from '../../assets/designgallery/LivingRoom/smallapartments_livingroom/livingroomfor_smallapartments (6).jpg'

import livingroomwithpoojaunit1 from '../../assets/designgallery/LivingRoom/livingroomwith_poojaunt/livingroomwith_poojaunit (1).jpg'
import livingroomwithpoojaunit2 from '../../assets/designgallery/LivingRoom/livingroomwith_poojaunt/livingroomwith_poojaunit (7).jpg'
import livingroomwithpoojaunit3 from '../../assets/designgallery/LivingRoom/livingroomwith_poojaunt/livingroomwith_poojaunit (3).jpg'
import livingroomwithpoojaunit4 from '../../assets/designgallery/LivingRoom/livingroomwith_poojaunt/livingroomwith_poojaunit (8).jpg'
import livingroomwithpoojaunit5 from '../../assets/designgallery/LivingRoom/livingroomwith_poojaunt/livingroomwith_poojaunit (5).jpg'
import livingroomwithpoojaunit6 from '../../assets/designgallery/LivingRoom/livingroomwith_poojaunt/livingroomwith_poojaunit (6).jpg'
import { BiSolidOffer } from 'react-icons/bi';
import { MdOutlineReplay10, MdOutlineThumbUpAlt } from 'react-icons/md';

const LivingRoom = () => {
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
  return (
    <div className='living-room design-gallery'>
        <div className='living-room-heading container'>
            <h3>Living Room Designs</h3>
            <p className='para'>
                Explore living room designs with stylish furniture, smart storage, false ceilings, TV units & more.
                 Transform your space — Get inspired & design your dream living room!
            </p>
        </div>
        {/* ***************************************** */}
        <div className='shapes container'>
            {/* slider 1 */}
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
                            <img src={livingroomwithtvunit1} class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src={livingroomwithtvunit2} class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src={livingroomwithtvunit3} class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src={livingroomwithtvunit4} class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src={livingroomwithtvunit5} class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src={livingroomwithtvunit6} class="d-block w-100" alt="..."/>
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
                            <p className='img-details-and-btn'> A Modern Living Room With A TV Unit Designed With Storage<Link className='btn form-btn' to="/form">Get a Quote</Link></p>
                             {/* Show more button */}
                             {!isExpanded1 && (
                                <button 
                                  className='show-more btn mt-2'
                                  onClick={toggleContent1}
                                  aria-expanded={isExpanded1}
                                >
                                 Show More ▼  
                                </button>
                             )}

                             {/* Expanded content */}
                             {isExpanded1 &&(
                                <div className='extra-info mt-3'>
                                    <p className='extra-info-para'>
                                       This living room is designed to utilise space efficiently to give this area a clurtter-free look.
                                       It  comes with sectional sofa upholstered with pockets on the side to store magazines and newspapers.
                                       The room also has a completely-modular TV unit in grey and light wood laminate designed with ample storage.
                                       Cabinets at the boyyom and open shelves on top.
                                    </p>
                                    <p className='extra-info-features'>Special Features</p>
                                    <ul className='extra-info-list'>
                                        <li>A multifunctional compact TV unit that has enough storage shelves and cabinets to maintain a clutter-free look.</li>
                                        <li>A sectional sofa unpholstered in white fabric with side cover pockets to stack reading material </li>
                                        <li>Two marble top coffee tables complement the white and grey colour palette of the room.</li>
                                        <li>A textured wall in white behind the sofa ties the look of this space together</li>
                                        <li>A jali patterned partition in white adds to the aesthetics  of the space and separates the living area from the rest of the home</li>
                                        <li>Warm lightings in the side table lamp and a chandelier accentuate the homely ambience of the room</li>
                                        <li>white and beige curtains complete the look of the room</li>
                                    </ul>

                                 {/* Show less button */}
                                 <button
                                  className='show-less btn  mt-3'
                                  onClick={toggleContent1}
                                  aria-expanded={isExpanded1}
                                  >
                                   Show Less ▲  
                                  </button>
                                </div>
                             )}
                            
            </div>
            {/*slider 1 end  */}
            <div style={{margin:'80px'}}  ></div>
            {/* slider 2 */}
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
                            <img src={ wfhlivingroom1} class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src={wfhlivingroom2} class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src={wfhlivingroom3} class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src={wfhlivingroom4} class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src={wfhlivingroom5} class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src={wfhlivingroom6} class="d-block w-100" alt="..."/>
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
                            <p className='img-details-and-btn'>A WFH Friendly Living Room For Working Professionals <Link className='btn form-btn' to="/form">Get a Quote</Link></p>
                             {/* Show more button */}
                             {!isExpanded2 && (
                                <button 
                                  className='show-more btn mt-2'
                                  onClick={toggleContent2}
                                  aria-expanded={isExpanded2}
                                >
                                 Show More ▼  
                                </button>
                             )}

                             {/* Expanded content */}
                             {isExpanded2 &&(
                                <div className='extra-info mt-3'>
                                    <p className='extra-info-para'>
                                       This contemporary living room boasts a striking combination of whites, blues and greys to create the perfect atmosphere.
                                       It works as a multi-functional room with bookshelves, 
                                       study and work unit alongside a TV unit, perfect for young urban couples and working professionals.

 
                                    </p>
                                    <p className='extra-info-features'>Special Features</p>
                                    <ul className='extra-info-list'>
                                      <li>A contemporary living room with mid-century furnishing.</li>
                                      <li>The seating features a 3-seater sofa, a comfortable accent chair and two-tiered wooden round coffee table in mid-century design.</li>
                                      <li>The seating space hosts a tall storage unit with multiple storage components like the shutter units on top, open shelves in the middle and handleless drawers on the bottom.</li>
                                      <li>The TV unit features a minimalist space-saving solution with a floating box shelf on the side and a quirky open unit that extends into two drawer units on the side.</li>
                                      <li>The TV unit extends into a study/home office unit and features a wall-mounted cabinet in blue for storing documents and work essentials</li>
                                      <li>The study/work unit comprises a desk with a pull-to-open drawers and an EAMES chair with a comfortable backrest.</li>
                                    </ul>

                                 {/* Show less button */}
                                 <button
                                  className='show-less btn  mt-3'
                                  onClick={toggleContent2}
                                  aria-expanded={isExpanded2}
                                  >
                                   Show Less ▲  
                                  </button>
                                </div>
                             )}
                            
            </div>
            {/*slider 2 end  */}
            <div style={{margin:'80px'}}  ></div>

        </div>
        {/*whychooseourkitchen*/}
                    <div className='whyourkitchen'>
                      <h3>Why Choose Our Living Room Designs</h3>
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

        {/*  */}
           <div className='shapes container'>
            {/* slider 3 */}
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
                            <img src={industrial1} class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src={industrial2} class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src={industrial3} class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src={industrial4} class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src={industrial5} class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src={industrial6} class="d-block w-100" alt="..."/>
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
                            <p className='img-details-and-btn'> Industrial Style Living Room Interior Design<Link className='btn form-btn' to="/form">Get a Quote</Link></p>
                             {/* Show more button */}
                             {!isExpanded2 && (
                                <button 
                                  className='show-more btn mt-2'
                                  onClick={toggleContent2}
                                  aria-expanded={isExpanded2}
                                >
                                 Show More ▼  
                                </button>
                             )}

                             {/* Expanded content */}
                             {isExpanded2 &&(
                                <div className='extra-info mt-3'>
                                    <p className='extra-info-para'>
                                       Wood and marble finishes blend together in one industrial style living room.
                                       Wooden flooring and an exposed brick wall behind the sofa add to the interior design style.
                                    </p>
                                    <p className='extra-info-features'>Special Features</p>
                                    <ul className='extra-info-list'>
                                       <li>A large TV unit with marble black panelling that brings in character.</li>
                                       <li>A floor mounted bookshelf with open and closed storage options as part of the TV unit.</li>
                                    </ul>

                                 {/* Show less button */}
                                 <button
                                  className='show-less btn  mt-3'
                                  onClick={toggleContent2}
                                  aria-expanded={isExpanded2}
                                  >
                                   Show Less ▲  
                                  </button>
                                </div>
                             )}
                            
            </div>
            {/*slider 3 end  */}
            <div style={{margin:'80px'}}  ></div>
            {/* slider 4 */}
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
                            <img src={smallapartmentliving1} class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src={smallapartmentliving2} class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src={smallapartmentliving3} class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src={smallapartmentliving4} class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src={smallapartmentliving5} class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src={smallapartmentliving6} class="d-block w-100" alt="..."/>
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
                            <p className='img-details-and-btn'> Modern Style Living Room For Small Apartments<Link className='btn form-btn' to="/form">Get a Quote</Link></p>
                             {/* Show more button */}
                             {!isExpanded2 && (
                                <button 
                                  className='show-more btn mt-2'
                                  onClick={toggleContent2}
                                  aria-expanded={isExpanded2}
                                >
                                 Show More ▼  
                                </button>
                             )}

                             {/* Expanded content */}
                             {isExpanded2 &&(
                                <div className='extra-info mt-3'>
                                    <p className='extra-info-para'>
                                      An all-while living room designed for small apartments. Smartly designed furniture helps with space maximisation.
                                    </p>
                                    <p className='extra-info-features'>Special Features</p>
                                    <ul className='extra-info-list'>
                                      <li>A study unit with drawers on either side and a while marker board for quick notes. </li>
                                      <li>A TV unit with vertical wood panellingand open shelves for display .</li>
                                    </ul>

                                 {/* Show less button */}
                                 <button
                                  className='show-less btn  mt-3'
                                  onClick={toggleContent2}
                                  aria-expanded={isExpanded2}
                                  >
                                   Show Less ▲  
                                  </button>
                                </div>
                             )}
                            
            </div>
            {/*slider 4 end  */}
            <div style={{margin:'80px'}}  ></div>

             {/* slider 5 */}
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
                            <img src={livingroomwithpoojaunit1} class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src={livingroomwithpoojaunit2} class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src={livingroomwithpoojaunit3} class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src={livingroomwithpoojaunit4} class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src={livingroomwithpoojaunit5} class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src={livingroomwithpoojaunit6} class="d-block w-100" alt="..."/>
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
                          <p className='img-details-and-btn'> Modern Style Living Room For Small Apartments<Link className='btn form-btn' to="/form">Get a Quote</Link></p>
                            {/* Show more button */}
                            {!isExpanded2 && (
                              <button 
                                className='show-more btn mt-2'
                                onClick={toggleContent2}
                                aria-expanded={isExpanded2}
                              >
                                Show More ▼  
                              </button>
                            )}

                            {/* Expanded content */}
                            {isExpanded2 &&(
                              <div className='extra-info mt-3'>
                                  <p className='extra-info-para'>
                                    An all-while living room designed for small apartments. Smartly designed furniture helps with space maximisation.
                                  </p>
                                  <p className='extra-info-features'>Special Features</p>
                                  <ul className='extra-info-list'>
                                    <li>A study unit with drawers on either side and a while marker board for quick notes. </li>
                                    <li>A TV unit with vertical wood panellingand open shelves for display .</li> 
                                  </ul>

                                {/* Show less button */}
                                <button
                                className='show-less btn  mt-3'
                                onClick={toggleContent2}
                                aria-expanded={isExpanded2}
                                >
                                  Show Less ▲  
                                </button>
                              </div>
                            )}
                          
           </div>
            {/*slider 5 end  */}
            <div style={{margin:'80px'}}  ></div>




           </div>
        <p className='disclaimer container'>Kindly note: Product images are representative and may not reflect exact offerings. Please contact us to create a design customized for you.</p>
        
    </div>
  )
}

export default LivingRoom