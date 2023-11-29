import React from "react";
import classes from "./hero.module.css";
import me from "./../../assets/me.png";

import { Button, Center, Heading, Text } from "@chakra-ui/react";

const Hero = ({ children }) => {
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
    <Center id="hero" h="100vh" as="section">
      <Center maxW="container.xl" className={classes.hero} w="container.lg">
        <div className={classes.info}>
          <Heading mb="2">Hi, My name is Pan Pan</Heading>
          <Text size="xl">I am a Frontend developer and UX designer</Text>
          <Button colorScheme="purple" mt="6" onClick={scrollToContent}>
            About me
          </Button>
        </div>
        <div className={classes.pic}>
          <img alt="me" src={me} />
        </div>
      </Center>
    </Center>
  );
};

export default Hero;
