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

const Wardrobe = () => {
    
// *****************************************
const [isExpanded1, setIsExpanded1] = useState(false);

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
                    <p className='img-details-and-btn'> Sliding Door Wardrobe With An Attached Dresser Unit<Link className='btn form-btn' to= "/form">Get a Quote</Link></p>
        
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


    </div>
     
    </div>
  )
}
export default Wardrobe