import React from 'react'
import { Link } from "react-router-dom"
import S24Project from '../ProjectsPage/S24/S24Project'

import Typography from '../../components/Typography/Typography';
import Hero from '../../components/Hero/Hero';

const Home = () => {
  return (
    <div>

      <Hero>
        <h1 className='intro'> Hi, my name is <Typography.MyName>Pan Pan</Typography.MyName>.</h1>
        <h1>I <Typography.DesignText>design</Typography.DesignText> and
          <Link to='/sandbox'>
            <Typography.DevelopText> develop </Typography.DevelopText>
          </Link>
          UX / website / mobile app.</h1>

        <p className='intro-detail'>I am bridging the gap between design and development.</p>
        <p className='intro-detail'>5+ years UX experience 7+ years of Frontend development, 10+ year of software
          engineering</p>
      </Hero>

      <section>
        <S24Project />
      </section>
    </div>
  )
}

export default Home