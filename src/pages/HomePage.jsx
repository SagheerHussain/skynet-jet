import React from 'react'
import Showcase from '../components/Showcase'
import Brands from '../components/Brands'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import SliderWrapper from '../components/SliderWrapper'
import MeetTheTeam from '../components/MeetTheTeam'
import Gallary from '../components/Gallary'

const HomePage = () => {
  return (
    <>
      <Showcase />
      <Brands />
      <SliderWrapper />
      <MeetTheTeam />
      <Gallary />
      <Contact />
      <Footer />
    </>
  )
}

export default HomePage
