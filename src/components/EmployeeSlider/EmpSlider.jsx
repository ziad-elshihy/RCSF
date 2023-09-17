// import Swiper core and required modules
import { Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './style.css'
const EmpSlider = () => {
   return (
      <>
         <Swiper
            // install Swiper modules
            modules={[Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            pagination={{ clickable: true }}
         >
            <SwiperSlide className='slide'>
               <div className="container">
                  <div>
                     <img
                        src='https://www.course-api.com/images/people/person-4.jpeg'
                        alt='ziad'
                        className="person-img"
                     />
                     <h4>Ziad Elshihy</h4>
                     <p className="title">The boss</p>
                  </div>
                  <div>
                     <img
                        src='https://www.course-api.com/images/people/person-4.jpeg'
                        alt='ziad'
                        className="person-img"
                     />
                     <h4>Ziad Elshihy</h4>
                     <p className="title">The boss</p>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className='slide'>
               <div className="container">
                  <div>
                     <img
                        src='https://www.course-api.com/images/people/person-4.jpeg'
                        alt='ziad'
                        className="person-img"
                     />
                     <h4>Ziad Elshihy</h4>
                     <p className="title">The boss</p>
                  </div>
                  <div>
                     <img
                        src='https://www.course-api.com/images/people/person-4.jpeg'
                        alt='ziad'
                        className="person-img"
                     />
                     <h4>Ziad Elshihy</h4>
                     <p className="title">The boss</p>
                  </div>
                  <div>
                     <img
                        src='https://www.course-api.com/images/people/person-4.jpeg'
                        alt='ziad'
                        className="person-img"
                     />
                     <h4>Ziad Elshihy</h4>
                     <p className="title">The boss</p>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className='slide'>
               <div className="container">
                  <div>
                     <img
                        src='https://www.course-api.com/images/people/person-4.jpeg'
                        alt='ziad'
                        className="person-img"
                     />
                     <h4>Ziad Elshihy</h4>
                     <p className="title">The boss</p>
                  </div>
                  <div>
                     <img
                        src='https://www.course-api.com/images/people/person-4.jpeg'
                        alt='ziad'
                        className="person-img"
                     />
                     <h4>Ziad Elshihy</h4>
                     <p className="title">The boss</p>
                  </div>
                  <div>
                     <img
                        src='https://www.course-api.com/images/people/person-4.jpeg'
                        alt='ziad'
                        className="person-img"
                     />
                     <h4>Ziad Elshihy</h4>
                     <p className="title">The boss</p>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className='slide'>
               <div className="container">
                  <div>
                     <img
                        src='https://www.course-api.com/images/people/person-4.jpeg'
                        alt='ziad'
                        className="person-img"
                     />
                     <h4>Ziad Elshihy</h4>
                     <p className="title">The boss</p>
                  </div>
                  <div>
                     <img
                        src='https://www.course-api.com/images/people/person-4.jpeg'
                        alt='ziad'
                        className="person-img"
                     />
                     <h4>Ziad Elshihy</h4>
                     <p className="title">The boss</p>
                  </div>
                  <div>
                     <img
                        src='https://www.course-api.com/images/people/person-4.jpeg'
                        alt='ziad'
                        className="person-img"
                     />
                     <h4>Ziad Elshihy</h4>
                     <p className="title">The boss</p>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className='slide'>
               <div className="container">
                  <div>
                     <img
                        src='https://www.course-api.com/images/people/person-4.jpeg'
                        alt='ziad'
                        className="person-img"
                     />
                     <h4>Ziad Elshihy</h4>
                     <p className="title">The boss</p>
                  </div>
                  <div>
                     <img
                        src='https://www.course-api.com/images/people/person-4.jpeg'
                        alt='ziad'
                        className="person-img"
                     />
                     <h4>Ziad Elshihy</h4>
                     <p className="title">The boss</p>
                  </div>
               </div>
            </SwiperSlide>
         </Swiper >
      </>

   );
};
export default EmpSlider;
