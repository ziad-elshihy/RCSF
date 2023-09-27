// import Swiper core and required modules
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import imgs of Employers
// import img1 from '../../assets/Img-Emp/dr.mohieldin.png'
// import img2 from '../../assets/Img-Emp/Dr. Mohamed Farid Saleh.png'
// import img3 from '../../assets/Img-Emp/Dr. NADA AL AGEZY.png'
// import img4 from '../../assets/Img-Emp/Ms. SONJA GIBBS.png'
// import img5 from '../../assets/Img-Emp/MARK HALLE.png'
// import img6 from '../../assets/Img-Emp/Robert Patalano.png'
// import img7 from '../../assets/Img-Emp/DR. DALIA ABDEL KADER.png'
// import img8 from '../../assets/Img-Emp/DR. El Sayed Torky.png'
// import img9 from '../../assets/Img-Emp/DR. AISHA MAHMOOD.png'
// import img10 from '../../assets/Img-Emp/Dr. Obaid Saif Hamad Al Zaabi.png'
// import img11 from '../../assets/Img-Emp/JAMES ZHAN.png'
// import img12 from '../../assets/Img-Emp/Ms. May Abulnaga.jpg'
// import img13 from '../../assets/Img-Emp/Dr. Anthony Miller.png'
// import img14 from '../../assets/Img-Emp/DR. HUSSEIN ABAZA.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import './style.css'

import { useContext } from 'react'
import { dataContext } from '../../context/Context';


const EmpSlider = () => {
   const { lang } = useContext(dataContext)

   return (
      <>
         <h2 className='meet'>
            {
               lang
                  ? 'المجلس الإستشاري'
                  : 'Meet RCSF Advisory Board'
            }
         </h2>
         <Swiper
            // install Swiper modules
            modules={[Pagination, Scrollbar, A11y, Autoplay]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000 }}
         >
            <SwiperSlide className='slide'>
               <div className="container">
                  <div>
                     <img
                        src='https://lh3.googleusercontent.com/pw/ADCreHfBYmWTvbNcrbFqHYbE-adl-qbS8LzIWnI_XbQYhVD36prZaqZ93s-H2OeoIA2AnCSjzCF-oAhXpW5jb_Ub7d4TvdZxLE9EB0S4fwzzI_6N1-eMno1Ekzwee6XOOuwjGCFHdM27jEg8i95y3G5Bmf1LHP__KrO-8JfBFyMfeO2lujGizRdU_hiPn0VDju_FW_CyvdCQIKazAZo4SEDGjRL0rGZjT4DZ5e_CE2Y9jLUzzIvHZLx_Uzpt4M2Kl7jdyLph_r6PU16RLTBjuTK7gbv3NGVzqAS6kXHJYAbGs-mck3Pn1NlAEnAvNn0_V7cVqOTLqeE7R2g0O8bTe3QxiK4t2tBfjE-ofbzN2FjgpCvh7RFspNVXEapZkGfFw6TTRaKl31Z-_0J9RGByhY90AQ9FRvra2JkVJKYJkxfFIKzzBahz4mKQs20wdRZEwZMB4_Dv52Pp2qBwGrNxvw0MWo4LNzw9eyVO18lDMB0aVQ0EtLAcMjanTustaSr5oL74A9S6hnUz7YZS1q-H9tjHAQ9m3vxP2kPxTuIMvo_BqY_fx7iRf9AqZ1D4IzrrpLeS60htPWBLI8vD4ooHJUSwIBjufw6JUGcY3WRwUiAI3mBQKO_tzrQdgrSX47KI_I310spELzVEPtgN5t_ivuc7Wgi0q9LdDcZ78wsyvD2wH3EYjU9atcTXg9KaKd2FatbCfoN7A3SRgdzuEejDjHf2B7yJB7_jd-cT3C5q59ubxU5MA1lEY86leb7QNVE62dSteYslkz8cPJgVfER9ZP7FAwU2zIu0DUUfhYrNmvdX4ZQnUeddOg_HVL1yVVq_4VQ57ESz8iS4nKcYWVnrE2ABpqu5Tmy1MsVQy9GtaYNPEzt_SJpifdYMrAXnM_HydN1RCDPgtKPQexCMz2Lb=w171-h171-s-no?authuser=0'
                        alt='dr. mohieldin'
                        className="person-img"
                     />
                     <h4 className='name'>dr. Mahmoud mohieldin</h4>
                     <p className="job-title">
                        Executive Director At
                        <br />The International Monetary FUND<br />Elected Chairman
                     </p>
                  </div>
                  <div>
                     <img
                        src='https://lh3.googleusercontent.com/pw/ADCreHencd2bmTfKWSy4er72yYs7OiiDcsNPcCSx9KZXVpwL9D_T12LkLTbYx4z-ePxNjMQVOPievBFxawo3C_Wc0-NlYOtER2bC6OTXG9CkP6Ga6bVVB4ho2bgG0g_Sze1UZ1Wz2EBtwoaqFXcOmJLwNBA3Qn947lcl7A1e8aDGx3tBPunoUDSE4JmEqaSlx9QnJHIRs0kuJCwLCiV9WL4s-P30e4Pl1i09YFor4oSMNM8BgXfwgYkxgibO6_iaCgbuH-seZ3C0EksdfTfbLC6NdcwUZHmXLBvcKEvbfWG129MkA-XqZknwt_WFNYxNo5UQD56NzH_yrTwBgAZHoeMw1ugZKhs7vtvwpLhtCi-RLneBiSibUZWoiqu4CjeCu9Kre4MO-QmHzx4IltT-PRkoVIbz3K_LCK5BTaKJVRRxg6GC1Dlywp5kPATY-YdLDTFBlFOmqJFCE5VRr-nzSJ6V2zJvUNynM-Zhs_wkExUVLmanhUPJGLNDciEIt6ei9JwjOTHfKC6Da0OgmeEFdFqhkGGjAwVpZKHBUaQklIsxZwXNNdvinV9k1mNjPY4LZi-9jsJknorBPrssQHsi2S3uGr9mu2kr_SV4vPatDVPlIEYMeZvljJTpB_DX-KeFv-wCbKS8IdbiG-_nEOnMDrEem6mZY8ZvJ_A0TXdr4vPBHYZIsXR_uw-p1kWteEw-OMo-aAsPXhyw1-M60537qzB4C9N9DJSIGoyIMsCItqbStTHut-qyOhQwtPwNECPeTXezSCBZWXy_XhuPenlxVGPHVHWAGwqvkqbNOeFt4kjOdctIUh9tWzyAmDQlNZtagkahrEJB1l-o-WMgOel5vW-E5EOeUKy1RMn4v4bZNsaGradPQsrkh1zOiVICUgp9dBDMt8nz4o_JfOPnWB05=w225-h225-s-no?authuser=0'
                        alt='Dr. Mohamed Farid Saleh'
                        className="person-img"
                     />
                     <h4 className='name'>Dr. Mohamed Farid Saleh</h4>
                     <p className="job-title">
                        Executive Chairman
                        <br />Financial Regulatory Authority (FRA)
                     </p>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className='slide'>
               <div className="container">
                  <div>
                     <img
                        loading="lazy"
                        src='https://lh3.googleusercontent.com/pw/ADCreHd9rt6LXeMB6mZaKFGMZOQ7vdEDqY_B5arcXRUUPDR8lg5qlsFCJDH5Z6FyA0SQ08-brmOOYbxe8kDs3ue4PeLw_U5cD21vOoR3dDQW1ddWxmwNpU1mMmMnWaGsswEl6A4jNk4l8dchOGfJtWwOgi89fbvbu-N0N0D4EbNRPBzGM0QEkwIq5l30Viumw4XYGpTxxzmArR0Gaz0ccqj92J6yiE4Dcr2uByLm-TIBTgrOzJZ9E5FxcLciwjQkOsIYXgR7Uoh0E47b692xSw84_fG5T194MQHfM6NN65reZk6A46I_57QlMaioGxhcaTOZvdr0f_WjS0PxyLCFJuv9R1l0pdLoIMuATfA6ALCOUv7q3CYD_zs9OVDq2FPaqQYr8qMv8nZgL7j0pxVtuK-DsXtq9EtCgMOWLNqJHbZLhfjgt8RcSnwco98Y31BnDoyPr8y5Fl11RIVMRdNloBcDi3YT3xtambK66eH_z0t1XvSgA9IDPzANf-sx8yA-It2xNsYzpz5IFCXKsrDbWIlIeLSUpa9iWrr9dWv0bA9NGWLseVZw8s-C4H9I_An8NB20WMgY7g1dk_bB7kaUrZcH5cJQOEa9PM3vhf1lefQWPWSOG9Af0w57rSyiOghCEXp0n1D5RpbFBa9bVe8XG5oTu7Ikn5nvWqvnvLWPxdDterbbglJJ3b6Oxdc5KZ6LuuAd4aDgmov9zDoKLDgSyQAmNepUyDJda6z9WjyW2KDSIAn8yw-VwI9UqxlPL3YiluktpJlGv4fylIJn0zJXV6H15UO4sEmxnezCQbVxaqY2s6MPdZyBYyFK4AIK2xT0fQtCN9A2zgVgi7HIbWBbXIDGGLmLd_oNEZjJpKThkHLopwl9hkfoKEqIpftfOv070ZgPbN015uzdSpFcyHrR=w159-h143-s-no?authuser=0'
                        alt='Dr. NADA AL AGEZY'
                        className="person-img"
                     />
                     <h4 className='name'>Dr. NADA AL AGEZY</h4>
                     <p className="job-title">
                        Director Of Sustainable
                        <br /> Development And International
                        <br /> Cooperation Department
                     </p>
                  </div>
                  <div>
                     <img
                        loading="lazy"
                        src='https://lh3.googleusercontent.com/pw/ADCreHecn_e1OqETPXqWdlK77C3UpHmC8ON8kWmAOo_5NExO60vmmlcpHDx5uLWRf1VcQQV6a1NPkM_mtXeKCBYb4XY2qyP489J8aLtnpjgoAaI9RkhkB29cJe_3Mj_B5fn-Wox1P6kTKYsU1X5iIKeGEAiqtfckDaYwHPcVLVrxtRlklxv0TuxF6SpgmRg5tvn4t_GE39tf_Xr9DtH903EVJwj01BwU6ytKUAVftMstrlacl3XMht6MaO-wSRUxz_iHyxtDWi4glrSPk7zb6qiLwLgwPaKRd8rizHbs22SQv55pAGUvRYU7SbsfiUD9Ox4r8vMHroPtpOcIsG-aCXRiTYYZY2SBJ61itJcUjo5fbQ9By1Zs3sSODPw_1oerIm3pbRH5szjS2x4vRLqf_jpa5yOcmEwBrKLjSqSuSk4K4WOR68VI1NNBqjHCSnI8F6EXjSOynYZiLO4vE4IyJs4uqid3m3yz-LwUzZGgDRFfUQ2dl-UPR68aWZmYE9XemVOOQjc0qcclFJSYKATh7Y38xaZzpEAnZmkZ1bejOCV6scEisdSVZj5ynoWmiQgNn6zeho5qYeJDmBH6fL6NQbx2x0U8N6gApxHzdUFYyoLdwNXMlIT44jbZd07nrtW6Gmt2UZEPk3VGMnp16g_ZCQkP7e4_KViqGVDlMhRkr4H_lTSHQYXK-PiZPvmAuLD7x5PxRAe1HYnT_0h8TulV71MhAZKsiQdEcyJ9s-lRP5rAWJGgv8mjNKMGGvM2Kmv7maXVqev7gZr2iLshRcJxKVFHmQIE9oOO24BzYSoQPtdSJ9Z9hlMHfDjh6vJ6PxdjBlk68c8KTA_MjUn8wJOSAN1uBkfhPVjJNIGzNctR_YZSYVQjTq3IZ9jJCYMHiE0OLoQffSrNeQ1S42xnGt2H=w162-h179-s-no?authuser=0'
                        alt='Sonja Gibbs'
                        className="person-img"
                     />
                     <h4 className='name'>MS. Sonja Gibbs</h4>
                     <p className="job-title">
                        Managing Director
                        <br />And Head Of Sustainable
                        <br />Finance, Global Policy Initiatives,
                        <br />  Institute Of International Finance (IIF)
                     </p>
                  </div>
                  <div>
                     <img
                        loading="lazy"
                        src='https://lh3.googleusercontent.com/pw/ADCreHenoXqJB8SN9Pw9Oks_1cDeyYOjkmwkUDGlNJNAqTO_Df-eXQjrjT1pPma0_joUqLn5V7Np4DzQEi67e0MfG4HnVYD6dBywSnxiv-6qdSLqqHy8HuJyvhU0Y-k5BRpxfa8-Ib6xxlIcNkX5PCiLnyGWCsWRSEhXhZ34NQUibDvA-0DWwmyAaG3oRdtgAsKYY4KTqYgZShvDwxobie-i0ieIsFsWo4PjYJyHUvm7BFjo6tw1LoclRKzLCSCOWwAvxQHtTCN2Zw_W3V8Uecj4knTwxEFgTEY026iw95zny5x4ABjOv17HLZqScX-o41SFj2FBXfgy2JfZllAyJRtyJKpN6qEfy6I_8AFqSTdq0UxA3M7RR8Ce6ZnXy6AKfMGYKwAPgtlx_Mir12pD7r6yK3IQi007Ey36apoqhQJ32dFqSuhQ1jNKQWZVTch8SDn4s-npVMawUI0CteYoMLGvGY1EjRJeEofs1FDoIgBbCG2V_9p0Sd01YBgEa7Mm4-GEd92y5j4xFqrgmbw4dilSqv_pgTSvCXw0ohTFfgQ7yiexYu3X3iphuSoykYqUA1kYjsInf1alrdUaNA9ZYPiMOls7sa1gCKWi0oSQSDO1KQw_UgMl5RvRr-6mWRQXWQkwv-r0_S7G9phSLOSq7VsgqyvLmepyYw6s-jniDWSZfTm4xKd9GB-2_CYqbhtZRh7ykP8ml75ygpUVK-tGFxP7M_KzEyeph29lQZwDkR_feA4raMzwr-PWpfEa4C1I54CLFzeeoQBmZAcUmALVRnaM6vzC1pDlbnMijpDWlJH_CiTQhIuQhKXllLKDIfE4VybqBbEwQpeNtTHJYBhn9W9ne7JAftGwxPIC_qpRztTzW3o3C0qkTyX7eD_g5XRKhGnkMqn0AeoG1D-r2tVE=w195-h166-no?authuser=0'
                        alt='Mark Halle'
                        className="person-img"
                     />
                     <h4 className='name'>MS. Mark Halle</h4>
                     <p className="job-title">
                        Senior Advisor
                        <br />Un Environment International
                        <br />Network of Financial Centers
                        <br />for Sustainability (FC4S)
                     </p>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className='slide'>
               <div className="container">
                  <div>
                     <img
                        loading="lazy"
                        src='https://lh3.googleusercontent.com/pw/ADCreHc-w5hg3JKdsSnAjhY3c09-cokbZ-Y46EsDwP51p54LtNcgq3KoxzezjEgGpdFprh6FCU-f253KikejxBVniKL4tcNJZbDp3neSE2aaubUxW3fieMQWSijkZHMdGOQj9LxADvqTgWYZdEM8vv5ADN5dKP_tqrCdPD9sOP3ycvGZUDk5O9d8-ENN_D8Jq_frmvUhRxKe9oeOcbO4c5D_YERAkO0jBnpacxq_Nlgrk_7RiKEDLiETO6s29DZ0qZ2vVcYiYIuoc3NkmiKQjIqUPjjRQ2lZi7uqGUEon5yQ1LQjiV3F27ZnfIdfySkPDpMo--XYnb9a-63T4XQ3iB5ISgrIMzIGMGBAi3ekTvIz7clErzWyrjtlh6IG_NmvlaXIyzKzAh5zpA7IlNXeVTWI48aCFX8PwHPZP868tJsrn4yANl7CVz0T9tTbHgmPNadYehqYxc1nZFomQtZG46ZkJxvpmnpt5AwqXwhA4vCus909P8pRre4HYjRkJmce1ns3zaL8xc7YNzKSdp-XWOHidh2dwAaChllTn4vCWrlrZB15cJU04w-Hhb0IeBqWdBqgaxYVLkzarB08rsyMsATNvXG1hdXy6zRoQByVjwhJ2LHH54QKrlxAcwa0iz9barI0y0Frk3vdOoGf5j_thdzN-39fgezZmi8zXi1aey3nsCsN5DXYIkeQ4K4AqT4mrN0kb5pHm_os0C9SzgrqP5C61gtK-R2w8ywrmMF4rfv_3CBrpUidvIqV6_yQ7CEgCSvAOy4raGydCQy1u5s82w1QeBM3bkpCrh990sVvlNPYRL-1l5RZzX2vRmILe1FKW2lY0qL3rHwutczV7ZEJVLeNQmqrtXxryBDAfls_yb4oyE-ytRIUn0jD2C_M3dcW1CcUSHBf6YARaM_wzMk6=w182-h183-s-no?authuser=0'
                        alt='Robert Patalano'
                        className="person-img"
                     />
                     <h4 className='name'>MR. Robert Patalano</h4>
                     <p className="job-title">
                        Acting Head Of Division At
                        <br />OECD - Financial Markets Division
                     </p>
                  </div>
                  <div>
                     <img
                        loading="lazy"
                        src='https://lh3.googleusercontent.com/pw/ADCreHe4rRsijT-4m0401QP0qTM4NdD_Ed7JYZ2PG_Qs9EfIIxGO4yeMdwmORBi6EsYwQh_wf2Zd1fubznZHKCppvKN91QsRBjtyquVQkOc97-0rgASpezZbKd__djHiaoB8gMF_YuXY2kf0X0OmhfhjD3zN7-VmKFpC3Rzw51uoLHnBi7JuDfzYav3hTIL0OzU-sCUz1OnteqUvCGRiiZKumUN4V356XLX2_TXFzpwbvJJCLxBklB4-YI2wO7JVNplQFgbbPsYNJZv5C3EsNDLrAwLw7EcVGFDysXp-QL8Q_z3GkCSUxt3dFY7cU2X9r1ZZK1fMCGecMakdNXHQYRmTHMm9LzAOhB8MwHvmym-jF-H2_C1YsDWSTkBHL6AeV806we9jgVOQmNqe9Yd-7zo4D6X7uoFqlqPHK34A7QN-rRcLwHofQHQEdlXpeeBGQhbr57cJZeKOgpHrNuwNvDndlWYDCHqVqCofIFMDynK2cOnkohk1IsNvdlWpSVXLPwdUgNIqvlonWZ_d6wpOreHhlzNHRe-J6DWJ8K67cBtZrqpd2Nek8ZuQg3QpA2QGdoVguV4cdlDrJqba9t0ki7ZGPo3Q9tBhHiHCelkEkqFGOgEQmMeOh1t4MGQ9RbQ-KNPKmHhL33KUHv1-LDlwV-VZgHkBVQ9FSS7-NBFxC5XA5LoPauaq9jbUQT4cptmHFyHiqCDP5O_M_tjPcSV-fAcB7lKQh7PHQhWguKB_TaeFXa50GL-J6CzXPKUDyYoNy40DfVdfFiIbrovf4TdDUbmkQhCvVvUC_xtt1_kXThmdCA6XT-0bvOVH_aB0ZXdFKIpVupiEHTO3J0niH505IPu7J7WUFFTTnIuS16F-kInV7NqY5o6H0tp32wL2uhf4khqB334aPF_sLXUz5g4Z=w161-h176-s-no?authuser=0'
                        alt='Dalia Abd Alkader'
                        className="person-img"
                     />
                     <h4 className='name'>DR. Dalia Abd Alkader</h4>
                     <p className="job-title">
                        Chief Sustainability Officer of
                        <br /> Commercial International Bank
                     </p>
                  </div>
                  <div>
                     <img
                        loading="lazy"
                        src='https://lh3.googleusercontent.com/pw/ADCreHdgyKkbZhS202_X-xcTIseLGv656hXUjoIR3RvOmksKNFuHOhYVjGAhll9yGquST3IPhK9P31RQlx7KXPvp1loWrQrbppqZ2Xrvvx13cGVPVNBCv9eYMRDvuUasze-HJzb0TZxY0sexOhzvdXc_IF6hHRuoDH6lrlgdOSh-j_sKo96jYvv9kTBJ3-TwHVCPgFXAkNKzy4mHlGDHeQneq9ofN7_z8gW1ZzMSgPeLBJv4uhQ-rWpiZLAJZuJiL3Dq3zYVXz-kqHv2A91lJ4A36MJC2BjQB9V9SNr5c4YWfvQHYLNwZraKua4sIz5149uSF2gn14jmTrDMxNFISCLNE2ldD-6oTe70QsWOpDuD7MZKT7MSlrv4wr4NhceM2-rKoR2aWyPWeo_oUXOvBUZMCjT_HtWabLgCQr9BwUyeYybT5GksIdiObpFCSg0cHH-1nhQZCJryyL8eyIi3W6gzteEwcC5xI7zk-Polhbg46bYr-n6iIizG7FBI1qr9AfJkdCXxWeAvn8bs7qj6zqtiBJ2xDRwDMcCDUawMe7yY40Sejy9yjbD_VYctDsNhjpKrXMBqI-J92Esx8qaZmwdcc3r7fjsxrhYEyuhTobaHJmwAJjl2Z-EwTX1wKXfmPxTGhrACew5icTmM7bcOmWcuMOL7xVG2ppP9GPtgg5vKSOC36pAKhlIRJYbBdRkaJR8sZFS5FsE5CUe74b02yDkXmLgqbdIo9rlqjti26_qHbQ6JJK4RVXXVN3uw93ZroZAgvPCTVpRf03jSyvaoo49JdY4eGdO8LGtFTpXH8WFMnugcQcDm5vr8sV-YYla5pF5dxfuQIEZJ6InN521Ry6VR7WKYgVkd165_NrXPy7Sw9W9h2T3y21EP5mM1nEFYPh9cw_e5QG3Yy3T4gFzi=w190-h177-s-no?authuser=0'
                        alt='ziad'
                        className="person-img"
                     />
                     <h4 className='name'>Dr. ElSayed Torky</h4>
                     <p className="job-title">
                        Senior Advisor at
                        <br /> the Federation of Egyptian Industries
                     </p>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className='slide'>
               <div className="container">
                  <div>
                     <img
                        loading="lazy"
                        src='https://lh3.googleusercontent.com/pw/ADCreHcHIDKioB-EERBNXRteK4WWlCA23ZBPgyujcv5Lvdfotrs3jwHXFb1oG6ZVzdkGZB6-pJ_QrHngy3Zbgn2flcFeMSbOkT8rzhES7X8YXTZxtNFBOo0O0txzI_fW5Ymyvz8JnL5Qdrid-0KptXYCsLScZ2vtyDI2gXubEU3QAbGrjAvmEqJMKOv8qV4SXiAdz0C35Z3vfSJigG4Yps9cQSwZm6bIm8C0D8F7l25SQ-fu4F-S_gMAKdkybT5OyOpnWHvb1C6-KH3fGTc_GLaFQA1tTQ0BkuDlywgomALmZUgR9ubgLRfm0FJc-8Iue9jkjxoWnFEUszehwVGIzFecwG1rrmcNG-0lZo8v_Cug4SLsCKsaY5-wMDkpBxLteaBZAowLi_TA1lft29ljKX15cmBuy7zb7pQcbJeRDbFuw_lZHmTXqHGeIUx7FeQa9cKbvdkyCu5hSMEF6J86moU0s9l0UfMfbM2HZZyiJkdtweNFHh-xUbELsxqdO6Px6uWutVD1OM_Kkgj2E_00VAUnIE3fm0i2C1qtBVgsPhuGIGUZoKrcN_3LTz81tbPjmNecIA_IBlEe9s4RhL-JDEg7QjSEEvvhZxEoD7pMtSmydvh-4Wd_Yexo3MdzFH22QZk66FyBxfCuQ_UO2GhOotg5YPy6iu2NvgsFY5dFXwCG8QPggWexKBGnDTxEF6SFnWyINXGhapWiHgN7MbL-8TFNOKzxohynlb0KcF8JHkQ1pVym5HnOJaA-tGsC0iOo1NImPhqkgOkc5dEtCq-0VBHK85Htd03QHqFu4_1sFJFVz5UncqOrvnjs2l-lNahws3eMIJMVStITAwC9XFWrx7GLLhr34DamN25yUFfER35SA7M9oVlaCudgek_IxkLKdcdmUMBHOLOS3CjsDIqr=w224-h196-s-no?authuser=0'
                        alt='Dr. Aisha Mahmood'
                        className="person-img"
                     />
                     <h4 className='name'>Dr. Aisha Mahmood</h4>
                     <p className="job-title">
                        Special Advisor to
                        <br />the Governor on Sustainable Banking, Nigeria
                     </p>
                  </div>
                  <div>
                     <img
                        loading="lazy"
                        src='https://lh3.googleusercontent.com/pw/ADCreHfz_VyCK9F8OtI2_-gPAIdRJvC-HuLRqG5iguv9EVdwRN1Tlc2ccX4fkFZ_UAcwBAs3anUmgPGeZ8jixyE07oTxUIIjob4hUKMJAtQwfS2nlNeFblvuVKTehknq9g1mM7OSzCFuQPcejNAlUIInb4F03T18RThqeHzeE47imdf0M0jKFqoSUYkgwzX9sMYMVdQflqMJbu3a6KKChC7HTmAlus0dNfuhx9D2lMZH-M521Czu155j6xARZjOryEzqYeGQDctoHNyCRd6kickTfDeOuC7Iys1RqWYZfrMJzqgMC573UcC1Ek_gY4pOZ287jPLzD_cLJKdNPsXYvSWtvTG8C4EIhiLPkVAdVuphiId140Q3UPSpziG7Ekkf75RncG-AUki7xLTW6gftD5qPc7FnXmMPoVtm9b6iKbneAf4IqcJncb8eGrVMUsn3RzrJ6I1QDT79Envbv2O4yarlsXrxF3Gij61nhQiT1PuYcj0c9_LOAqDKOXzb1iYkwbytlYpAmIwgGQv_98dDRHxurYIVsLYgRuFwGlNzx9skpezBboaUT30olZ7l3laEVmrjVsAU0JwTjZ74scxWpmWEnSoYh0Pfn4KPzCICabNUIrfj2MqUrPzXaxin-hn2BJ8lpVVuvvqg1yuLzXL-geHhTtcS3p8oKp9-UfPlHIb8vuZ5BHwYbuq8RjnjT_KcvA7hU1a1jrhsVtlBrl6gSFdDXNCSAtWWttgx8kY0Iohrs8uzIuy35DACTPJsMqpChSlVdEa7hUEYxpysZOp7U4WpNw3vw0lIXaqRUL1KEbk6oEyo5mQlVGd2ycpdsqeyYmmOnWsxlwE4BSAOlGZ140Hf_Gmp_sRoaB9j060s2lHSB9qGX-NEeA161bxrpljvzu1ygKr3QWWsgZFVRpfu=w185-h200-s-no?authuser=0'
                        alt='Dr. Obaid Al Zaabi'
                        className="person-img"
                     />
                     <h4 className='name'>Dr. Obaid Al Zaabi</h4>
                     <p className="job-title">
                        Former Chief Executive Officer at
                        <br />Securities and Commodities Authority, UAE
                     </p>
                  </div>
                  <div>
                     <img
                        loading="lazy"
                        src='https://lh3.googleusercontent.com/pw/ADCreHdpmCfRpGUhl4RIf2T0Kl41VE5fb6YBu2OQr-ErJO_SQfkBiIRef_wwIj4N5P3yeIldP5pVnivXhCtcN-CJFmfFQzFqrTAQ4PEh9ekl9NPm3I41DevxYdrwBzCmlr2zX8eW_iGPqqJFCBQBkOxfIHyXKPQqbrvFSPSTgDYHKmVXGF2vRU47rQG3aSqY8EHuBO1kC94Oq8qqnI8rMPdvvAKukB7M24D_34dRULGOXO1CAE_AviYn5MVatqh_TNtiZ0Ukzli1iFjTB_Y0HouC39vPcu9uLBg7JahEFCjo3qfnGuK_KtBt0HxtpErnIM4Z1-JOK1jo35W_hp-1DN-SxqCQoo7CGjoEg0-exST6qUUV5I7ZKAM4V3bX-dKpZ9FYnNbBxk59CJfd_EvoY7w3MDrfHQCmQwxMaJ8zU9RtSjHM-7HLnEMW4nKou-mO5XIowW3XQ_bVHNKkqKBk9UJ7AEL4E0ot8ACXOVxPUfUXkpKXjZnXXGKxblyTddq96FM-GvGsS8DsRST5jXbpULLA0HXo2-EsEJw1wAzRtmhW4tkHq9H-On-PMaj2BMV08_WKSQgO1mCmSoybrzrvRtlzsfW7IdNUMrNCOwIRcyMwatRjNqj5FpVspXI0PAEFoyhVKgUvIHOoKldvAah2RzlSYumqryrgJwwfZbxR3CoPP9fQp-sTtt-Yg6y0dSZjnAeGfxHsXxp9EEeiQF2q7lZwOUy3LiTTpGc7fopsW8sgq6re58hES2iRDv3mRQ2hdshOE3R4odoyT8LMxyESA9gK4aryHWzHT0foIybVgYJlXZ3jFlloSA-GXpAQPG2zlUwMTCAwYreWE2wp0ePdcXV9r9SAQV12BkIGjY7IjOaYwqsAqqiWXUdrsKhDNATm3AZPURfuVJcjmedpIc6W=w179-h148-s-no?authuser=0'
                        alt='James Zhan'
                        className="person-img"
                     />
                     <h4 className='name'>Mr.James Zhan</h4>
                     <p className="job-title">
                        Director of the Investment and Enterprise
                        <br />Division at United Nations
                        <br />Conference on Trade and Developme
                     </p>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className='slide'>
               <div className="container">
                  <div>
                     <img
                        loading="lazy"
                        src='https://lh3.googleusercontent.com/pw/ADCreHeu0r1olVXByyZqeSmT0ZrHjkkXbL2FBMpIntR30p7HgNnqqgFS38WpdFIfWcinoVvLVGcU0ecpnnKAfriiOOzA6qbqhVy559NrLs91z8sdrd7pq53E2yzN_TLdGIOo8z6yP8VYrfsHfpq99t8pr-rWZL-vHmZtGXcUuho4BIdU50KiTVbpUh1s3lR0UzKE0vz0QcTJ8XIQDaAua76KjchE6nvmMaBwA9-dq1txTb3bG11CMoCTQJMF5r20um95MApDVJDpo1rM4xilO0v0bQk-BbjWwIJ59kiNjsJ-CXlcbTmwrHkE5t-HyzD5yV4wNDvm9cwzK2LjIUb8dqyNFpipBmvFwnBtdvu-9gkNcIDVrWR-1vXO7WbhJ7lvQ_2OeUL1FPnQhzog4vYiVsAC4g8xbgIysH-lsLiCSvPMGQc8B_IcAbnnkUC4MhqyhkACNU-GTLmok7CHtn4e0lEmcvDak-K_g9P97mLo45y46xZNbcozxs2LjULmnV-6m3m84ZKtvHD1Whoup_R28wyKvqkjsK3GV3uFrYsRHMgc4qfdQN1vNRxg__Zb_mU0yjmQkjFY_NmL_EhZosxX9QSqohFglwJQqUR5W278qMSYRCf8VulNtkieUVqaOgYEPo2C35P_QiKc_I4B2qf6mikDfmD1jq4bXPzj46tOtYAzkDn_wL_HaM5q8ETHNhna9qnbed9rB-LKJe_x9-JsQXxeYvO5z8Z05hxhDo3ubBoC1-XMgbg3mJDOVzGXNOgC3isR2scSfu19dnrOE6l-T52GFf-_RsFPJd4RlI9PYK9ieh_MsCzPHOSjohKNBnLWnjThkaj2MWMfS0ZbtI25b6lf8OAYB_aVSRHnTiaSwSjUZedqpW9eBlQCNcDjYv2gSujKVyjtySUtei2dZBPw=w401-h601-s-no?authuser=0'
                        alt='Dr. May Abulnaga'
                        className="person-img"
                     />
                     <h4 className='name'>Dr. May Abulnaga</h4>
                     <p className="job-title">
                        First Sub Governor - Technical
                        <br />Office of the CBE Governor  Financial <br /> Inclusion Sector Banking Reform Sector <br /> Central Bank of Egypt
                     </p>
                  </div>
                  <div>
                     <img
                        loading="lazy"
                        src='https://lh3.googleusercontent.com/pw/ADCreHfwUBBrCDlsBHpX-QSGgObigcm4R5yu4ZuxVmpjt7U2NbmN_lk572gJZjJbYI9DACSsF5B-5tBUtEFDOZl-A56el_MtfII2H44exTQNjIHtRcyAf09FVDv6t5v7r_pAyDnR6IzitNqW4QuXBGbOcCczmDg0rSvS6j4rPhp6koocCb0nuZbf8U0ftRCdDtyA1n0OEiBSHKS4dH35ekef4M3geyax3oT2ypw4oTei1zTRUA5KYzrj3JA5fVH2VFH5OqAYXk9FOIt8qerkKXaHyRut2cu248u_ufWsCFt8Kj-CufegCFOvEnLvtJ4d6a3Thr2L8Gtlg9b_bKMHfrE9RdhuAHbKPBlGmgENJE47odzimi5GzgU-hCPSDZ99JJEfHbje2xqcb0DfdLYU7JP57IeXXMWtWKRxdxHLB7KeccevCJPUO_0jr-nENp0s5rdp7GmVVoRck9B867AKi9xU3zqJrRXYDuK3hA1byKHWv5M0kydt_4-K8rrq1y5qnKqkc1jImGql_6z-FCO3kPjoi8Qbpq3j_VdhtlOU-pUV_5IQyHKE2yr-knJI58U1xKVkyqWKMdhCyys5R2tRlilbHrjeW-02uyQcCHMGu9a2CTRyxqYKgpapBcxIOPTJ9qfvmMMdk9VBjApxPzIZ7YMBFW_7u0OvrWlUN4aiwNpjZj6bqsj6liYm0C-KV9eoldD_CW5V_C0ILu4Wb4-_PRmuGgW3Tp-9SVqvDihUynjULE_3V-LC89F_x3I7w8A3I2FIw6y8poclDzTW2XUH0NgpOeBZSMeLFBOdx7ShosHxWYeBHSemfeQIrkCCy0f3YOhG_rRGqMAO3ERB7E41YKrRpsdxYuGtq0KD9i5X4zHuFG7X3lHnaJwJWWPuGExvGMsv9fIm8VyjMD7ch4hz=w601-h601-s-no?authuser=0'
                        alt='Dr. Anthony Miller'
                        className="person-img"
                     />
                     <h4 className='name'>Dr. Anthony Miller</h4>
                     <p className="job-title">
                        United Nations Sustainable Stock
                        <br />Exchanges initiative Coordinator
                     </p>
                  </div>
                  <div>
                     <img
                        loading="lazy"
                        src='https://lh3.googleusercontent.com/pw/ADCreHe3IVtRhFxpeRmjSOK3FcQtFvyhfGC8UX05SSRIQmH-2b0oVUnV8zUbWipuFNd9YmdVPTWLo_x5ECCtJ554Szy1zOKctGTuHGRihvUDJ6W5hvL7IIWfBZnStPHcK60SdqmDiJZuI4HOgcHxKEfzdSoVLD751z57EPIqhrZnBeYDTTwW0M-BJyaW79wldJuLCt94D8MN-3LXXDnZEqGKFHf6Ldx9A9TuPBECohkUEhfQF9HqUakDyXtOWWIxqBo1X837ErPbbq31PmVk3KgMJNeTT-DS80FMe2pFrq2mIVlaAU6iiS9kpKNOa-WBDgpVPAI5MswzFv_9yEaP0eKWzBhS_VSYngXBovr-pSOMiQv3DD6g9AL4maQgAO0RfdET55cnAEpOj92iO5JhQ-LhFVHF3B47txvReG6IwHuLsf2hHkDgxnJ6bzQhV4QnZjSSBp7B9yiPn6n5X3tLnvl1QFaol6R5LqGaHfQo3lwtDLJkis6GxrjTPEeS8GD7Xw23icFLfAxWGLdFqtYVQUYEPa7M1SL7tuYyY0cJlZ83nL1mAtz-rpfNjuzFamDSIryAjIlP20gEUfpZyD34nANRkZ_zd2EtbdituXdD_ObtoJYoVSH-Klo9bmx-PiGkLP7YJzQgQVjYkaAQ7IKSYM8siNTmlJSKz-KMmc1i07WScwW0OcKB6S0ImIyEFLbrk-IifS1wH88SyFNiF4tOpfx7u-8HlBiCJXIOQBOuwU8i5YSUoPFdejfyJO9BDd4qSw8MtBgmvIzqwWVj8wJSZmuhlfYgCyWuaCYvKJxYPf9EMQCvGjFuFtyi7x4r2Q32MwK2bK7kk3CBLgByod0_XHbABf_SyRePAmjF6hqTQWT---1s_5UbtmHpqJ4fxMk8XQCJt2lmcR9myiBS9SgG=w175-h156-s-no?authuser=0'
                        alt='DR. HUSSEIN ABAZA'
                        className="person-img"
                     />
                     <h4 className='name'>DR. HUSSEIN ABAZA</h4>
                     <p className="job-title">
                        Sustainability  Expert & Advisor
                     </p>
                  </div>
               </div>
            </SwiperSlide>
         </Swiper >
      </>

   );
};
export default EmpSlider;
