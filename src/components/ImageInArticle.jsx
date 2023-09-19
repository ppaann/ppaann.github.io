import { Center, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const ImageInArticle = ({ children, description = '' }) => {
  return (
    <Center paddingX={'4'} paddingTop='8' paddingBottom='4' position='relative'>
      <VStack  sx={{'img':{boxShadow:'2px 2px 5px 1px rgba(0,0,0,0.2)'}}}>
        {children}
        <Text w='100%' textAlign={'center'} paddingY='4' fontWeight={600}
          display={description.length > 0? 'block' : 'none'}
        >{description}</Text>
        
      </VStack>
    </Center>
  )
}

export default ImageInArticle