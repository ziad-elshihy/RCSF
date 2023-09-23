import { useContext } from 'react'
import { dataContext } from '../../context/Context';
import { Link } from 'react-scroll';
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md'


import './sustainablefinance.css'
const SustainableFinance = () => {
   const { lang } = useContext(dataContext)
   return (
      <main className='sustainable' dir='rtl'>
         <div className="container">
            <div className='home-div'>
               <div className="text">
                  <h1>
                     أهم المصطلحات المرتبطة بالاستدامة
                  </h1>
               </div>
               <Link
                  smooth={true}
                  duration={100}
                  to="section2"
                  className="go-down"
               >
                  <MdOutlineKeyboardDoubleArrowDown size={30} className='i' />
               </Link>
            </div>
            <div id="section2">
               <div className="sus-content">
                  <h3 className='main-head'>
                     السندات الخضراء:
                  </h3>
                  <p className="sub-content">
                     أحد أنواع السندات وتخصص حصيلتها لتمويل وإعادة تمويل المشروعات الخضرا (الصديقة للبيئة).
                  </p>
               </div>
               <div className="sus-content">
                  <h3 className='main-head'>
                     سندات التنمية المستدامة:
                  </h3>
                  <p className="sub-content">
                     أحد أنواع السندات المخصصة لتمويل أهداف التنمية المستدامة فقط وتستخدم حصيلتها في تمويل المشروعات الخضراء ومشروعات التنمية الاجتماعية التي تهدف إلى تحقيق الاستدامة من خلال الأهداف التنموية المراعية للأبعاد البيئية والاجتماعية.
                  </p>
               </div>
               <div className="sus-content">
                  <h3 className='main-head'>
                     السندات المرتبطة بالتنمية المستدامة:
                  </h3>
                  <p className="sub-content">
                     أحد أنواع السندات التي ترتبط هيكلياً بتحقيق المُصدر لأهداف التنمية المستدامة الواضحة ولا يشترط فيها تمويل مشروعات مستدامة معينة ويمكن إصدارها لأي نوع من سندات الاستدامة، ومن أمثلتها: السندات المرتبطة بمؤشر الأداء الرئيسي أو المرتبطة بأهداف التنمية المستدامة.
                  </p>
               </div>
               <div className="sus-content">
                  <h3 className='main-head'>
                     السندات ذات البعد الاجتماعي:
                  </h3>
                  <p className="sub-content">
                     أحد أنواع السندات التي تستخدم حصيلة طرحها لتمويل أو إعادة تمويل مشروعات اجتماعية جديدة أو قائمة.'
                  </p>
               </div>
               <div className="sus-content">
                  <h3 className='main-head'>
                     سندات تمكين المرأة:
                  </h3>
                  <p className="sub-content">
                     أحد أنواع السندات ذات البعد الاجتماعي ترتبط هيكلياً بتحقيق المُصدر لأهداف تمويل المشروعات أو المبادرات أو السياسات التي تدعم قضايا تمكين المرأة في كافة المجالات وتعزيز المساواة بين الجنسين.
                  </p>
               </div>
               <div className="sus-content">
                  <h3 className='main-head'>
                     سندات المناخ:
                  </h3>
                  <p className="sub-content">
                     أحد أنواع السندات التي تخصص حصيلتها لتمويل تمويل وإعادة تمويل المشروعات الصديقة للبيئة بغرض تقليل الانبعاثات الكربونية والتخفيف من آثار تغير المناخ وظاهرة الاحتباس الحراري.
                  </p>
               </div>
               <div className="sus-content">
                  <h3 className='main-head'>
                     السندات البُنية (الانتقالية):
                  </h3>
                  <p className="sub-content">
                     أحد أنواع السندات التي تهدف لتمويل الأنشطة الملوثة للبيئة والتي يمكن تطويرها لتكون أقل تأثيراً على البيئة وتصدر عن الجهات غير المؤهلة لإصدار السندات الخضراء بسبب ممارستها لأنشطة ملوثة للبيئة؛ كالأنشطة الصناعية، والطيران والشحن، والصناعات الكيميائية، والنفط والغاز، ومشروعات استدامة الحد من التلوث وتقليل انبعاثات الغازات المسببة للاحتباس الحراري وتغير المناخ وتخفيف تلوث الهواء ومشروعات الحد من المخرجات الملوثة للمياه والمشروعات المستنفذة للطاقة.
                  </p>
               </div>
            </div>
         </div>
      </main >
   )
}

export default SustainableFinance
