import React, { useState, useContext } from 'react'

import { dataContext } from '../../context/Context';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import image from '../../assets/images/الهيئة-العامة-للرقابة-المالية.webp'
import data from './data'
import "./reports.css"
const Reports = () => {
   const { lang } = useContext(dataContext)
   const [titles, setTitles] = useState(data)
   return (
      <>
         <section
            data-aos="fade-up"
            className="articles"
            id="articles"
            dir='rtl'
         >
            <h2 className="main-title">
               {
                  lang
                     ? 'تقارير'
                     : 'Reports'
               }
            </h2>
            <div className="container">
               {
                  titles.map((item, id) => {
                     return (
                        <div className="box-reports" key={id}>
                           <img src={image} alt="الهيئة العامة" loading="lazy" />
                           <div className="cont">
                              <h3>
                                 {
                                    lang
                                       ? item.title
                                       : item.titleEn
                                 }
                              </h3>
                              {/* <p>{item.description}</p> */}
                           </div>
                           <a
                              dir={lang ? 'rtl' : 'ltr'}
                              className="info"
                              href={item.file}
                              download
                           >
                              {lang ? 'تحميل الملف' : 'Download file'}
                              {
                                 lang ? <BsArrowRight className='icon' /> : <BsArrowLeft className='icon' />
                              }
                           </a>
                        </div>
                     )
                  })
               }
            </div>
         </section>
      </>
   )
}

export default Reports
