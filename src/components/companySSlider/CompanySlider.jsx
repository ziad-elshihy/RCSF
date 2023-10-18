import './style.css'
import img1 from '../../assets/img-slider/Picture1.jpg'
import img3 from '../../assets/img-slider/Picture3.jpg'
import img4 from '../../assets/img-slider/Picture5.jpg'
import img5 from '../../assets/img-slider/Picture13.png'
import img7 from '../../assets/img-slider/Picture9.png'
import img8 from '../../assets/img-slider/Picture10.jpg'
import img10 from '../../assets/img-slider/Picture12.jpg'
import img11 from '../../assets/img-slider/Picture13.png'
import img12 from '../../assets/img-slider/Picture6.png'


import { useContext } from 'react'
import { dataContext } from '../../context/Context';

const CompanySlider = () => {
   const { lang } = useContext(dataContext)
   return (
      <div className='wrap'>
         <h2 className='com-h2'>
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
                     <img
                        src={img1}
                        alt='img1'
                        loading="lazy"
                     />
                  </div>

                  <div className="slide">
                     <img
                        src={img3}
                        alt='img3'
                        loading="lazy"
                     />
                  </div>
                  <div className="slide">
                     <img
                        src={img4}
                        alt='img4'
                        loading="lazy"
                     />
                  </div>
                  <div className="slide">
                     <img
                        src={img5}
                        alt='img5'
                        loading="lazy"
                     />
                  </div>
                  <div className="slide">
                     <img
                        src={img7}
                        alt='img7'
                        loading="lazy"
                     />
                  </div>
                  <div className="slide">
                     <img
                        src={img8}
                        alt='img8'
                        loading="lazy"
                     />
                  </div>
                  <div className=" slide">
                     <img
                        src={img10}
                        alt='img10'
                        loading="lazy"
                     />
                  </div>
                  <div className=" slide">
                     <img
                        src={img11}
                        alt='img11'
                        loading="lazy"
                     />
                  </div>
                  <div className=" slide">
                     <img
                        src={img12}
                        alt='img11'
                        loading="lazy"
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CompanySlider
