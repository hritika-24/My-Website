import React from 'react'
import "./Founder.css"
import Founder1 from './assets/Founders/WhatsApp Image 2025-06-09 at 4.18.08 PM (1).jpeg'
import Founder2 from './assets/Founders/WhatsApp Image 2025-06-09 at 4.18.08 PM.jpeg'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IoLogoWhatsapp } from 'react-icons/io'
const Founder = () => {
  return (
    <div className='founder container'>
        <div className='images-amd-details'>
            <div className='details'>
        <h2 >Founded By Architects </h2>
                <p><br/>
                    Having studied and worked as architects for 15 years, we founded Artical Art in 2015 to extend the intelligent and beautiful home interior design to a wider range of budgets.<br/><br/>
                    Obsessively quality focused, we do most things in-house – with expert designers, our own factory, and trained carpenters – to ensure flawless execution<br/><br/>
                    We consistently focus on solving customer needs, with a big focus on space optimisation, to deliver up to 20% extra space to your home.<br/><br/>
                    Our key strengths include:<br/><br/>
                </p>
                    <ul>
                        <li>We provide Design for both Commercial and Residential</li>
                        <li> Dedicated customer happiness managers</li>
                        <li> Use of 3D and VR(Coming Soon) for rendering</li>
                        <li>State-of-the-art factory</li>
                        <li>21 point checklist for quality</li>
                        <li>Professional delivery and installation</li>
                      
                    </ul>

            </div>
            <div className='images'>
                <div className='founder_1'>
                   <img src={Founder1} className='found'/> 
                </div>
                <div className='founder_2' style={{float:'right'}}>
                    <img src={Founder2} className='found'/>

                </div>

            </div>
        </div>
    <div className='contactdetails-div'>
        <div className='contactdetails'>
            <a href="https://wa.me/917666325325?text=Enquiry%20for%20Interior%20Designing" target='_blank'><IoLogoWhatsapp className='icon'/>+91-7666325325</a>
            <a href = 'mailto:support@articalart.com'><MdEmail className='icon'/>support@articalart.com</a>
            <a href='tel:+917666325325'><FaPhoneAlt className='icon'/>+91-7666325325</a>
        </div>
    </div>

    </div>
  )
}

export default Founder