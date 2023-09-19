import './style.css'
import img1 from '../../assets/img-slider/Picture1.jpg'
import img2 from '../../assets/img-slider/Picture2.png'
import img3 from '../../assets/img-slider/Picture3.jpg'
import img4 from '../../assets/img-slider/Picture5.jpg'
import img5 from '../../assets/img-slider/undp-logo-5682674D5C-seeklogo.com.png'
import img6 from '../../assets/img-slider/Picture8.png'
import img7 from '../../assets/img-slider/Picture9.png'
import img8 from '../../assets/img-slider/Picture10.jpg'
import img9 from '../../assets/img-slider/Picture11.jpg'
import img10 from '../../assets/img-slider/Picture12.jpg'
import img11 from '../../assets/img-slider/undp-logo-5682674D5C-seeklogo.com.png'


import { useContext } from 'react'
import { dataContext } from '../../context/Context';

import img11 from '../../assets/img-slider/Picture6.png'
const CompanySlider = () => {
   const { lang } = useContext(dataContext)
   return (
      <div className='wrap'>
         <h2>
            {
               lang
                  ? "الشراكات"
                  : "Partnerships"
            }
         </h2>
         <div className="wrapper">
            <div className="slider">
               <div className="slide-track">
                  <div className="slide">
                     <img src={img1} alt='img1' />
                  </div>
                  <div className="slide">
                     <img src={img2} alt='img2' />
                  </div>
                  <div className="slide">
                     <img src={img3} alt='img3' />
                  </div>
                  <div className="slide">
                     <img src={img4} alt='img4' />
                  </div>
                  <div className="slide">
                     <img src={img5} alt='img5' />
                  </div>
                  <div className="slide">
                     <img src={img6} alt='img6' />
                  </div>
                  <div className="slide">
                     <img src={img7} alt='img7' />
                  </div>
                  <div className="slide">
                     <img src={img8} alt='img8' />
                  </div>
                  <div className=" slide">
                     <img src={img9} alt='img9' />
                  </div>
                  <div className=" slide">
                     <img src={img10} alt='img10' />
                  </div>
                  <div className=" slide">
                     <img src={img11} alt='img11' />
                  </div>

               </div>
            </div>
         </div>
      </div>
   )
}

export default CompanySlider