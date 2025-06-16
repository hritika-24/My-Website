import React from 'react'
import "./VisitOurManufacturingPlant.css"
import FactoryImg from './assets/Factory slide images/Factory_slider_img (1).jpeg'
import FactoryImg1 from './assets/Factory slide images/Factory_slider_img (10).jpeg'
import FactoryImg2 from './assets/Factory slide images/Factory_slider_img (11).jpeg'
import FactoryImg3 from './assets/Factory slide images/Factory_slider_img (12).jpeg'
import FactoryImg4 from './assets/Factory slide images/Factory_slider_img (13).jpeg'
import FactoryImg5 from './assets/Factory slide images/Factory_slider_img (14).jpeg'
import FactoryImg6 from './assets/Factory slide images/Factory_slider_img (2).jpeg'
import FactoryImg7 from './assets/Factory slide images/Factory_slider_img (19).jpeg'
import FactoryImg8 from './assets/Factory slide images/Factory_slider_img (17).jpeg'
import FactoryImg9 from './assets/Factory slide images/Factory_slider_img (34).jpeg'

import Factoryvideo1 from './assets/Factory video images/Factory_slider_video (1).mp4'
import Factoryvideo2 from './assets/Factory video images/Factory_slider_video (2).mp4'
import Factoryvideo3 from './assets/Factory video images/Factory_slider_video (3).mp4'
import Factoryvideo4 from './assets/Factory video images/Factory_slider_video (4).mp4'
import Factoryvideo5 from './assets/Factory video images/Factory_slider_video (5).mp4'
import Factoryvideo6 from './assets/Factory video images/Factory_slider_video (6).mp4'
import Factoryvideo7 from './assets/Factory video images/Factory_slider_video (7).mp4'
import Factoryvideo8 from './assets/Factory video images/Factory_slider_video (18).mp4'
import Factoryvideo9 from './assets/Factory video images/Factory_slider_video (16).mp4'
import Factoryvideo10 from './assets/Factory video images/Factory_slider_video (12).mp4'


const VisitOurManufacturingPlant = () => {
  return (
    <div className='VisitOurManufacturingPlant'>
        <h2>Visit Our Manufacturing Factory</h2>
        <div className='factory-details'>
            <div className='image-and-details'>
              <div className='images-div'>
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                      <img src={FactoryImg} alt="..."/>
                    </div>
                    <div class="carousel-item"  data-bs-interval="2000">
                      <img src={FactoryImg1}  alt="..."/>
                    </div>
                    <div class="carousel-item">
                      <img src={FactoryImg2}  alt="..."/>
                    </div>
                    <div class="carousel-item">
                      <img src={FactoryImg3}  alt="..."/>
                    </div>
                    <div class="carousel-item">
                      <img src={FactoryImg4}  alt="..."/>
                    </div>
                    <div class="carousel-item">
                      <img src={FactoryImg5}  alt="..."/>
                    </div>
                    <div class="carousel-item">
                      <img src={FactoryImg6}  alt="..."/>
                    </div>
                    <div class="carousel-item">
                      <img src={FactoryImg7}  alt="..."/>
                    </div>
                    <div class="carousel-item">
                      <img src={FactoryImg8}  alt="..."/>
                    </div>
                    <div class="carousel-item">
                      <img src={FactoryImg9}  alt="..."/>
                    </div>
                 </div>
                 <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                
                 </div>
                 </div>
                 


            <div className='details-div'>
              <p className='address'>
                Plot no. a/57 (a),midc phase-I,
                khambalpada road dombivli (e),Thane
              </p>
              <p className='visit'>
                Visit us to experience
              </p>
              <ul>
                <li>11 Kitchen Concepts</li>
                <li>7 Living Rooms</li>
                <li>7 Wardrobe Styles</li>
                <li>Walk-in Wardrobes and more..</li>
              </ul>

          </div>
                
            </div>


            
            <div className='video-and-map'>

              <div className='map-div'>
                < a href='https://www.google.com/maps/place/JH+Wood+Firms+Pvt.Ltd./@19.218265,73.115728,14z/data=!4m6!3m5!1s0x3be795bfa0094c45:0x14ffaa78dc67cf91!8m2!3d19.2182651!4d73.1157284!16s%2Fg%2F11bw5m7wbv?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D'className='btn'>Get Direction</a>
                
                    
              </div>
              <div className='videos-div'>
                  <div id="carouselExampleInterval2" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                        <video autoPlay muted loop >
                          <source src={Factoryvideo1} type='video/mp4'></source>
                          your browser does not support the video tag

                        </video>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                        <video autoPlay muted loop >
                          <source src={Factoryvideo2} type='video/mp4'></source>
                          your browser does not support the video tag

                        </video>
                          
                        </div>
                        <div class="carousel-item">
                        <video autoPlay muted loop >
                          <source src={Factoryvideo3} type='video/mp4'></source>
                          your browser does not support the video tag

                        </video>
                        </div>
                        <div class="carousel-item">
                        <video autoPlay muted loop >
                          <source src={Factoryvideo4} type='video/mp4'></source>
                          your browser does not support the video tag

                        </video>
                        </div>
                        <div class="carousel-item">
                        <video autoPlay muted loop >
                          <source src={Factoryvideo5} type='video/mp4'></source>
                          your browser does not support the video tag

                        </video>
                        </div>
                        <div class="carousel-item">
                        <video autoPlay muted loop >
                          <source src={Factoryvideo6} type='video/mp4'></source>
                          your browser does not support the video tag

                        </video>
                        </div>
                        <div class="carousel-item">
                        <video autoPlay muted loop >
                          <source src={Factoryvideo7} type='video/mp4'></source>
                          your browser does not support the video tag

                        </video>
                        </div>
                        <div class="carousel-item">
                        <video autoPlay muted loop >
                          <source src={Factoryvideo8} type='video/mp4'></source>
                          your browser does not support the video tag

                        </video>
                        </div>
                        <div class="carousel-item">
                        <video autoPlay muted loop >
                          <source src={Factoryvideo9} type='video/mp4'></source>
                          your browser does not support the video tag

                        </video>
                        </div>
                        <div class="carousel-item">
                        <video autoPlay muted loop >
                          <source src={Factoryvideo10} type='video/mp4'></source>
                          your browser does not support the video tag

                        </video>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval2" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval2" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>

              </div>
            </div>
        </div>
      </div>
        
    
  )
}

export default VisitOurManufacturingPlant