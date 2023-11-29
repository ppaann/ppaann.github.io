import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

import { FaSun, FaMoon } from "react-icons/fa";
import {
  Flex,
  IconButton,
  Spacer,
  useColorMode,
  Heading,
  Box,
} from "@chakra-ui/react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      id="nav"
      as="nav"
      className={`${classes.navBar} ${isScrolled ? classes.scrolled : ""}`}
    >
      <Flex
        py="5"
        margin="0 auto"
        flexDirection={"row"}
        alignItems={"center"}
        gap="10"
        textDecoration="none"
        maxW="container.xl"
        justifyContent="space-between"
      >
        <NavLink w="60px" to="/">
          <Heading width="80px" as="h3" fontFamily={"Raleway"} size="md">
            Pan Pan
          </Heading>
        </NavLink>
        <Spacer display={{ base: "none", md: "block" }}></Spacer>
        {/* <NavLink
        to="/sandbox"
        className={({ isActive }) => (isActive ? "" : classes.isActive)}
      >
        <h6>Sandbox</h6>
      </NavLink> */}
        <NavLink
          to="/ux"
          className={({ isActive }) => (isActive ? "" : classes.isActive)}
        >
          <h6 style={{ textAlign: "end" }}>UX</h6>
        </NavLink>
        <IconButton
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
    </Box>
  );
};

export default Navbar;
