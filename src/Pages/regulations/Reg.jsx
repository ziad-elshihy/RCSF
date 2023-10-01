import React, { useState, useContext } from 'react'

import { dataContext } from '../../context/Context';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import image from '../../assets/images/الهيئة-العامة-للرقابة-المالية.webp'
import data from './data'
import "./reg.css"
const Reg = () => {
   const { lang } = useContext(dataContext)
   const [titles, setTitles] = useState(data)
   return (
      <>
         <section data-aos="fade-up" className="articles" id="articles" dir='rtl' >
            {
               lang
                  ? <h2 className="main-title">
                     القرارات و تشريعات
                  </h2>
                  : <h2 className='main-title main-title-en'>
                     Regulations & Legislation
                  </h2>
            }
            <div className="container">
               {
                  titles.map((item, id) => {
                     return (
                        <div
                           className="box"
                           key={id}
                        >
                           <img
                              src={image}
                              alt="الهيئة العامة"
                              loading="lazy"
                           />
                           <div className="cont">
                              <h3>{item.title}</h3>
                              <p>{item.description}</p>
                           </div>
                           <a
                              dir={lang ? 'rtl' : 'ltr'}
                              className="info"
                              href={item.file}
                              download
                           >
                              {
                                 lang
                                    ? 'تحميل الملف'
                                    : 'Download file'
                              }
                              {
                                 lang
                                    ? <BsArrowRight className='icon' />
                                    : <BsArrowLeft className='icon' />
                              }
                           </a>
                        </div>
                     )
                  })
               }
            </div>
         </section >
      </>
   )
}

export default Reg
