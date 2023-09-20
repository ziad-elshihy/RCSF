// import Swiper core and required modules
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useContext } from 'react'
import { dataContext } from '../../context/Context';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./m-v.css"
const MissionVision = () => {
   const { lang } = useContext(dataContext)

   return (
      <>
         <Swiper
         className='swipe'
            // install Swiper modules
            modules={[Navigation, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay={{delay: 4000}}
            loop={true}
         >
            <SwiperSlide className='slide__s2'>
               <div className='content' >
                  <h2>
                     {lang ? ' الرسالة' : 'Mission'}
                  </h2>
                  <h3>
                     {
                        lang
                           ? 'يسعي المركز إلى تحقيق تأثير ملموس في عملية التحول العادل من خلال تعزيز مرونة القطاع المالي غير المصرفي في مواجهة التغيرات المناخية وتحسين ممارسات الاستدامة، وذلك من خلال بناء قدرات مختلف الأطراف الفاعلة في القطاع المالي وبناء الشراكات الاستراتيجية محلياً، وإقليمياً وعالمياً والمساهمة في وضع التشريعات والضوابط اللازمة لتعزيز استدامة الأسواق المالية غير المصرفية"'
                           : "“Striving for real impact in just-transition by enhancing the non-banking financial sector resilient to climate changes and promoting sustainability practices through capacity building, strategic partnerships and cohesive regulations to ensure the role of financial services in just-transition.”"
                     }

                  </h3>
               </div>
            </SwiperSlide>
            <SwiperSlide className='slide__s2'>
               <div className='content' >
                  <h2>
                     {lang ? 'الرؤية' : 'Vision'}
                  </h2>
                  <h3 >
                     {
                        lang
                           ? '"مركزاً إقليمياً رائداً في تعزيز ممارسات الاستدامة والتمويل المستدام بالقطاع المالي غير المصرفي لدعم مساهمته في تحقيق التحول العادل نحو الاقتصاد المستدام"'
                           : '“Striving for real impact in just-transition by enhancing the non-banking financial sector resilient to climate changes and promoting sustainability practices through capacity building, strategic partnerships and cohesive regulations to ensure the role of financial services in just-transition.”'
                     }

                  </h3>
               </div>
            </SwiperSlide>
         </Swiper>
      </>

   )
}

export default MissionVision