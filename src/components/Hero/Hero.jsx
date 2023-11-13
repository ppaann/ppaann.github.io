import React from "react";
import classes from "./hero.module.css";
import me from "./../../assets/me.png";

import { Center } from "@chakra-ui/react";

const Hero = ({ children }) => {
  return (
    <Center id="hero" h="100vh" className={classes.hero}>
      <div className={classes.info}>
        <h2>Hi, My name is Pan Pan</h2>
        <h2>I am a Frontend developer and UX designer</h2>
      </div>
      <div className={classes.pic}>
        <img alt="me" src={me} />
      </div>
    </Center>
  );
};

export default Hero;
