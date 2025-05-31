import React from 'react'
import Hero from './Hero'
import Sub from './components/News'
import News from './components/News'
import Testimonials from './components/Testimonials'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Testimonials/>
      <News/>

    </div>
  )
}

export default Home