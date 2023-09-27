import React, { useState, useContext } from 'react'

import { dataContext } from '../../context/Context';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'


// import image from 'https://lh3.googleusercontent.com/pw/ADCreHdyandYbEW22bObcLBw_kk7OXyHnLjreNjIT-aPvhQ0jKe55juiSjCOtVYyN3M0MxprvqoR4vd1mjB3zYClVz24Oj2E00km2-g5EjgDnlpYzkVoOXkybrzvVl1HMFGksIhLYmnNRj_aDZjUmUex38g=w610-h300-s-no?authuser=0'


import data from './data'
import "./reg.css"
const Reg = () => {
   const { lang } = useContext(dataContext)
   const [titles, setTitles] = useState(data)
   return (
      <>
         <section data-aos="fade-up" className="articles" id="articles" dir='rtl' >
            <h2 className="main-title">
               {
                  lang
                     ? 'القرارات و تشريعات'
                     : 'Regulations & Legislation'
               }
            </h2>
            <div className="container">
               {
                  titles.map((item, id) => {
                     return (
                        <div
                           className="box"
                           key={id}
                        >
                           <img
                              src='https://lh3.googleusercontent.com/pw/ADCreHfS5JXLixyM9umVbuJfki024nmItB0WMI5_KqUeqog_Fqoruq-hw_1FeGqS6GxjKJJ1EgHmKXLndXpHh3ccgaVvRWb_qOgfTbXG2PtniZmGrDNK5FVLAhBabu7zP5ePjUYdE7qiWyfsocZH-rOBZIaEGsAitwqES2gkknRLA0SgzLVNSC6j2XbUphaznuHILzuvRr1sIIDl8280pVekhJeqCR89yN1aS8UjzSSBGyrn9G5MXHUaCRSqUxFeARChrdwb2j1v0Q-iph8S8iy86_9FvfV5qsM3wf8KUEiLo0spLd72rYcvWPwBnZiQUCDfb_zdRE2STZR_4KRJVBFMNFMAZVMuIZpxRIKT43Q-lc7wweEKYyPvVCQzAk-aueCc24BlfMFvwYyye9akkuaW7o89bTEj_wmDf3sTLpimoioYi1BwO4zerPEAWKQO3ws6UeqArDBU-yCgDS-6vnunGk3P-BxCOaaFdtxqjsShB4wMvUvzvJl8BfaU79Bpb2A2L4TbAUeTdZLIBQrMo6_8C8S1Bu21OHVcFsMW1k41YeHjWu890eEfRwBvur6q_pW7Oatca3DQmfMcPHubBk8KhDk-AeMTH1HyJ_l-9WBnPkXkjyfKwNPu0p-0ovNogw-RFoK-HgJZhTjVRKSkxtm8vHclH4pcFzc3JjO7W2Ba8lP497qHuEWOpr0Hbigb3c-rhCYU_D6sPnipNyOVgtWJ2Bec4Do393Ly9EBZzFDltraKwKmjZmvWCoUxVBMstO07cGMSeh7xpPTZ3kf8Cd5sbe2d94sFVsx4uOybsah4osKEuyE7R87dMmETlcMntWlLayOsSCel3RapBpwq7LCVEf38AUnAa0aaATpugxF7Ust40-oGR_fcgPy5obO7a2VRMoLrUEpMUbxbc1Hc=w610-h300-s-no?authuser=0'
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
         </section>
      </>
   )
}

export default Reg
