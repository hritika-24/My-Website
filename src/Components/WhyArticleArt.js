import React from 'react'
import { Link } from 'react-router-dom'
import "./WhyArticleArt.css"

import waa1 from "./assets/WhyArticalArt/WhyDesignCafe (1).png"
import waa2 from "./assets/WhyArticalArt/WhyDesignCafe (1).webp"
import waa3 from "./assets/WhyArticalArt/WhyDesignCafe (2).jpeg"
import waa4 from "./assets/WhyArticalArt/WhyDesignCafe (2).webp"
import waa5 from "./assets/WhyArticalArt/WhyDesignCafe (3).webp"

const WhyArticleArt = () => {
  return (
    <div className='WhyArticleArt'>
        <h2>Why ArticleArt</h2>
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Personalised for You
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div className='img-div'>
                            <img src={waa5} />
                        </div>
                        <div className='details'>
                            <p>Tell our design experts what makes you tick, and we deliver to your needs.</p>
                            <p>Have a minimalist sensibility? Or a child who loves Virat Kohli? Our designers bring your taste to life.</p>
                            <p>Feeling a bit cramped? <b>Create up to 20% more space</b> at a fraction of the cost of a larger home.</p>
                            <Link to="/form" className='btn '>Personalize Your Design</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Quality Guaranteed
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div className='img-div'>
                            <img src={waa1} />
                        </div>
                        <div className='details'>
                            <p>Quality is paramount at ArticleArt.</p>
                            <p>We use Sainik, GreenPlywood,etc which is <b>naturally termite and borer proof.</b> </p>
                            <p>We use High Density Fibreboard (HDF) <b>for dry areas</b> and Boiling Water Proof (BWP) plywood and High Density and High Moisture Resistant (HDHMR) plywood <b>for wet areas</b>. All are ISI certified.</p>
                            <p>Plywood service warranty 10 year, Electric warrranty of other companies are provided according to their warranty</p>
                            <Link to="/form" className='btn '>Personalize Your Design</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                        Project Management from A to Z
                    </button>
                </h2>
                <div id="collapsesix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div className='img-div'>
                            <img src={waa3} />
                        </div>
                        <div className='details'>
                            <p>Professional project managers answer your queries and keep the project on time.</p>
                            <p>Trained carpenters and site staff ensure that your floors are protected during installation and that standard operating procedures on a <b>21 point checklist</b> are followed.</p>
                            <Link to="/form" className='btn '>Personalize Your Design</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Easy EMI options
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                         <div className='img-div'>
                            <img src={waa4} />
                        </div>
                        <div className='details'>
                            <p className='coming soon'><b>Coming Soon</b></p>
                            {/* <p></p>
                            <p></p> */}
                            <Link to="/form" className='btn '>Personalize Your Design</Link>                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        On-time Delivery
                    </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                         <div className='img-div'>
                            <img src={waa2} />
                        </div>
                        <div className='details'>
                            <p>With more than <b>75% of materials factory-made</b> on state-of-the-art machines, we ensure a superior finish, while keeping to timelines.</p>
                            <p>We mockup products at our factory for a full quality check before carefully shipping it to you without scratches and damages in <b>packaging made which is made safe.</b></p>
                            <p>Our satisfaction lies in living up to your expectations, <b>while delivering on time.</b></p>
                            <Link to="/form" className='btn '>Personalize Your Design</Link>                       
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Major Cities Reach
                    </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                         <div className='img-div'>
                            <img src={waa2} />
                        </div>
                        <div className='details'>
                            <p>Major Cities Avaialbility</p>
                            <p>Cities like <b>Delhi, Mumbai, Chennai, Ahmedabad</b> and many more</p>
                            {/* <p></p> */}
                            <Link to="/form" className='btn '>Personalize Your Design</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyArticleArt