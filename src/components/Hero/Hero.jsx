import React from "react";
import classes from "./hero.module.css";
import me from "./../../assets/me.png";

import { Button, Center, Heading } from "@chakra-ui/react";

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
    <Center id="hero" h="100vh" className={classes.hero} as="section">
      <div className={classes.info}>
        <Heading mb="2">Hi, My name is Pan Pan</Heading>
        <h2>I am a Frontend developer and UX designer</h2>
        <Button colorScheme="purple" mt="6" onClick={scrollToContent}>
          About me
        </Button>
      </div>
      <div className={classes.pic}>
        <img alt="me" src={me} />
      </div>
    </Center>
  );
};

export default Hero;
