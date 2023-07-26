import React from 'react'
import style from './Footer.module.scss'
import { Box, Text, HStack, VStack, Icon, Heading, IconButton,Spacer } from '@chakra-ui/react'
import {FaLinkedin, FaGoogle} from "react-icons/fa"
const Footer = () => {
  return (
    <VStack className={style.footer} paddingY='100px'  w='80.77%' marginX='auto' >
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
            <a href="mailto:mailbox.pan@gmail.com">mailbox.pan@gmail.com</a>
          </HStack>
          <HStack>
          <Icon as={FaGoogle}/> <Text>Email:</Text>
            <a href="https://www.linkedin.com/in/panpanpan/">in/panpanpan</a>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  )
}

export default Footer