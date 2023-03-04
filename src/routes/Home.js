import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Project from '../Components/Project'

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

      <div style={{ paddingTop: "68px" }}>
        <h6 style={{ display: "block", margin: "0 auto", width: "400px" }}>&lt;This site is under construction ^_^ &gt;</h6>
        <h6 style={{ display: "block", margin: "0 auto", width: "400px" }}>&lt;Expect everyday update!&gt;</h6>
      </div>

      <article className='project'>
        <Project />
      </article>
      <Footer />
    </div>
  )
}

export default Home