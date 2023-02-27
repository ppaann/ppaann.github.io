import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <article>
        <h1 className='intro'> I am Pan Pan, a UX designer & Frontend Developer.</h1>

        <p className='intro-detail'>I am bridging the gap between design and development.</p>
        <p className='intro-detail'>4+ years UX experience 7+ years of Frontend development, 10+ year of software
          engineering</p>
      </article>

      <article className='project'>

      </article>
      <Footer />
    </div>
  )
}

export default Home