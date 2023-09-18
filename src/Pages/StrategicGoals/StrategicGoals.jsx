import { useContext } from 'react'
import { dataContext } from '../../context/Context';
import "./stra.css"
// import "../StrategicGoals/strategic goals.css"
const StrategicGoals = () => {
   const { lang } = useContext(dataContext)
   return (
      <>
         <main className='slides'>
            <div className="container">
               <div className='content' >
                  <h2>
                     {lang ? 'الأهداف الإستراتيجية' : 'Strategic Goals'}
                  </h2>
               </div>
               <div className='content' >
                  <h2>
                     {lang ? 'الهدف الاول' : 'First goal'}
                  </h2>
                  <h3 dir={lang ? 'rtl' : 'ltr'} >
                     {
                        lang
                           ? 'تعزيز مرونة المؤسسات المالية غير المصرفية في عملية التحول العادل نحو الاقتصاد المستدام'
                           : "Enhancing the flexibility of non-banking financial institutions in the process of just transition towards a sustainable economy"
                     }
                  </h3>
               </div>
               <div className='content' >
                  <h2>
                     {lang ? ' الهدف الثاني' : 'Second goal'}
                  </h2>
                  <h3 dir={lang ? 'rtl' : 'ltr'} >
                     {
                        lang
                           ? 'بناء القدرات الجهات التابعة للهيئة العامة للرقابة المالية فيما يتعلق بالاستدامة'
                           : "Capacity building of entities affiliated with the Financial Regulatory Authority regarding sustainability"
                     }
                  </h3>
               </div>
               <div className='content' >
                  <h2>
                     {lang ? ' الهدف الثالث' : 'Third goal'}
                  </h2>
                  <h3 dir={lang ? 'rtl' : 'ltr'} >
                     {
                        lang
                           ? 'بناء الشراكات الاستراتيجية محلياً وإقليمياً ودولياً  '
                           : "Building strategic partnerships locally, regionally and internationally"
                     }
                  </h3>
               </div>
               <div className='content' >
                  <h2>
                     {lang ? 'الهدف الرابع' : 'Fourth goal'}
                  </h2>
                  <h3 dir={lang ? 'rtl' : 'ltr'} >
                     {
                        lang
                           ? ' إتاحة وتبادل الخبرات والمعرفة فيما يتعلق بالتمويل المستدام'
                           : "Providing and exchanging experiences and knowledge regarding sustainable finance"
                     }
                  </h3>
               </div>
               <div className='content' >
                  <h2>
                     {lang ? 'الهدف الخامس' : 'Fifth goal'}
                  </h2>
                  <h3 dir={lang ? 'ltr' : 'rtl'} >
                     {
                        lang
                           ? 'المشاركة في رفع التوصيات الخاصة بالقواعد والإجراءات والمعايير اللازمة لضمان استدامة الأسواق واستحداث أسواق مالية جديدة'
                           : "Participate in submitting recommendations for the rules, procedures and standards necessary to ensure the sustainability of markets and the development of new financial markets"
                     }
                  </h3>
               </div>
            </div>
         </main >
      </>
   )
}


export default StrategicGoals
