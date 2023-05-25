import React from 'react'
/** @jsxImportSource @emotion/react */
import heroStyles from './hero.styles'

const Hero = ({ children }) => {
  return (
    <div css={heroStyles}>
      {children}
    </div>
  )
}

export default Hero