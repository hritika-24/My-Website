import React, { useState } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'


//logo
import logo from "../assets/logo/logo.jpeg"

const Header = () => {

const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);

  return (
    <div className='Header'>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/" onClick={closeNavbar}>
              <img src={logo} />
            </Link>
            <button className="navbar-toggler" onClick={toggleNavbar} type="button" >
               <span className="bar navbar-toggler-icon"></span>
               <span className="bar navbar-toggler-icon"></span>
               <span className="bar navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNavDropdown" >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Design Gallery
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/modularkitchen" onClick={closeNavbar}>Modular Kitechen Designs</Link></li>
                    {/* <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Customise Your Kitchen</Link></li> */}
                    <li><Link className="dropdown-item" to="/wardrobe"  onClick={closeNavbar}>Wardrobe Designs</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Bedroom Designs</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Living Room Designs</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Space Saving Designs</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Dining Room Designs</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Home Office Designs</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Kids Bedroom Designs</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Bathroom Designs</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>1 BHK Interior Designs</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>2 BHK Interior Designs</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>3 BHK Interior Designs</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#"  onClick={closeNavbar}>Recent Projects</Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="#"  onClick={closeNavbar}>Reviews</Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="#"  onClick={closeNavbar}>Site Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#"  onClick={closeNavbar}>Residential</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#"  onClick={closeNavbar}>Commercial</Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="#"  onClick={closeNavbar}>DC Signature</Link>
                </li> */}
                
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Guides
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="#" onClick={closeNavbar}>Modular Kitchen Guides</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Bedroom Design Guides</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Living Room Design Guides</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Dining Room Design Guides</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Kids Room Design Guides</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Study Room Design Guides</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Balcony Design Guides</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Bathroom Design Guides</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Materials and Finishes</Link></li>
                  </ul>
                </li>
                {/* <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Blogs
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Modular Kitchen Interiors Ideas</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Home Interior Deign Ideas</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Bedroom Design Ideas</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Living Room Design Ideas</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Dining Room Design Ideas</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Kids Bedroom Design Ideas</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Study Room Design Ideas</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Home Decor Ideas</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>DC Home Tours</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>DC Design Stars</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>DC Updates</Link></li>
                  </ul>
                </li> */}
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#"   role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Cities
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Bengaluru</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Hyderabad</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Chennai</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Mumbai</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Navi Mumbai</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Pune</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Thane</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Ahmedabad</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Kolkata</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Mysore</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Coimbatore</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Vizag</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Gurugram</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#"   role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    More
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>About Us</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Why Articleart</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>About Experience Centres</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Refer and Earn</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Cutomer Dashboard</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Channel Partner Signup/Login</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Become A Design Partner</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Become A Franchise</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>FAQs</Link></li>
                    <li><Link className="dropdown-item" to="#"  onClick={closeNavbar}>Contact Us</Link></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link whatsapp" href="https://wa.me/917666325325?text=Enquiry%20for%20Interior%20Designing"  onClick={closeNavbar}><FaWhatsapp /></a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn" to="/form" onClick={closeNavbar}>Get Free Estimate</Link>
                </li>


                
              </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Header