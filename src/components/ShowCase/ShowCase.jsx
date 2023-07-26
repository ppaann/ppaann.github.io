import React from 'react'
import { Heading, Box, Flex, Text, Img, Link } from '@chakra-ui/react'
import { Link as ReactLink } from "react-router-dom"

const ShowCase = ({ image = '', heading = '', text = '', revert = false, target = '' }) => {
  const rowLayout = revert ? 'row-reverse' : 'row'
  return (
    <Flex
      gap={{ base: '40px', md: '60px' }}
      flexDirection={{ base: 'column', md: rowLayout }}>
      <Box className='left'
        w={{ base: 'full', md: "50%" }}
        borderRadius="20px" overflow='hidden'>
        <Img filter='grayscale(100%)' _hover={{ filter: 'none' }} src={image} alt='intro' />
      </Box>
      <Box className='right' w={{ base: 'full', md: "50%" }} >
        <Link as={ReactLink} to={target}>
          <Heading pb='5' fontWeight='normal' fontSize={32}>
            {heading}
          </Heading>
          <Text>
            {text}
          </Text>
        </Link>
      </Box>
    </Flex>
  )
}

export default ShowCase 