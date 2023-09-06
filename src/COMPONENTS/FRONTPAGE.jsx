import React from 'react'
import './FP COMPONENTS/FP.css'
import About from './FP COMPONENTS/About.jsx'
import CompletedVenturesList from './FP COMPONENTS/CompletedVenturesList.jsx'
import Experience from './FP COMPONENTS/Experience.jsx'
import FadedImage from './FP COMPONENTS/FadedImage.jsx'
import VenturesList from './FP COMPONENTS/VenturesList.jsx'

const FRONTPAGE = () => {
  return (
    <>
    <img className='bgImage' src='https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg' alt='backgroundImage'/>
    <About/>
    <Experience/>
    <VenturesList/>
    <FadedImage/>
    <CompletedVenturesList/>
    </>
  )
}

export default FRONTPAGE