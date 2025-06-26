import React, { useState } from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import './ContactUs.css'

const ContactUs = () => {

     const [formData, setFormData] = useState({
        name: '',
        phone: '',
        location: '',
        message: '' // New field,
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const subject = encodeURIComponent('');
        const body = encodeURIComponent(
          `Name: ${formData.name}\nPhone: ${formData.phone}\nLocation: ${formData.location}\nYour Message: ${formData.message}`
        );
    
        window.location.href = `mailto:support@articalart.com?subject=${subject}&body=${body}`;
      };



  return (
    <>
   
    <h3 className=' contactus_heading container'>Contact Us</h3><br/>
    <div className='contactus container'>
        <div className='contactus_links'>
            <h3>We’d love to hear from you</h3><br/>
            <p style={{fontSize:'20px'}}>Whether your query is about features, materials, pricing, or anything else, our team is ready to answer all your questions.</p><br/><br/>
            <p><a href="https://wa.me/917666325325?text=Enquiry%20for%20Interior%20Designing" target='_blank'>Call Us On :<span style={{color:'goldenrod'}}> +91-7666325325</span></a></p>
            <p><a href = 'mailto:support@articalart.com'>Email Us On : <span style={{color:'goldenrod'}}>support@articalart.com</span></a></p>

            <div className='social_Links'>
            <p>Connect With Us : </p>
            <a href="https://www.facebook.com/profile.php?id=61576896656748" target="_blank"><FaFacebookF/></a>
            <a href='https://www.Linkedin.com/company/107159910/'><FaLinkedinIn/></a>
            <a href='https://www.instagram.com/artical.art/'><AiFillInstagram/></a>
            <a href='https://www.pinterest.com/articalartinterior/'><BsPinterest/></a>
            <a href='https://x.com/Articalart'><FaXTwitter/></a>
            </div>

        </div>
        <div className='contact_form'>
         <form onSubmit={handleSubmit}>
            
            <div className='name'>
             <label> Name</label><br/>
                <input
                type='text'
                name="name"
                onChange={handleChange}
                required
                placeholder='Enter Your Name'
                />
            </div>

            <div className='phone'>
             <label> Phone</label><br/>
                <input
                    type='number'
                    name='phone'
                    onChange={handleChange}
                    required
                    placeholder=' Enter Mobile number'
                />
            </div>
            <div className='location'>
            <label> Location</label><br/>
            <input
                    type='text'
                    name='location'
                    onChange={handleChange}
                    required
                    placeholder=' Enter Your Location'
            />
            </div>
            
            {/* <select className="form-select form-select-sm" name="location" onChange={handleChange} required style={{marginTop:'10px'}}><br/>
                <option value="">select location</option>
                <option value="Banglore">Banglore</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Chennai">Chennai</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Navi Mumbai">Navi Mumbai</option>
                <option value="Thane">Thane</option>
                <option value="Mysore">Mysore</option>
                <option value="Pune">Pune</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Vizag">Vizag</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Gandhinagar">Gandhinagar</option>
                <option value="Anand Nagar">Anand Nagar</option>
                <option value="New Delhi">New Delhi</option>
                <option value="Gurugram">Gurugram</option>
                <option value="Noida">Noida</option>
                <option value="Others">Others</option>
        </select><br/> */}
        <label> Message</label><br/>
        <div className='message'>
          <textarea
            type='text'
            name="message"
            onChange={handleChange}
            required
            placeholder='Enter Message'
          />
        </div>
        <div className='submit'>
          <input type='submit' value={"Submit"} /><br/><br/>
        </div>
            
         </form>
        </div>
     </div>
    <h3 className='add_and_map_heading container'>Visit Us</h3> <br/><br/>
    <div className='address_and_map container'>
        <div className='address'>
            <h3>Artical Art, Rabale</h3><br/>
            <h3>Navi Mumbai</h3><br/>
            <p style={{fontSize:'20px', color:'grey'}}>
            Plot No. R-488/1st Floor TTC Industrial Area,
            Rabale MIDC, Navi Mumbai (New Mumbai), 
            India, Maharashtra.
            </p><br/>

            <a href='https://www.google.co.in/maps/place/Ancient+Helpro+Pvt.+Ltd./@19.1449685,73.0086227,17z/data=!3m1!4b1!4m6!3m5!1s0x45be25f4cfdabde5:0xaa9d9fe9f9628764!8m2!3d19.1449685!4d73.0111976!16s%2Fg%2F11ltnp56nw?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D'className='btn'>Get Direction</a>
        </div>
        <div className='map'> 
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.1486699047864!2d73.00862267528512!3d19.14496848207383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45be25f4cfdabde5%3A0xaa9d9fe9f9628764!2sAncient%20Helpro%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1750757915470!5m2!1sen!2sin" 
            width="100%" height="300"
            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>

 
    </>
  )
}

export default ContactUs