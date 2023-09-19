import { useContext } from 'react'
import { dataContext } from '../../context/Context';
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md'
import "./stra.css"
// import "../StrategicGoals/strategic goals.css"
const StrategicGoals = () => {
   const { lang } = useContext(dataContext)
   return (
      <main>
         <section className="landing">
            <div className="container">
               <div className="text">
                  <h1>
                     {
                        lang
                           ? 'الأهداف الإستراتيجية'
                           : 'Strategic Goals'
                     }
                  </h1>
               </div>
            </div>
            <a href="#landing-1" className="go-down">
               <MdOutlineKeyboardDoubleArrowDown size={30} className='i' />
            </a>
         </section>
         <section className="landing" id="landing-1">
            <div className="container">
               <div className="text">
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
            </div>
            <a href="#landing-2" className="go-down">
               <MdOutlineKeyboardDoubleArrowDown size={30} className='i' />
            </a>
         </section>
         <section className="landing" id="landing-2">
            <div className="container">
               <div className="text">
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
            </div>
            <a href="#landing-3" className="go-down">
               <MdOutlineKeyboardDoubleArrowDown size={30} className='i' />
            </a>
         </section>
         <section className="landing" id="landing-3">
            <div className="container">
               <div className="text">
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
            </div>
            <a href="#landing-4" className="go-down">
               <MdOutlineKeyboardDoubleArrowDown size={30} className='i' />
            </a>
         </section>
         <section className="landing" id="landing-4">
            <div className="container">
               <div className="text">
                  <h2>
                     {lang ? ' الهدف الثاني' : 'Second goal'}
                  </h2>
                  <h3 dir={lang ? 'rtl' : 'ltr'} >
                     {
                        lang
                           ? 'بناء القدرات الجهات التابعة للهيئة العامة للرقابة المالية فيما يتعلق بالاستدامة'
                           : "Capacity building of entities affiliated with the Financial Regulatory Authority regarding sustainability"
                     }
                  </h3>               </div>
            </div>
            <a href="#landing-5" className="go-down">
               <MdOutlineKeyboardDoubleArrowDown size={30} className='i' />
            </a>
         </section>
         <section className="landing" id="landing-5">
            <div className="container">
               <div className="gols">
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
            </div>
         </section>
      </main>
   )
}


export default StrategicGoals
