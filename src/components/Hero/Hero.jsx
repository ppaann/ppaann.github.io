import React from "react";
import classes from "./hero.module.css";
import me from "./../../assets/me.png";

// import heroStyles from './hero.styles'

// import tampere from '../../assets/hero-tampere.jpg'
//import seattle from '../../assets/hero-seattle.jpg'
import { Box, Center, useColorModeValue, Img } from "@chakra-ui/react";

const Hero = ({ children }) => {
  return (
    <Box className={classes.hero}>
      <div className={classes.info}>
        <h2>Hi, I am Pan Pan</h2>
        <h2>A Frontend developer and UX designer</h2>
      </div>
      <div className={classes.pic}>
        <img alt="me" src={me} />
      </div>
    </Box>
  );
};

export default Hero;
