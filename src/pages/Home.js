import React from 'react'
import Project from '../Components/Project'

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
        <h1>I <DesignText>design</DesignText> and <DevelopText>develop</DevelopText> UX / website / mobile app.</h1>

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
    </div>
  )
}

export default Home