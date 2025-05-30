import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='Header'>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">Logo</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Design Gallery
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="#">Modular Kitechen Designs</Link></li>
                    <li><Link className="dropdown-item" to="#">Customise Your Kitchen</Link></li>
                    <li><Link className="dropdown-item" to="#">Wardrobe Designs</Link></li>
                    <li><Link className="dropdown-item" to="#">Bedroom Designs</Link></li>
                    <li><Link className="dropdown-item" to="#">Living Room Designs</Link></li>
                    <li><Link className="dropdown-item" to="#">Space Saving Designs</Link></li>
                    <li><Link className="dropdown-item" to="#">Dining Room Designs</Link></li>
                    <li><Link className="dropdown-item" to="#">Home Office Designs</Link></li>
                    <li><Link className="dropdown-item" to="#">Kids Bedroom Designs</Link></li>
                    <li><Link className="dropdown-item" to="#">Bathroom Designs</Link></li>
                    <li><Link className="dropdown-item" to="#">1 BHK Interior Designs</Link></li>
                    <li><Link className="dropdown-item" to="#">2 BHK Interior Designs</Link></li>
                    <li><Link className="dropdown-item" to="#">3 BHK Interior Designs</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Recent Projects</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Reviews</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Site Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">DC Signature</Link>
                </li>
                
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Guides
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="#">Modular Kitchen Guides</Link></li>
                    <li><Link className="dropdown-item" to="#">Bedroom Design Guides</Link></li>
                    <li><Link className="dropdown-item" to="#">Living Room Design Guides</Link></li>
                    <li><Link className="dropdown-item" to="#">Dining Room Design Guides</Link></li>
                    <li><Link className="dropdown-item" to="#">Kids Room Design Guides</Link></li>
                    <li><Link className="dropdown-item" to="#">Study Room Design Guides</Link></li>
                    <li><Link className="dropdown-item" to="#">Balcony Design Guides</Link></li>
                    <li><Link className="dropdown-item" to="#">Bathroom Design Guides</Link></li>
                    <li><Link className="dropdown-item" to="#">Materials and Finishes</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Blogs
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="#">Modular Kitchen Interiors Ideas</Link></li>
                    <li><Link className="dropdown-item" to="#">Home Interior Deign Ideas</Link></li>
                    <li><Link className="dropdown-item" to="#">Bedroom Design Ideas</Link></li>
                    <li><Link className="dropdown-item" to="#">Living Room Design Ideas</Link></li>
                    <li><Link className="dropdown-item" to="#">Dining Room Design Ideas</Link></li>
                    <li><Link className="dropdown-item" to="#">Kids Bedroom Design Ideas</Link></li>
                    <li><Link className="dropdown-item" to="#">Study Room Design Ideas</Link></li>
                    <li><Link className="dropdown-item" to="#">Home Decor Ideas</Link></li>
                    <li><Link className="dropdown-item" to="#">DC Home Tours</Link></li>
                    <li><Link className="dropdown-item" to="#">DC Design Stars</Link></li>
                    <li><Link className="dropdown-item" to="#">DC Updates</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Cities
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="#">Bengaluru</Link></li>
                    <li><Link className="dropdown-item" to="#">Hyderabad</Link></li>
                    <li><Link className="dropdown-item" to="#">Chennai</Link></li>
                    <li><Link className="dropdown-item" to="#">Mumbai</Link></li>
                    <li><Link className="dropdown-item" to="#">Navi Mumbai</Link></li>
                    <li><Link className="dropdown-item" to="#">Pune</Link></li>
                    <li><Link className="dropdown-item" to="#">Thane</Link></li>
                    <li><Link className="dropdown-item" to="#">Ahmedabad</Link></li>
                    <li><Link className="dropdown-item" to="#">Kolkata</Link></li>
                    <li><Link className="dropdown-item" to="#">Mysore</Link></li>
                    <li><Link className="dropdown-item" to="#">Coimbatore</Link></li>
                    <li><Link className="dropdown-item" to="#">Vizag</Link></li>
                    <li><Link className="dropdown-item" to="#">Gurugram</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    More
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="#">About Us</Link></li>
                    <li><Link className="dropdown-item" to="#">Why Articleart</Link></li>
                    <li><Link className="dropdown-item" to="#">About Experience Centres</Link></li>
                    <li><Link className="dropdown-item" to="#">Refer and Earn</Link></li>
                    <li><Link className="dropdown-item" to="#">Cutomer Dashboard</Link></li>
                    <li><Link className="dropdown-item" to="#">Channel Partner Signup/Login</Link></li>
                    <li><Link className="dropdown-item" to="#">Become A Design Partner</Link></li>
                    <li><Link className="dropdown-item" to="#">Become A Franchise</Link></li>
                    <li><Link className="dropdown-item" to="#">FAQs</Link></li>
                    <li><Link className="dropdown-item" to="#">Contact Us</Link></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link className="nav-link whatsapp" to="#"><FaWhatsapp /></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn" to="#">Get Free Estimate</Link>
                </li>


                
              </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Header