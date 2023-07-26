import React from 'react'
/** @jsxImportSource @emotion/react */
// import heroStyles from './hero.styles'

import tampere from '../../assets/hero-tampere.jpg'
import seattle from '../../assets/hero-seattle.jpg'
import { Box, useColorModeValue, Img } from "@chakra-ui/react"

const Hero = ({ children }) => {
  const image = useColorModeValue(seattle, tampere)
  return (
    <Box className="hero" h={{ base: '300px', md: '500px' }}
      overflow="hidden"
      mx="auto"
      borderRadius="20px">

      <Img src={image} alt='city'
        h='100%'
        filter={{ md: 'grayscale(100%)' }} _hover={{ filter: 'none' }} />
      {children}


    </Box>

  )
}

export default Hero