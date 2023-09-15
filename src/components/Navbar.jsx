import React, { useState, useContext } from 'react'
import './nav.css'
import NavBg from '../assets/js/script'
import Logo from '../assets/images/FRA.png'
import { IoMdArrowDropdown } from 'react-icons/io'
import { HiMiniPlusSmall } from 'react-icons/hi2'
import { GiHamburgerMenu } from 'react-icons/gi'
import Button from './Button';
import { Link } from 'react-router-dom'
import { dataContext } from '../context/Context';
const Navbar = () => {
   const { lang, setLang } = useContext(dataContext)
   const [show, setShow] = useState(false)
   NavBg()
   return (
      <header className="header">
         <nav className="nav container">
            <Button lang={lang} setLang={setLang} />
            <div className="nav__data">
               <Link
                  className="nav__link main-link"
                  to='/'
               >
                  <img className="logo" src={Logo} alt="Logo" />
               </Link>
               <div className="nav__toggle" id="nav-toggle">
                  <GiHamburgerMenu
                     onClick={() => setShow(!show)}
                     className='nav__burger'
                     size={30}
                  />
               </div>
            </div>

            {/* <!--=============== NAV MENU ===============--> */}
            <div className={show ? 'nav__menu show-menu' : 'nav__menu'} dir={lang && 'rtl'} id="nav-menu">
               <ul className="nav__list">
                  <li >
                     <Link
                        className="nav__link main-link"
                        to='/'
                     >
                        {lang ? ' الصفحة الرئيسية' : 'Home'}
                     </Link>
                  </li>
                  {/* <!--=============== DROPDOWN 1 ===============--> */}
                  <li className="dropdown__item">
                     <div className="nav__link main-link">
                        {lang ? 'عن المركز' : 'About Us'} <IoMdArrowDropdown />
                     </div>

                     <ul className="dropdown__menu">
                        <li className="dropdown__link dropdown__about">
                           {lang ? 'الرسالة' : 'Mission'}
                        </li>

                        <li className="dropdown__link dropdown__about">
                           {lang ? 'الرؤية' : 'Vision'}
                        </li>

                        <li>
                           <Link
                              className="dropdown__link dropdown__about"
                              to='/StrategicGoals'
                           >
                              {lang ? "الأهداف الإستراتيجية للمركز" : "The centre's strategic goals"}
                           </Link>
                        </li>
                        {/* <!--=============== DROPDOWN SUBMENU ===============--> */}
                        <li className="dropdown__subitem">
                           <div className="dropdown__link dropdown__about">
                              {lang ? "الهيكل التنظيمي :" : 'Organizational Chart:'}<HiMiniPlusSmall size={25} color='black' />
                           </div>
                           <ul className={lang ? "dropdown__submenu-en dropdown__submenu" : "dropdown__submenu"}>
                              <li >
                                 <Link
                                    to='/director'
                                    className="dropdown__sublink dropdown__about"
                                 >
                                    {lang ? " المدير التنفيذي" : "Executive Director"}
                                 </Link>
                              </li>
                              <li className="dropdown__sublink dropdown__about">
                                 {lang ? 'إدارة البحوث والتطوير' : 'Research and development department'}
                              </li>
                              <li className="dropdown__sublink dropdown__about">
                                 {lang ? 'إدارة الاتصال المؤسسي' : 'Corporate communication department'}
                              </li>
                              <li className="dropdown__sublink dropdown__about">
                                 {lang ? 'إدارة التدريب وبناء القدرات' : 'Training and capacity building department'}
                              </li>
                           </ul>
                        </li>
                     </ul>
                  </li>
                  <li className="nav__link main-link">
                     {lang ? 'أنماط التمويل المستدام' : 'Sustainable Financing Patterns'}

                  </li>
                  {/* <!--=============== DROPDOWN 2 ===============--> */}
                  <li className="dropdown__item">
                     <div className="nav__link main-link">
                        {lang ? 'أنشطة وفاعليات' : "Activities and events"} <IoMdArrowDropdown />
                     </div>
                     <ul className="dropdown__menu">
                        <li className="dropdown__link">
                           {lang ? 'حلقات نقاش' : 'Discussion panels'}

                        </li>
                        <li className="dropdown__link">
                           {lang ? 'مؤتمرات' : 'Conferences'}

                        </li>
                        <li className="dropdown__link">
                           {lang ? ' ندوات' : 'Seminars'}

                        </li>
                        <li className="dropdown__link">
                           {lang ? ' ورش عمل' : 'Workshops'}

                        </li>
                     </ul>
                  </li>
                  {/* <!--=============== DROPDOWN  ===============--> */}
                  <li className="dropdown__item">
                     <div className="nav__link main-link">
                        {lang ? 'المكتبة' : 'Library'} <IoMdArrowDropdown />
                     </div>
                     <ul className="dropdown__menu">
                        <li className="dropdown__link">
                           {lang ? 'كتب' : '   Books'}
                        </li>
                        <li className="dropdown__link">
                           {lang ? 'دوريات' : 'Patrols'}
                        </li>
                        <li className="dropdown__link">
                           {lang ? "بلاغات" : 'Reports'}
                        </li>
                        <li className="dropdown__link">
                           {lang ? ' إصدارات خاصة' : 'Special Editions'}
                        </li>
                        <li className="dropdown__link">
                           {lang ? 'إصدارات الكترونية' : 'Electronic Versions'}
                        </li>
                     </ul>
                  </li>
               </ul>
            </div>
         </nav>
      </header>
   )
}

export default Navbar
