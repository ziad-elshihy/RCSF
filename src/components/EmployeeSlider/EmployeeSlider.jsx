import React, { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
// import { FaQuoteRight } from 'react-icons/fa';
import data from './data'
import './style.css'

const EmployeeSlider = () => {
   const [people, setPeople] = useState(data);
   const [index, setIndex] = useState(0);

   useEffect(() => {
      const lastIndex = people.length - 1;
      if (index < 0) {
         setIndex(lastIndex);
      }
      if (index > lastIndex) {
         setIndex(0);
      }
   }, [index, people]);
   return (
      <section className="section">
         <div className="container">
            <div className="section-center">
               {people.map((person, personIndex) => {
                  const { id, image, name, title, quote } = person;

                  let position = 'nextSlide';
                  if (personIndex === index) {
                     position = 'activeSlide';
                  }
                  if (
                     personIndex === index - 1 ||
                     (index === 0 && personIndex === people.length - 1)
                  ) {
                     position = 'lastSlide';
                  }

                  return (
                     <article className={position} key={id}>
                        <img src={image} alt={name} className="person-img" />
                        <h4>{name}</h4>
                        <p className="title">{title}</p>
                     </article>
                  );
               })}
               <button className="prev" onClick={() => setIndex(index - 1)}>
                  <AiOutlineArrowLeft />
               </button>
               <button className="next" onClick={() => setIndex(index + 1)}>
                  <AiOutlineArrowRight />
               </button>
            </div>
         </div>
      </section>
   );
}

export default EmployeeSlider;
