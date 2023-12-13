import React from "react";
import classes from "./hero.module.css";
import me from "./../../assets/me.png";

import { motion, useScroll, useTransform } from "framer-motion";

import { Button, Center, Heading, Text, useMediaQuery } from "@chakra-ui/react";

const Hero = ({ children }) => {
  const { scrollY } = useScroll();
  const scaleContent = useTransform(scrollY, [0, 500], [1, 1.5]);
  const yScroll = useTransform(scrollY, [0, 300], ["0%", "100%"]);
  const xScroll = useTransform(scrollY, [0, 500], ["0%", "50%"]);
  const xScrollRe = useTransform(scrollY, [0, 500], ["0%", "-50%"]);
  const opacityScroll = useTransform(scrollY, [0, 500], [1, 0]);
  const [isGreaterThanMD] = useMediaQuery("(min-width: 768px)");

  const scrollToContent = () => {
    const contentElement = document.getElementById("about");
    const desiredPosition = contentElement.offsetTop - 150;

    if (contentElement) {
      contentElement.scrollIntoView({
        top: desiredPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <Center
      id="hero"
      h="100vh"
      as="section"
      paddingTop={{ base: "-50px", md: "-100px" }}
    >
      <Center maxW="container.xl" className={classes.hero} w="container.lg">
        <motion.div
          className={classes.info}
          style={{
            scale: scaleContent,
            y: yScroll,
            x: isGreaterThanMD ? xScroll : "",
          }}
        >
          <Heading mb="2">Hi, My name is Pan Pan</Heading>
          <Text size="xl">I am a Frontend developer and UX designer</Text>
          <Button colorScheme="purple" mt="6" onClick={scrollToContent}>
            About me
          </Button>
        </motion.div>
        <motion.div
          className={classes.pic}
          style={{
            x: isGreaterThanMD ? xScrollRe : "",
            opacity: opacityScroll,
          }}
        >
          <img alt="me" src={me} />
        </motion.div>
      </Center>
    </Center>
  );
};

export default Hero;
