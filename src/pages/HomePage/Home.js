import React from 'react'
import { Link } from "react-router-dom"
import S24Project from '../ProjectsPage/S24/S24Project'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled'

const MyName = styled.span`
  color: blue;
  font-family: 'Tinos', serif;
  font-weight 600
`
const DesignText = styled.span`
  font-family: "Shadows Into Light", cursive;
  font-weight: 600
`
const DevelopText = styled.span`
  font-family: 'Kanit', sans-serif;
  font-weight: 600
`

const Home = () => {
  return (
    <div>
      <article css={css`
      margin: 20vh 0;
      `}
      >
        <h1 className='intro'> Hi, my name is <MyName>Pan Pan</MyName>.</h1>
        <h1>I <DesignText>design</DesignText> and
          <Link to='/sandbox'>
            <DevelopText> develop </DevelopText>
          </Link>
          UX / website / mobile app.</h1>

        <p className='intro-detail'>I am bridging the gap between design and development.</p>
        <p className='intro-detail'>4+ years UX experience 7+ years of Frontend development, 10+ year of software
          engineering</p>
      </article>
      <article className='project'>
        <S24Project />
      </article>
    </div>
  )
}

export default Home