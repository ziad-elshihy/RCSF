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
const EmpSlider = () => {
   return (
      <>
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
                        src={img1}
                        alt='dr. mohieldin'
                        className="person-img"
                     />
                     <h4>dr. Mahmoud mohieldin</h4>
                     <p className="title">
                     Executive Director At
                        <br />The International Monetary FUND<br />Elected Chairman
                     </p>
                  </div>
                  <div>
                     <img
                        src={img2}
                        alt='Dr. Mohamed Farid Saleh'
                        className="person-img"
                     />
                     <h4>Dr. Mohamed Farid Saleh</h4>
                     <p className="title">
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
                        src={img3}
                        alt='Dr. NADA AL AGEZY'
                        className="person-img"
                     />
                     <h4>Dr. NADA AL AGEZY</h4>
                     <p className="title">
                        Director Of Sustainable
                        <br /> Development And International
                        <br /> Cooperation Department
                     </p>
                  </div>
                  <div>
                     <img
                        src={img4}
                        alt='Sonja Gibbs'
                        className="person-img"
                     />
                     <h4>MS. Sonja Gibbs</h4>
                     <p className="title">
                        Managing Director
                        <br />And Head Of Sustainable
                        <br />Finance, Global Policy
                        <br /> Initiatives, Institute Of International Finance (IIF)
                     </p>
                  </div>
                  <div>
                     <img
                        src={img5}
                        alt='Mark Halle'
                        className="person-img"
                     />
                     <h4>MS. Mark Halle</h4>
                     <p className="title">
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
                        src={img6}
                        alt='Robert Patalano'
                        className="person-img"
                     />
                     <h4>MR. Robert Patalano</h4>
                     <p className="title">
                        Acting Head Of Division At
                        <br />OECD - Financial Markets Division
                     </p>
                  </div>
                  <div>
                     <img
                        src={img7}
                        alt='Dalia Abd Alkader'
                        className="person-img"
                     />
                     <h4>DR. Dalia Abd Alkader</h4>
                     <p className="title">
                        Chief Sustainability Officer Of
                        <br /> Commercial International Bank (CIB)
                     </p>
                  </div>
                  <div>
                     <img
                        src={img8}
                        alt='ziad'
                        className="person-img"
                     />
                     <h4>Dr. ElSayed Torky</h4>
                     <p className="title">
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
                        src={img9}
                        alt='Dr. Aisha Mahmood'
                        className="person-img"
                     />
                     <h4>Dr. Aisha Mahmood</h4>
                     <p className="title">
                        Special Advisor to THE GOVERNOR
                        <br />  ON SUSTAINABLE BANKING Central Bank of Nigeria (CBN)
                     </p>
                  </div>
                  <div>
                     <img
                        src={img10}
                        alt='Dr. Obaid Saif Hamad Al Zaabi'
                        className="person-img"
                     />
                     <h4>Dr. Obaid Saif Hamad Al Zaabi</h4>
                     <p className="title">
                        Former Chief Executive Officer at
                        <br />Securities and Commodities Authority, UAE
                     </p>
                  </div>
                  <div>
                     <img
                        src={img11}
                        alt='James Zhan'
                        className="person-img"
                     />
                     <h4>Mr.James Zhan</h4>
                     <p className="title">
                        Director Of The Investment And Enterprise
                        <br />Division At United Nations
                        <br />Conference On Trade And Development (UNCTAD)
                     </p>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className='slide'>
               <div className="container">
                  <div>
                     <img
                        src={img12}
                        alt='Dr. May Abulnaga'
                        className="person-img"
                     />
                     <h4>Dr. May Abulnaga</h4>
                     <p className="title">
                        First Sub Governor - Technical Office Of The CBE Governor
                        <br /> Financial Inclusion Sector Banking Reform Sector Central Bank of Egypt
                     </p>
                  </div>
                  <div>
                     <img
                        src={img13}
                        alt='Dr. Anthony Miller'
                        className="person-img"
                     />
                     <h4>Dr. Anthony Miller</h4>
                     <p className="title">
                        United Nations Sustainable Stock
                        <br />Exchanges Initiative Coordinator
                     </p>
                  </div>
                  <div>
                     <img
                        src={img14}
                        alt='DR. HUSSEIN ABAZA'
                        className="person-img"
                     />
                     <h4>DR. HUSSEIN ABAZA</h4>
                     <p className="title">
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
