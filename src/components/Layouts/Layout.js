import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { Flex } from '@chakra-ui/layout'

const Layout = () => {
  return (
    <Flex flexDirection="column">
      <Navbar />
      <Outlet flexGrow="1" />
      <Footer />
    </Flex>


  )
}

export default Layout