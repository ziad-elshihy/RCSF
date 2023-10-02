// import Swiper core and required modules
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import imgs of Employers
import img1 from '../../assets/Img-Emp/dr.mohieldin.png'
import img2 from '../../assets/Img-Emp/Dr. Mohamed Farid Saleh.png'
import img3 from '../../assets/Img-Emp/Dr. NADA AL AGEZY.png'
import img4 from '../../assets/Img-Emp/Ms. SONJA GIBBS.png'
import img5 from '../../assets/Img-Emp/MARK HALLE.png'
import img6 from '../../assets/Img-Emp/Robert Patalano.png'
import img7 from '../../assets/Img-Emp/DR. DALIA ABDEL KADER.png'
import img8 from '../../assets/Img-Emp/DR. El Sayed Torky.png'
import img9 from '../../assets/Img-Emp/DR. AISHA MAHMOOD.png'
import img10 from '../../assets/Img-Emp/Dr. Obaid Saif Hamad Al Zaabi.png'
import img11 from '../../assets/Img-Emp/JAMES ZHAN.png'
import img12 from '../../assets/Img-Emp/Ms. May Abulnaga.jpg'
import img13 from '../../assets/Img-Emp/Dr. Anthony Miller.png'
import img14 from '../../assets/Img-Emp/DR. HUSSEIN ABAZA.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import './style.css'

import { useContext } from 'react'
import { dataContext } from '../../context/Context';


const EmpSlider = () => {
   const { lang } = useContext(dataContext)

   return (
      <>
         <h2 className='emp-h2'>
            {
               lang
                  ? 'المجلس الإستشاري'
                  : 'Meet RCSF Advisory Board'
            }
         </h2>
         <Swiper
            // install Swiper modules
            modules={[Pagination, Scrollbar, A11y, Autoplay]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000 }}
         >
            <SwiperSlide className='slide'>
               <div className="container">
                  <div>
                     <img
                        loading='lazy'
                        src={img1}
                        alt='dr. mohieldin'
                        className="person-img"
                     />
                     <h4 className='name'>Dr.Mahmoud mohieldin</h4>
                     <p className="job-title">
                        Executive Director At
                        <br />The International Monetary FUND<br />Elected Chairman
                     </p>
                  </div>
                  <div>
                     <img
                        loading='lazy'
                        src={img2}
                        alt='Dr. Mohamed Farid Saleh'
                        className="person-img"
                     />
                     <h4 className='name'>Dr.Mohamed Farid Saleh</h4>
                     <p className="job-title">
                        Executive Chairman
                        <br />Financial Regulatory Authority (FRA)
                     </p>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className='slide'>
               <div className="container">
                  <div>
                     <img
                        loading="lazy"
                        src={img3}
                        alt='Dr. NADA AL AGEZY'
                        className="person-img"
                     />
                     <h4 className='name'>Dr.NADA AL AGEZY</h4>
                     <p className="job-title">
                        Director Of Sustainable
                        <br /> Development And International
                        <br /> Cooperation Department
                     </p>
                  </div>
                  <div>
                     <img
                        loading="lazy"
                        src={img4}
                        alt='Sonja Gibbs'
                        className="person-img"
                     />
                     <h4 className='name'>MS.Sonja Gibbs</h4>
                     <p className="job-title">
                        Managing Director
                        <br />And Head Of Sustainable
                        <br />Finance, Global Policy Initiatives,
                        <br />  Institute Of International Finance (IIF)
                     </p>
                  </div>
                  <div>
                     <img
                        loading="lazy"
                        src={img5}
                        alt='Mark Halle'
                        className="person-img"
                     />
                     <h4 className='name'>MS.Mark Halle</h4>
                     <p className="job-title">
                        Senior Advisor
                        <br />Un Environment International
                        <br />Network of Financial Centers
                        <br />for Sustainability (FC4S)
                     </p>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className='slide'>
               <div className="container">
                  <div>
                     <img
                        loading="lazy"
                        src={img6}
                        alt='Robert Patalano'
                        className="person-img"
                     />
                     <h4 className='name'>MR.Robert Patalano</h4>
                     <p className="job-title">
                        Acting Head Of Division At
                        <br />OECD - Financial Markets Division
                     </p>
                  </div>
                  <div>
                     <img
                        loading="lazy"
                        src={img7}
                        alt='Dalia Abd Alkader'
                        className="person-img"
                     />
                     <h4 className='name'>DR.Dalia Abd-Alkader</h4>
                     <p className="job-title">
                        Chief Sustainability Officer of
                        <br /> Commercial International Bank
                     </p>
                  </div>
                  <div>
                     <img
                        loading="lazy"
                        src={img8}
                        alt='ziad'
                        className="person-img"
                     />
                     <h4 className='name'>Dr.ElSayed Torky</h4>
                     <p className="job-title">
                        Senior Advisor at
                        <br /> the Federation of Egyptian Industries
                     </p>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className='slide'>
               <div className="container">
                  <div>
                     <img
                        loading="lazy"
                        src={img9}
                        alt='Dr. Aisha Mahmood'
                        className="person-img"
                     />
                     <h4 className='name'>Dr.Aisha Mahmood</h4>
                     <p className="job-title">
                        Special Advisor to
                        <br />the Governor on Sustainable Banking, Nigeria
                     </p>
                  </div>
                  <div>
                     <img
                        loading="lazy"
                        src={img10}
                        alt='Dr. Obaid Al Zaabi'
                        className="person-img"
                     />
                     <h4 className='name'>Dr.Obaid Al Zaabi</h4>
                     <p className="job-title">
                        Former Chief Executive Officer at
                        <br />Securities and Commodities Authority, UAE
                     </p>
                  </div>
                  <div>
                     <img
                        loading="lazy"
                        src={img11}
                        alt='James Zhan'
                        className="person-img"
                     />
                     <h4 className='name'>Mr.James Zhan</h4>
                     <p className="job-title">
                        Director of the Investment and Enterprise
                        <br />Division at United Nations
                        <br />Conference on Trade and Developme
                     </p>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className='slide'>
               <div className="container">
                  <div>
                     <img
                        loading="lazy"
                        src={img12}
                        alt='Dr. May Abulnaga'
                        className="person-img"
                     />
                     <h4 className='name'>Dr.May Abulnaga</h4>
                     <p className="job-title">
                        First Sub Governor - Technical
                        <br />Office of the CBE Governor  Financial <br /> Inclusion Sector Banking Reform Sector <br /> Central Bank of Egypt
                     </p>
                  </div>
                  <div>
                     <img
                        loading="lazy"
                        src={img13}
                        alt='Dr. Anthony Miller'
                        className="person-img"
                     />
                     <h4 className='name'>Dr.Anthony Miller</h4>
                     <p className="job-title">
                        United Nations Sustainable Stock
                        <br />Exchanges initiative Coordinator
                     </p>
                  </div>
                  <div>
                     <img
                        loading="lazy"
                        src={img14}
                        alt='DR. HUSSEIN ABAZA'
                        className="person-img"
                     />
                     <h4 className='name'>DR.HUSSEIN ABAZA</h4>
                     <p className="job-title">
                        Sustainability  Expert & Advisor
                     </p>
                  </div>
               </div>
            </SwiperSlide>
         </Swiper >
      </>

   );
};
export default EmpSlider;
