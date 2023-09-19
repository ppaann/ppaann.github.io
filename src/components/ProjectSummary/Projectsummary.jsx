import { Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'


const ProjectSummary = ({
  heading = '', description = ''
}) => {
  return (
    <Container mt={{base:'20', md:'40'}} mb={10}>

      <Heading textAlign={'Center'} pb={{ base: 4, md: 6 }}>

        {heading}

      </Heading>

      <Text textAlign={'Center'}>
        {description}
      </Text>


    </Container>
  )
}

export default ProjectSummary