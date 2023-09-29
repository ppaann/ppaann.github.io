import React from 'react'
import { Box, Text, HStack, VStack, Icon, Heading, IconButton,Spacer, useColorModeValue} from '@chakra-ui/react'
import {FaLinkedin, FaGoogle} from "react-icons/fa"
import "./footer.scss"


const Footer = () => {
  const bgColor = useColorModeValue('white', 'gray.800')
  return (
    <VStack  backgroundColor="#0000ff50"   >
      <Box w='100%' backgroundColor={bgColor}>
      
      <svg
        className="waves" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink ="http://www.w3.org/1999/xlink"
        preserveAspectRatio="none" 
        shapeRendering="auto" 
        viewBox="0 24 150 28"
        height='150px'
        width='100%'
      >       
        <defs>
            <path id="gentleWave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        
        <g className="parallax">
          <use xlinkHref="#gentleWave" x="48" y="7" fill="#0000ff20" />
          <use xlinkHref="#gentleWave" x="48" y="5" fill="#0000ff10" />
          <use xlinkHref="#gentleWave" x="48" y="3" fill="#0000ff10" />
          <use xlinkHref="#gentleWave" x="48" y="0" fill="#0000ff10" />
      </g>
      </svg>
      </Box>
    <VStack paddingY='100px'  w='80.77%' marginX='auto' >
      
      <Box id='thanks_note'>
        <Heading>Thank you for reading. Feel free to reach out for any further discussion, feedback or questions.</Heading>
      </Box>
      <HStack display={{base:'flex', md:'none'}} pt='32px' w='100%'>
        <Heading width='60px' as='h6' fontFamily={'Raleway'} size='sm'>
          Pan Pan</Heading>
        <Spacer></Spacer>
        <IconButton aria-label='LindedIn' icon={<FaLinkedin />} />
        <IconButton aria-label='gmail' icon={<FaGoogle />} />
      </HStack>

      <HStack display={{base:'none', md:'flex'}} w='100%' pt='32px'>
        <Heading width='60px' as='h6' fontFamily={'Raleway'} size='sm'>
          Pan Pan
        </Heading>
        <Spacer></Spacer>
        <VStack alignItems='flex-start'>
          <HStack>
            <Icon as={FaLinkedin}/> 
            <Text>Linkedin:</Text> 
            <a href="https://www.linkedin.com/in/panpanpan/">in/panpanpan</a>
          </HStack>
          <HStack>
          <Icon as={FaGoogle}/> <Text>Email:</Text>
            <a href="mailto:mailbox.pan@gmail.com">mailbox.pan@gmail.com</a>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
    </VStack>
  )
}

export default Footer