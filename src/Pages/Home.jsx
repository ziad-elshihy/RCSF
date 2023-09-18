import React from 'react'
import EmployeeSlider from '../components/EmployeeSlider/EmpSlider'
import HomePage from '../components/mainsection/HomePage'
import CompanySlider from '../components/companySSlider/CompanySlider'

const Home = () => {
   return (
      <>
         <HomePage />
         <EmployeeSlider />
         <CompanySlider />
      </>
   )
}

export default Home
