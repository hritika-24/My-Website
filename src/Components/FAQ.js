import React from 'react'
import './FAQ.css';
import { Link } from 'react-router-dom';

const FAQ = () => {
  return (
    <div id='faq'>
    <div className='faq container'>
        <h2 className='faq-heading'>Frequently asked questions</h2>
        {/* <Link to="/contactForm" classNameName="btn btn-warning">Enquiry Form</Link> */}
        <div className="container accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                How can I Contact with Artical Art ?
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" >
              <div className="accordion-body">You can Contact with us through Social Media  like Instagram, Facebook, whatsapp etc. , you can directly call us or visit us at the location given below   </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              What should I consider when selecting an Interior Designer ?
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" >
              <div className="accordion-body">
                When choosing an interior designer, keep these key factors in mind:
                <ul>
                    <li>Portfolio: Review past work to ensure their style matches yours.</li>
                    <li>Testimonials: Seek feedback from previous clients to gauge satisfaction.</li>
                    <li>Experience: Look for relevant project experience</li>
                    <li>Communicaton: Choose someone who understands your vision and communicates clearly. </li>
                    <li>Budget and Schedules: Confirm pricing, transparency and delivery timelines to align with your needs</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              What will be the expense for Interior Designing ? 
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" >
              <div className="accordion-body">Design your dream home or offices without extra expences. the Pricing will be adequite and according to your need</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
              How long does it take to complete an Interior Design Project  ?
              </button>
            </h2>
            <div id="flush-collapseFour" className="accordion-collapse collapse" >
              <div className="accordion-body">The timeline for completing an interior design project varies depending on the designer's experience and projec complecity.We prioritize timely delivery so you can move into your dream home as soon as possible!  Check out our Terms and Conditions to know more about our delivery promise.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                 How do I communicate  my design preferences to the Interior Designer ?
              </button>
            </h2>
            <div id="flush-collapseFive" className="accordion-collapse collapse" >
              <div className="accordion-body">Clear communication is key when working with an interior designer. Start by creating a mood board with images and styles you like, and discuss your functional neeeds and desired look and feel.Be open to your designer's suggestions and expertise, as they can translate your vision into practical solutions. </div>
            </div>
          </div>
          {/* <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
              How many days are required to get the product  delivered?
              </button>
            </h2>
            <div id="flush-collapseSix" className="accordion-collapse collapse" >
              <div className="accordion-body">We delivered your product within 7 to 10  days.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                Delivery charges are included in the final price or not ?
              </button>
            </h2>
            <div id="flush-collapseSeven" className="accordion-collapse collapse" >
              <div className="accordion-body">Yes </div>
            </div>
          </div> */}
        </div>
    </div>
    </div>
  )
}

export default FAQ