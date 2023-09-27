import React from 'react'
import { BiLogoLinkedin, BiLogoFacebook } from 'react-icons/bi'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import './footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
   return (
      <section className="footer" id="footer">
         <div className="container">
            <div className="box box1">

               <Link
                  to='/'
               >
                  <h3>
                     RCSF
                  </h3>
               </Link>
               <ul className="social">
                  <li>
                     <a
                        href="#"
                        aria-label="Facebook"
                        className="facebook"
                     >
                        <BiLogoFacebook size={30} />
                     </a>
                  </li>
                  <li>
                     <a
                        href="https://www.linkedin.com/company/the-regional-center-for-sustainable-finance-rcsf/"
                        target='blank'
                        aria-label="Linkedin"
                        className="linkedin"
                     >
                        <BiLogoLinkedin size={30} />
                     </a>
                  </li>
               </ul>
            </div>
            <div className="box">
               <ul className="links">
                  <li><MdKeyboardDoubleArrowRight size={20} className='i' /><a href="#">Important Link 1</a></li>
                  <li><MdKeyboardDoubleArrowRight size={20} className='i' /><a href="#">Important Link 2</a></li>
                  <li><MdKeyboardDoubleArrowRight size={20} className='i' /><a href="#">Important Link 3</a></li>
                  <li><MdKeyboardDoubleArrowRight size={20} className='i' /><a href="#">Important Link 4</a></li>
                  <li><MdKeyboardDoubleArrowRight size={20} className='i' /><a href="#">Important Link 5</a></li>
               </ul>
            </div>
            <div className="box box3">
               <div className="line">
                  <FaMapMarkerAlt className='i' size={25} />
                  <div className="info">Smart Village - Building 137, Alexandria Desert Road - Giza, Egypt</div>
               </div>
               <div className="line">
                  <FaClock size={23} className='i' />
                  <div className="info">Business Hours: From 8:00 am To 3:30 pm</div>
               </div>
               <div className="line">
                  <div className="info">
                     <a
                        className='mail'
                        href="mailto:RCSF@fra.gov.eg"
                     >
                        <IoMail size={20} className='i-mail' />
                        <p>
                           Contact us
                        </p>
                     </a>
                  </div>
               </div>
            </div>
            <div className="box footer-gallery">
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d404.77205479874425!2d31.014674770751164!3d30.07840995623642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585b92500157df%3A0x4e4f6266e1b1916e!2z2KfZhNmH2YrYptipINin2YTYudin2YXYqSDZhNmE2LHZgtin2KjYqSDYp9mE2YXYp9mE2YrYqQ!5e0!3m2!1sar!2seg!4v1695124842061!5m2!1sar!2seg"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title='Location of RCSF on maps'
               >
               </iframe>
            </div>
         </div>
      </section>
   )
}

export default Footer
