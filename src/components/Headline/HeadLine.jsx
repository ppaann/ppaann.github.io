import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

function HeadLine() {
  return (
    <Flex mt='20' mb='20'>
      <Box>
        <Heading as='h1' size='2xl' fontSize={['32px', '32px', '40px', '48px']}>
          Multitalented</Heading>
        <b>Pan Pan, both a frontend developer and UX designer, believes in the power of minimalism and aims to make the most intuitive designs. Don’t be surprised if your jaw drops at her enchanting visuals and interactive experiences.</b>
      </Box>
    </Flex>
  )
}

export default HeadLine