import React from 'react'
import logo from "../assets/logo/logo.jpeg"
import { FaLinkedinIn } from 'react-icons/fa'
import { BsPinterest } from 'react-icons/bs'
import { FaFacebookF, FaXTwitter } from 'react-icons/fa6'
import { AiFillInstagram } from 'react-icons/ai'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-section'>
    <div className='Footer'>



      {/* <div className='logo-tandc-common-div'>
        <div className='logo-and-socialLinks'>
          <div className='logo'>
            <img src={logo}/>

          </div>
          <div className='socialLinks'>
            <a href="https://www.facebook.com/profile.php?id=61576896656748" target="_blank"><FaFacebookF/></a>
            <a href='https://www.Linkedin.com/company/107159910/'><FaLinkedinIn /></a>
            <a href='https://www.instagram.com/artical.art/'><AiFillInstagram/></a>
            <a href='https://www.pinterest.com/articalartinterior/'><BsPinterest /></a>
            <a href='https://x.com/Articalart'><FaXTwitter /></a>

          </div>


        </div>
     <div className='t-and-c'>
          <div className='privacy policy'>
            <p>Privacy Policy &nbsp; </p>

          </div>
          <div className='terms-use'>
            <p>Terms of Use  &nbsp;</p>

          </div>
          <div className='terms-conditions'>
            <p>Terms and Conditions  &nbsp;</p>

          </div>
     </div>
      </div> 
      <div className='hr' style={{display:"flex", justifyContent:'center'}}>
        <hr/>
      </div>
      <div className='copyright'>
        Copyright © Artical Art All rights reserved.
      </div>
      <div className='text'>
        <p>
          
At Artical Art, we bring together functionality and aesthetics to provide  customised and efficient designs for both Commercial and Residential spaces. Our designers specialise in home interior designs as well as Commercial décor which help you to create a personalized home or office to suit your lifestyle. From sophisticated living room designs ,Office designs to space-saving and clutter-free interior designs, we are here to help you find the best Residential , Commercial decor and Residential , Commercial  design to match your needs and style. All our products come with up to 10-year warranty along with unwavering support and maintenance services. Explore thousands of inspiring interior designs or get a free estimate – it's all here on Articalart.com, your one stop for complete home  as well as Residential interiors.
        </p>
      </div> */}



    <div className='col_1'>
        <div className='logo'>
          <img src={logo} alt=''/>
        </div>

        <div className='about_articalart'>
           <p>
            At Artical Art, we bring together functionality and aesthetics to provide  customised and efficient designs for both Commercial and Residential spaces.Our designers specialise in home interior designs as well as Commercial décor which help you to create a personalized home or office to suit your lifestyle.
          </p>
        </div>
    </div>
    {/*  */}
  <div className='footer-columns-wrapper' style={{display:'flex',justifyContent:'space-around' ,flexWrap:'wrap'}}>
        <div className='col_2 '>
            <h5>QUICK LINKS</h5>
            <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='#'><li>About us</li></Link>
            <Link to='#'><li>FAQ'S</li></Link>
            <Link to='#'><li>Privacy Policy</li></Link>
            <Link to='#'><li>Terms And Conditions</li></Link>
            <Link to='#'><li>Contact Us</li></Link>
              {/* <li></li> */}
            </ul>
        </div>
        <div className='col_3 col_2'>
            <h5>EXPLORE</h5>
            <ul>
            <Link to='/modularkitchen'><li>Modular Kitchen</li></Link>
            <Link to='/bedroom'><li>Bedrrom Designs</li></Link>
            <Link to='/livingroom'><li>Living Room</li></Link>
            <Link to='/wardrobe'><li>Wardrobe Designs</li></Link>
            <Link to='#'><li>Recent Projects</li></Link>
            <Link to='#'><li>Commercial</li></Link>
            <Link to='#'><li>Residential</li></Link>
              {/* <li></li>
              <li></li> */}
            </ul>
        </div>
        <div className='col_4 col_2'>
            <h5>COMPANY</h5>
            <p>
            Plot No. R-488/ TTC Industrial Area, Rabale MIDC, Navi Mumbai (New Mumbai), India, Maharashtra
            </p>
             <h5>CONNECT WITH US :</h5>
          <div className='social_Links'>
              <a href="https://www.facebook.com/profile.php?id=61576896656748" target="_blank"><FaFacebookF/></a>
              <a href='https://www.Linkedin.com/company/107159910/'><FaLinkedinIn /></a>
              <a href='https://www.instagram.com/artical.art/'><AiFillInstagram/></a>
              <a href='https://www.pinterest.com/articalartinterior/'><BsPinterest /></a>
              <a href='https://x.com/Articalart'><FaXTwitter /></a>
          </div>
        </div>
  </div> 

    </div>
    <div className='hr' style={{display:"flex", justifyContent:'center'}}>
       <hr/>
    </div>

    <div className='copyright'>
      <p>Copyright © Artical Art All rights reserved.</p>
    </div>
   </div>
  )
}

export default Footer