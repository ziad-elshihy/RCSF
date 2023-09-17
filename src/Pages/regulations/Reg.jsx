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
            {/* <h2 className="main-title">القرارات و تشريعات</h2> */}
            <div className="container">
               {
                  titles.map((item, id) => {
                     return (
                        <div className="box" key={id}>
                           <img src={image} alt="الهيئة العامة"/>
                           <div className="cont">
                              <h3>{item.title}</h3>
                              <p>{item.description}</p>
                           </div>
                           <div className="info" dir={!lang && 'ltr'}>
                              <a href="./110- 2021.pdf">{lang ? 'تحميل الملف' : 'Read file'}</a>
                              {
                                 lang ? <BsArrowRight className='icon' /> : <BsArrowLeft className='icon' />
                              }
                              
                           </div>
                        </div>
                     )
                  })
               }
            </div>
         </section>
      </>
   )
}

export default Reg
