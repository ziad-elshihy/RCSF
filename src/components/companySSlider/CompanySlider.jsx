import './style.css'
// import img1 from '../../assets/img-slider/Picture1.jpg'
// import img3 from '../../assets/img-slider/Picture3.jpg'
// import img4 from '../../assets/img-slider/Picture5.jpg'
// import img5 from '../../assets/img-slider/Picture13.png'
// import img6 from '../../assets/img-slider/Picture8.png'
// import img7 from '../../assets/img-slider/Picture9.png'
// import img8 from '../../assets/img-slider/Picture10.jpg'
// import img10 from '../../assets/img-slider/Picture12.jpg'
// import img11 from '../../assets/img-slider/Picture13.png'
// import img12 from '../../assets/img-slider/Picture6.png'


import { useContext } from 'react'
import { dataContext } from '../../context/Context';

const CompanySlider = () => {
   const { lang } = useContext(dataContext)
   return (
      <div className='wrap'>
         <h2>
            {
               lang
                  ? "الشراكات"
                  : "Partnerships"
            }
         </h2>
         <div className="wrapper">
            <div className="slider">
               <div className="slide-track">
                  <div className="slide">
                     <img
                        src='https://lh3.googleusercontent.com/pw/ADCreHdxlQygU7uE6f8QjqaEJyV2tmftBIjZGQOOcnnQU7mCYFfUEJ974ZLlg5HfDvJlAJa3t-srKb3M_S1eAqABJN-IRlqUOAvtL0uEmtouFzFVRoXcSLGVliDolQwLjehLcKf-yRTVCdzAMBWh1R01rtUy9O4xJYa_LvodJtYrsyWdUXg4ZSTPXSd5b-kcXJxIQbL2nCQ-Msd5rLWSGxJK6PME5RVbFU-zCxtaBLaMcr0FYo5hOA9GHkdtJBjzfzkqn5YJxMFYUUMYQxsyGJyllI3rRQnwa0pvM3f3uOcu2xHiX72nFHfnbpqQILKJuHjlwyvzcGnvgxJXz6_t6Yp_XoO_v6pt8CpDjcPPZ-bP5JWTDPl70DjRbvmaJ8Rkq_h0UiQ_rwqRPEN9DCmHRAU7fU1nKfOLSnsei93YCXHU4-FnfKzfgUwhRkdScgxAQynnY7PJ0iTnEQCJjJRSkz5npnsJy5uaZSLaVtnUfO5dCn98EG18Oiz8pWynoYSfo-6AetPHBVlH3DU3HSZruNXGljK4N-BoHXKe9X4JB8f3vOMmiiiO1mMgxdmbWm19UmdPC4KorbN7-Pg6wpnlONdC6K2FFnZlzF8nzvpe0nig86XRPbfQdZNjhpQXdFVtSbwNnnaxqNPpAkeUChM-aV44a7sA-u60I5dujenpjdGbXu5uQ6F64Kd311VV7UyhGqXq793wyS6a6Kg3a8kCiGMxlAKoEkS8UA9VIn1Ss-TA4yNpuL1mZ68zIf3P_cewwDU7lyxPX75M1Nmxfg4PHcsCz-2YOolmUTpWrnzYWemNl4t7x6cX3hghDaQP3NuSonOnGgydgpG-PpRnqFsHMJlsDDD0kH_M4RnPI4anaAU_VIyW_Mn-cnnL2Bpc3Qg7OWFiRRh7dcytMsABwKgS=w681-h453-s-no?authuser=0'
                        alt='img1'
                        loading="lazy"
                     />
                  </div>

                  <div className="slide">
                     <img
                        src='https://lh3.googleusercontent.com/pw/ADCreHdirvVYfEgbrYtJkuV1cZ2uMrYDGkceHzLAp4Fj_9gjAcaBxKnn25BM3KhfzaGUD-3H7JV3_XMDzGuMQB6dqbvNDTVzfxebihV4I-tlTNiITxrjMpnJUOv0U4q7vXVKJBBKUkwTVrtCGsc-WhGwYVm8BfOCS0k7LJAMeFbYY3bssfwOACNTPyGZBj0qxcN8MFR-kR5zl1DlVqYVWj_jxlEqrCwl10bvdIsRoVNMgeyLaz3ptjDKAq7-gzTp8N2UzRONUT9_iuKVX0fvxYDYSqldNG7XTsara4sAM7GuRSdbmwXkyR5ZHkV9AsP2KfI7YrEtavqlCZ0udboU5fveqkRQ4LSnLkjJXiQjnuEWqaXqzU3JclODzgJwJCG5_MR41I6U2-_NJUxu6hMPuUCbfH59dK5nns90FDA6MwAAkT3bQvlAFuC7T66esipLo8tetw3Gst0TQA59LaDKPdg9EnYRwy7ykptNSeF-rmzweQPP0x61wmlHdrVNFfD7kimREAiMqIlFFfdtoRRE-OWJaHTSsD22HhISTYMIfAmt0P7YiLT_Yw3cwLnTEQK4s4KyPstBpUA0bI4PZs6WyUpZKVA3tCIzZcgFLpuDaejrNFU9kP6BjkSb3SdpF_biarljeuTmCUz17Z_KW-0BtDBtxQKQvElrDi4Hvo3PgETwMkxB3LiNT1gdRD2CObtqDExQQL8sPFk_FK8R4nXvO9cha6vTSvI61X4U0azlERcZ9iiHWCKYGzeDsSkB9nhl8nMun-dx8EW8PggR42EVOefYF3RYPov-CUzOGTntP3S-pzFOBENTbBLLDlgC5-GxASiI4X3V9k78cQAKQkMNN4VMQqfBtQBaFnqdXY6fBvLZMIh4qUmJYL80eL_VbzxCcQtACxmxAzWKBasI4dIw=w681-h354-s-no?authuser=0'
                        alt='img2'
                        loading="lazy"
                     />
                  </div>
                  <div className="slide">
                     <img
                        src='https://lh3.googleusercontent.com/pw/ADCreHepyPUE7SyQHuO3msb6y2x3pSIMha3VJ8U-Ol3SQ2GI0W1lw03wzM0pTd9C00N5qdTMZGsvdzx218IRHm4GHrzo55vOgBFYnME8lEYcZLs9oOsukCNtWxxGouFX5It_iQcEz2WqijHEROe5fj_lNM4jQhM_v_Covh9en5xFPf7uu40eWzzIDIFjgwDjBcC8EeaHX9Y64MW2Sb2a_8vJ_Ph1WYH-Z7g9RY7vazrGWy2q-jL4UBVzVIS9YeWOVo8eJq53Ct0WQfL4O7HTBghaAI51Il4QfD0vOq-jt0aAEQB00Dnk6rAHXe5dWFSzThw61e6gR3LEnVdxrD1hEYAtv_WSJb-MAEDlxC6rQZ_w1siEyYneaovvLN7e1zzObYwvb3abEyPLR0CIXfyOV7iKuXAkRpLtKcJmTB_SWF4-irNQoR_RIM1JdmRMXkme8n7QGlHropR95dH342BTzNmcnXBJA3VMcPPbPvI5F9bWitlWz4WVJzSQDhn9PP2nyV-mZBKsTEOiBcoY2OOBgpt9UMpqKt0lMRlK0OwdHpr5cWJytEkmID6Ocg7l-qQOCeudq8sWbQ2N5HALprUnLQGIozAjpnQvPjB06Ba9RQ0l9vyHFV55EpaW0gYCuqmOOwyOWyaQQHt0ZmHkW1bbx4yRg1xHVQnJmbbFBQraKqWJ6ufYUtiuPNeELoUEwVGDNer2Aa3plfMb2XgHAH98uRgM_3Mq0bft15oDk35MSe9QuFppiNbRFkt6s0hZKgur77CG6Zm-rlN3mEgKdI7akGninzJ0QqUkfqv7q0ibk2EoUCYPw6fSRi5G9U-5be6HCYIav-JvUWNyFFDvrBYCzARgHaMHJ0NmSVo6XO5CrJvIku7sD80k7USHGeX9A8to5iAyALiBY-SSPwJV3fUE=w681-h439-s-no?authuser=0'
                        alt='img3'
                        loading="lazy"
                     />
                  </div>
                  <div className="slide">
                     <img
                        src='https://lh3.googleusercontent.com/pw/ADCreHcr9RZaKElegcY6Misp_Q8lrswJxbCjSxrq4Oo4nAl82qIzjdj4UJXiR9MayRNMdktOJ0G3BuHMKKGKZE_eoifhlYKSEI5TYD-TVMTEZd_F1FvF8tnMGr0bkjNpS2_XxKK3QaIh7QEwEyvgCo9d5t82G2kms1XA9ETqRXfaHdsCPLrU42hTPZLlzVJoMqQ-k-9QqUi5yAcY6l0FTyNwEI3sEsZ-gK2iF26Um5joE7HEa5Hw8YTqO6DzjE33yMv7wVP4k0fkYIaYg6M1_0C1TbYAZw9kzXIgyujV3ktH_lu9P3nZRQCrM_4aJYBF-ktS9Jd_Vy6u0Ooe9Ou34sTWIa2ogdBx7pHTRYeXLktdNcUGUdqgdPft6FqC7XxwSeR-mowJ_E858IdSPNpL0B9_tYt8gHf9NLefSlWJV9avCrE-AhkzRvpYP_2HeNVArBax3ceMFR5ddfFp08R7R2ZfbMo5uieKt_IEvReG_gq4Rxe3L1iPDLpxbfLPjqln-EborYLg9siTla4vlGHp6Atwgy8AN0VH6OHZ6QFpDwiubT2f9BDlPIQ8F8lRmYvGlpr9A0ebpnRZQtlZk99PwneysyEsneSa_ONc1bOarRTw3drDNeKm28QLJfy22POfRjydH01jtYx-jy3_ysk2YAMt16K0Pgvf3buCATgGQRT8JBRPeubYoBKkfiQ-HYAfsu6mQ9dUmhP1D2DD47RxKHhTvTfGwG3OKuctepMDpy8PW7FsxFGHDh60otFdntFRwRcAd8ZdnDEBe8KdCQ7631RSgldZleqAkyhH092DnUPZuQmYmuWBraOt53sqJk9J1CciGGlOrXpV4gDTXG7sWlR--puzSDssdqBMlwSXwb-00CwcBB8mjZPi1tLVRQqgD6UFOjOws7-96T4eaqCZ=w300-h148-s-no?authuser=0'
                        alt='img4'
                        loading="lazy"
                     />
                  </div>
                  <div className="slide">
                     <img
                        src='https://lh3.googleusercontent.com/pw/ADCreHdDMPYHdJGTiF2iQy1RjFiwyBFkuapm85yuMBh7HH1rMSg5OBQKqE7IXjZRmhUtxw9gFkr6dmlWbuVi8BP7ziphHMZNP4QlzQehTQu4LHK1FW8UMjp9E-CtUR7T7m-zwbFhstTuLosD585-cA8H2bQkEY9sCcrgHOnWgVNbuIqoZ31PFXk7S092CiSPnuRNM2iu1FYLdKV1XYDhUGaNmNYhzWcztDbNfJ6aTl9zfNrNega8rIaunbZ9VBubd1to_H-BScFlA3qQcisGM7L64KFJbv6Hmg_WLiYNW6eX9cjiLkQwoJsuHVRq8GFViab-ypH93OansYewhUc7UYZkIa8UvVvgpf8gkDsQ0-TP_VFLjIxnRsQ_V88xEqgzEwMsYFHsXHQHWGKJTC5qrJHLxne7NE6i_BU-M7oY0PYfpMuTeaf39-cKc2LmNHICvRBVHLkLD1o0xUu-W83vvt-ihFu5s63wlllUUdMASKMx4-eXJ4z7Toc8VdHR5ORhtGAfjuxcCWghG53G-DQn2RtLC8CHwrQZkNHYyyGJd_kBfVeBuLsFZrM2tNlVyHkmzTDy-vlowQ0a7vAIHP33HCUf6mQ05sA6YDt8IdZamR-_PDK-DE4VrHgZzrPRlbbYzrSxKG1mmcqk9uPX8a3WdQUuS1TWVjIX1udQAp-M823W8zOnpx5o8hYKTe6dvtFRp26sFK1wbuS-Et55gqHwby1hoaDjT60eQyuZjX9KZuSK0qPdsEc55d97LsRU3rIDFnxbL8A1IHc1alFUsXCIuBYB36fsdoUMDkbiA8YNS1DeyyYreND9OrfJZEvE-C3L-YamLInQSIlGsIAJDQqw-xYfozJ46GpADUFHkl9I5doMPv4bTJqMgL-3TjZKo6JQFHMbD4DyQB2B5Gu_RcaR=w633-h221-no?authuser=0'
                        alt='img5'
                        loading="lazy"
                     />
                  </div>
                  <div className="slide">
                     <img
                        src='https://lh3.googleusercontent.com/pw/ADCreHeSJHAogLks6PO09KgUV97I5JJuMdTWJlqLetvUBw3YrrtTx7jVcjrA3WSiTX5YpHcHqwncwxiaqF3COVXj8HXlvfmjRKuUfHqTY_gwoff1D-4Mh-GcwiJSZk4_4M8jqqa49gN1z1jmaUZUDZzZ_sCUCsqKZOkqnp5QhiIpjT9ePACneGs97kAXQy7Sv7Zsn0OIiLHWKIKQbSRGSpJCAYNjj-ks5V_weIvdg1p4sUI9JNvcHVqCTI0wexCas7wwMDbnmxZA7nCf4LAwF5PxJv6Q-akvdTMlHJRgYNNA4bIE-GbFS6OQ-XnfM6w3XXWwU3Huj-ZSacYJ-D4ggbmty54iAk16mvc_INjeIpTDUEclvp3awSnzhHmCN-CaX4DC7xZ1E9cvFbdbLwKK5EGG36PB5pGpftX6ZdqPDT4wmcu_BNQMYZdy7YHrwTOUmDq3prhhu5KD3jgBtRfEY61Tn2v-__4Gpjfm8W4flHyoIYfXVX2CVABrE5rOi5E3Xe_R7d1z1JfQFEMWGz4RpQjHv7g18hJUCtWDzV5mlxx0l9jVsO5XLo1mkcjSsHGlugjMX20R3T8JCm7QYZxblsdU2xJH_9lA-tzr-QHjrrfhGOTvgC0r73y-H_nVl2Gs_kP7Tpbt5QMP8WPlEiW_sMi5sFmsLX0k5CMx7sjUoXB5o_sDLVZ9WHKwQZWmwdIdErb3K8WigDhdxqShSeu5ZV0F3MLRNwUdatJrv_udjZGhXti-ziiHCa5Azh7oGybLsXm4EVUARz5brflFqaRqcAn7536hyDIHWWhQ2W6C6Cbnzl3Pg6CzrYyt9U-A7OzYWvgf4qa5cz_wkm6W0FQG3p27fiMZrxLwu_uD8rgICgG8GYeQm1NJtzpNNs5VEd2T-3xxb5609XfmakH_ZCsJ=w550-h289-s-no?authuser=0'
                        alt='img6'
                        loading="lazy"
                     />
                  </div>
                  <div className="slide">
                     <img
                        src='https://lh3.googleusercontent.com/pw/ADCreHctmGh7egusZRoXul5P6T81A7uTXqmFQZybinGHCXNJbWPnog_32J0ksb_-V2XTuKt5Zm_5c0hYKjRcOHH1itRUXH6wbWoZtenr41kW5fiJMB_QC2Pcl5q551bHryOEUmosxGY9rS7TAjiblw8Vfh9_Q8nFvWWJz3auyBLRjcjxB7WFTVWCCfAsk2INrBUrqJ4N1NAPZv5WqXNAR4ETYVBsJdieFuprZFtti-lERgvMvxrpBHYqE20vInU9xRaVW2EmZillIl8TNLHBHLIMva_ew6YFr9RQXPgWyZ3uEoDTtFxesb1ohe2NMP6qpP6fe46_WOFtNwyOcRgKDmzdh93W2EbCw2MjY8ajWO-sL8O9SJkFCNU7ew5w6QEc8qpwwhKmMUD0NhVZx2RTk8yF0f_grTx1lWIF8C_1EX5msjMiclPA2ZOFHXjcinqiChbLUQ5T2chryCvA0J5iA5xzkGQ2FlTZt2WhOtFilhd4imd_ebvNhTEmO5QURZu1bD504bSm2ij1h8xt462WT0_h1M5b5tXWC75GgDeYEimX1DGVJ4n9fJck_FNdGaFa6p0WQdbQLS-YBxfRZfM4K6ljm_zwoIzqlXY_UCBJrv5d2R2sm33vr3Kdi6HkCO1i_XxW03qOcSNW5nWiAcJtmxcC0c0AmqVZ3C7ZaEzaaNil99ijQ_3SOEvqSqZLSObdSNota6OVxhlUT8RM19yd3fNCGSwayYgg6JdrCgTYTb4q9qsNRfJJ4kdRK0sH3qdD8YZ6oV826f7-WD3lIq_-3ahJZj3BuJysetlx-nwsA6FtvWPXr5Nbg3FDebhbQhDaOJK4PIj2v-0oAlqg96e4juJwhppDym8YAHzSwiMqkOkAu8LG-YGINfTRLulZJPrDWdX9_-5X45pApUvsOry9=w640-h601-s-no?authuser=0'
                        alt='img7'
                        loading="lazy"
                     />
                  </div>
                  <div className=" slide">
                     <img
                        src='https://lh3.googleusercontent.com/pw/ADCreHcmNz2DrYlAENX9IM_WAjuCazZAsvIpkyCPzNLSEyqpMUQqsIeim2LTDor6_wm2lHTNwsmiAsIRWii43ZkWr3N13j5R6u0kp1kbmvkueUYwat91_f8mS2zLUoTZohbzujx_RDFlazcYoYg41JfT6VfK7m9PMjPGNk2e_8SVkrIoLYv0qHD8CXjAj5Ui6iUfD_5SQlT0TYI7s5lTZGmO06MGJNihpybS7R-gRBfSXK3n3AKuIG9f0kj-keWTQiFU75zMOHsq6-eamIhWabxe54zJACgcxSxw1u-6i3AlPN6a7bvYA0B4OaMPpVD8JTxh8oGmskUXKR2hGqb7L9-InvGxbPkmosVscgpJ3ZckOnOsctb9nFn55FuoJMVFzlopK_LunOlhGSjU-mFPjkHhR4hHS3_XaSYhv8Oc9oRS6CdUE0V5_377hDHv2pj2NSJ1UR2kVEFzu3C-ew_zTMb1XHHGQUueLFAsPuIqdioUY9NLKFD7TdIAjnV875xmgYa32XDTZcCTVPb-YuY_btA5ja3KDYUDmqwNWxirWzqiJ0pQSwz74UjWqDRB5Lk4qktrQd6ZFmj8ufe6RqwLtzRlFOPWz5qfX08kBs8WtS_aEL3QZ0TkANJ5vzSkHEVh4Rjhr5x14lIpPkA3Km3eXivyGoBI3sJsm0pT0rqLareaZeGwZUP9H_EhYAQOW_NnZWJQYZsfWRvoprBSEO6FQ7gf9IpEoj_JN4DjYbQkZih1nW0Nc1ZjIoM2TJXdyYhPB31WPvlMcUpByDXlX2LFFMTODkTFslsGgWrJopIJUsRjdpBn_CthQkRBzV-kRm2cwBjTXbDSBFaxS80kSecuP6VSOSGrzR_D4OiqZ1kB7zRu5mJnWS38A5j-s3rB1IXr3ahz29-H5TIqfO3hEKaP=w197-h89-s-no?authuser=0'
                        alt='img8'
                        loading="lazy"
                     />
                  </div>
                  <div className=" slide">
                     <img
                        src='https://lh3.googleusercontent.com/pw/ADCreHcr9RZaKElegcY6Misp_Q8lrswJxbCjSxrq4Oo4nAl82qIzjdj4UJXiR9MayRNMdktOJ0G3BuHMKKGKZE_eoifhlYKSEI5TYD-TVMTEZd_F1FvF8tnMGr0bkjNpS2_XxKK3QaIh7QEwEyvgCo9d5t82G2kms1XA9ETqRXfaHdsCPLrU42hTPZLlzVJoMqQ-k-9QqUi5yAcY6l0FTyNwEI3sEsZ-gK2iF26Um5joE7HEa5Hw8YTqO6DzjE33yMv7wVP4k0fkYIaYg6M1_0C1TbYAZw9kzXIgyujV3ktH_lu9P3nZRQCrM_4aJYBF-ktS9Jd_Vy6u0Ooe9Ou34sTWIa2ogdBx7pHTRYeXLktdNcUGUdqgdPft6FqC7XxwSeR-mowJ_E858IdSPNpL0B9_tYt8gHf9NLefSlWJV9avCrE-AhkzRvpYP_2HeNVArBax3ceMFR5ddfFp08R7R2ZfbMo5uieKt_IEvReG_gq4Rxe3L1iPDLpxbfLPjqln-EborYLg9siTla4vlGHp6Atwgy8AN0VH6OHZ6QFpDwiubT2f9BDlPIQ8F8lRmYvGlpr9A0ebpnRZQtlZk99PwneysyEsneSa_ONc1bOarRTw3drDNeKm28QLJfy22POfRjydH01jtYx-jy3_ysk2YAMt16K0Pgvf3buCATgGQRT8JBRPeubYoBKkfiQ-HYAfsu6mQ9dUmhP1D2DD47RxKHhTvTfGwG3OKuctepMDpy8PW7FsxFGHDh60otFdntFRwRcAd8ZdnDEBe8KdCQ7631RSgldZleqAkyhH092DnUPZuQmYmuWBraOt53sqJk9J1CciGGlOrXpV4gDTXG7sWlR--puzSDssdqBMlwSXwb-00CwcBB8mjZPi1tLVRQqgD6UFOjOws7-96T4eaqCZ=w300-h148-no?authuser=0'
                        alt='img9'
                        loading="lazy"
                     />
                  </div>
                  <div className=" slide">
                     <img
                        src='https://lh3.googleusercontent.com/pw/ADCreHf12lwIbAytH-ZGs71TmbAyNShIDafiW_q9hUH7MknzwwU0L6FzNwKDXqA9Y3LTF1bYoMW7n3uhbrWqbMXDe4Ah6nFVjea1TrKcMfN6Zwbt5TJKLHO8ZAK_C1sG3oG9kDu-rjciujqlqTTkLLtrweqcf6TqEGEUqC-Mrf7HOeHFZzntZW_-hWg1Fa1K1qfaJ2vRpqmwoDEC7hRLwMM5f-_E4-qEx9IAnay4480i7E6QIumJb-oG5mlR8VmQDX-VzivaJqnK-NufdojxLxpk-hr8DCpOQV5cxuU1v7cX_m7ar_viaSi8s2FxIk8mFKU97QiSAZBNbR-F3kjEsncdBinbDGGO6Z45sADqwvP_l20-0ctertvcDHicCe56QE83dW9OAD25_NY14b8I3CB0F0tjP4aXNWTUgF4tSzSUirNSMlA7JS5GldUSwJLdM9fIbz4a7Qz4GeT2qyiAZl1_rlRm0lDsyZ-tCEt8pRFD5fEq00GSSyf7FFNjdkoP1e9O06c2m0oUuAYBFqpitURiyE4eXsTSVgKji2GwzkjYdQlQUwDltaE0m6xDnAvO8xI0Z8XvIrlbKp2Is_bmaHylGyuu6uGwLoY2WyXh654uTXtR45HbnZOt0XPjCsz4vCQIPkM9Kw9irYaPAEYxSUMSDr4TNdIu5SXMlPT6C1HJu4avMvAgWBTUgkRwRYT5SZqUwWUzFCindCx5HlXjseS1WEHO70ZlR9u412Q8SLOSPjQjKdctQ4wGJnq4eTxD_LIoj-Vf8bYAZUyJE96siM7Vud1_VDeyIDLPw9tCSMnrB5giLRp2W85EgXh7MzwtmrOZ-1f6fylKHKe9CydbQdc3ZC4zK8nfw2AeF0ug911Yrk13vtMLE8ZTz0zNtcBRKapy_VYs3_Z-6SnOUSWw=w600-h600-s-no?authuser=0'
                        alt='img10'
                        loading="lazy"
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CompanySlider
