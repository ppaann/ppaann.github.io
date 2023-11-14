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
    <Flex
      id="nav"
      className={`${classes.navBar} ${isScrolled ? classes.scrolled : ""}`}
      py="5"
      margin="0 auto"
      flexDirection={"row"}
      alignItems={"center"}
      gap="10"
      textDecoration="none"
      as="nav"
    >
      <NavLink w="60px" to="/">
        <Heading width="60px" as="h6" fontFamily={"Raleway"} size="sm">
          Pan Pan
        </Heading>
      </NavLink>
      <Spacer display={{ base: "none", md: "block" }}></Spacer>
      <NavLink
        to="/sandbox"
        className={({ isActive }) => isActive && classes.isActive}
      >
        <h6>Sandbox</h6>
      </NavLink>
      <NavLink
        to="/ux"
        className={({ isActive }) => isActive && classes.isActive}
      >
        <h6 style={{ textAlign: "end" }}>UX</h6>
      </NavLink>
      <IconButton
        icon={isDark ? <FaSun /> : <FaMoon />}
        isRound="true"
        onClick={toggleColorMode}
      ></IconButton>
    </Flex>
  );
};
/* 
        <ul className={style.ul}>
          <li>
            <h6>Email:</h6>
            <a href="mailto:mailbox.pan@gmail.com">mailbox.pan@gmail.com</a>
          </li>
          <li>
            <h6>Linkedin:</h6>
            <a href="https://www.linkedin.com/in/panpanpan/">in/panpanpan</a>
          </li>
          <li>
            <h6>Source:</h6>
            <a href="https://github.com/ppaann/ppaann.github.io/">github/ppaann</a>
          </li>
        </ul>*/

export default Navbar;
