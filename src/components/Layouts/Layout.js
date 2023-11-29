import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Box as="main" mt={{ base: "-52px", md: "-104px" }}>
        <Outlet flexGrow="1" />
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
