import { useContext } from 'react'
import { dataContext } from '../../context/Context';
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md'
import { Link } from 'react-scroll';
import "./strategic.css"
// import "../StrategicGoals/strategic goals.css"
const StrategicGoals = () => {
   const { lang } = useContext(dataContext)
   return (
      <main className='strategic'>
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
            <Link
               smooth={true}
               duration={100}
               to="landing-1"
               className="go-down"
            >
               <MdOutlineKeyboardDoubleArrowDown size={30} className='i' />
            </Link>
         </section>
         <section className="landing" id="landing-1">
            <div className="container">
               <div className="text">
                  <h2>
                     {lang ? 'الهدف الإستراتيجي الاول' : 'First goal'}
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
            <Link
               smooth={true}
               duration={500}
               to="landing-2"
               className="go-down"
            >
               <MdOutlineKeyboardDoubleArrowDown size={30} className='i' />
            </Link>
         </section>
         <section className="landing" id="landing-2">
            <div className="container">
               <div className="text">
                  <h2>
                     {lang ? ' الهدف الإستراتيجي الثاني' : 'Second goal'}
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
            <Link
               smooth={true}
               duration={500}
               to="landing-3"
               className="go-down"
            >
               <MdOutlineKeyboardDoubleArrowDown size={30} className='i' />
            </Link>
         </section>
         <section className="landing" id="landing-3">
            <div className="container">
               <div className="text">
                  <h2>
                     {lang ? ' الهدف الإستراتيجي الثالث' : 'Third goal'}
                  </h2>
                  <h3 dir={lang ? 'rtl' : 'ltr'} >
                     {
                        lang
                           ? 'بناء الشراكات الاستراتيجية محلياً وإقليمياً ودولياً  '
                           : "Building strategic partnerships locally, regionally and internationally"
                     }
                  </h3>
               </div>
            </div>
            <Link
               smooth={true}
               duration={500}
               to="landing-4"
               className="go-down"
            >
               <MdOutlineKeyboardDoubleArrowDown size={30} className='i' />
            </Link>
         </section>
         <section className="landing" id="landing-4">
            <div className="container">
               <div className="text">
                  <h2>
                     {lang ? 'الهدف الإستراتيجي الرابع' : 'Fourth goal'}
                  </h2>
                  <h3 dir={lang ? 'rtl' : 'ltr'} >
                     {
                        lang
                           ? ' إتاحة وتبادل الخبرات والمعرفة فيما يتعلق بالتمويل المستدام'
                           : "Providing and exchanging experiences and knowledge regarding sustainable finance"
                     }
                  </h3>
               </div>
            </div>
            <Link
               smooth={true}
               duration={500}
               to="landing-5"
               className="go-down"
            >
               <MdOutlineKeyboardDoubleArrowDown size={30} className='i' />
            </Link>
         </section>
         <section className="landing" id="landing-5">
            <div className="container">
               <div className="text">
                  <h2>
                     {lang ? 'الهدف الإستراتيجي الخامس' : 'Fifth goal'}
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
         </section>
      </main>
   )
}


export default StrategicGoals
