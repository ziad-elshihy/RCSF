import React, { useContext } from 'react'
import { dataContext } from '../context/Context';
// import Swiper core and required modules
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "../components/slider.css"
const StrategicGoals = () => {
   const { lang, setLang } = useContext(dataContext)
   return (
      <Swiper
         // install Swiper modules
         modules={[Navigation, A11y]}
         spaceBetween={50}
         slidesPerView={1}
         navigation
         pagination={{ clickable: true }}
         scrollbar={{ draggable: true }}
         loop={true}
      >
         <SwiperSlide className='slide__s2'>
            <div className='content' >
               <h2>
                  {lang ? 'الأهداف الإستراتيجية' : 'Strategic Goals'}
               </h2>
            </div>
         </SwiperSlide>
         <SwiperSlide className='slide__s2'>
            <div className='content' >
               <h2>
                  {lang ? 'الهدف الإستراتيجي الاول' : 'First strategic goal'}
               </h2>
               <h3 >
                  {
                     lang
                        ? 'تعزيز مرونة المؤسسات المالية غير المصرفية في عملية التحول العادل نحو الاقتصاد المستدام'
                        : "Enhancing the flexibility of non-banking financial institutions in the process of just transition towards a sustainable economy"
                  }
               </h3>
            </div>
         </SwiperSlide>
         <SwiperSlide className='slide__s2'>
            <div className='content' >
               <h2>
                  {lang ? ' الهدف الإستراتيجي  الثاني' : 'Second strategic goal'}
               </h2>
               <h3 >
                  {
                     lang
                        ? 'بناء القدرات الجهات التابعة للهيئة العامة للرقابة المالية فيما يتعلق بالاستدامة'
                        : "Capacity building of entities affiliated with the Financial Regulatory Authority regarding sustainability"
                  }
               </h3>
            </div>
         </SwiperSlide>
         <SwiperSlide className='slide__s2'>
            <div className='content' >
               <h2>
                  {lang ? ' الهدف الإستراتيجي  الثالث' : 'Third strategic goal'}
               </h2>
               <h3 >
                  {
                     lang
                        ? 'بناء الشراكات الاستراتيجية محلياً وإقليمياً ودولياً  '
                        : "Building strategic partnerships locally, regionally and internationally"
                  }
               </h3>
            </div>
         </SwiperSlide>
         <SwiperSlide className='slide__s2'>
            <div className='content' >
               <h2>
                  {lang ? 'الهدف الإستراتيجي  الرابع' : 'Fourth strategic goal'}
               </h2>
               <h3 >
                  {
                     lang
                        ? ' إتاحة وتبادل الخبرات والمعرفة فيما يتعلق بالتمويل المستدام'
                        : "Providing and exchanging experiences and knowledge regarding sustainable finance"
                  }
               </h3>
            </div>
         </SwiperSlide>
         <SwiperSlide className='slide__s2'>
            <div className='content' >
               <h2>
                  {lang ? 'الهدف الإستراتيجي  الخامس' : 'Fifth strategic goal'}
               </h2>
               <h3 >
                  {
                     lang
                        ? 'المشاركة في رفع التوصيات الخاصة بالقواعد والإجراءات والمعايير اللازمة لضمان استدامة الأسواق واستحداث أسواق مالية جديدة'
                        : "Participate in submitting recommendations for the rules, procedures and standards necessary to ensure the sustainability of markets and the development of new financial markets"
                  }
               </h3>
            </div>
         </SwiperSlide>
      </Swiper>
   )
}


export default StrategicGoals
