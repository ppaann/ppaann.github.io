import React from "react";
// import { Link } from "react-router-dom"
// import S24Project from '../ProjectsPage/S24/S24Project'
// import Typography from '../../components/Typography/Typography';

import Hero from "../../components/Hero/Hero";
import introUx from "../../assets/intro-ux.jpg";
import ShowCase from "../../components/ShowCase/ShowCase";
import introDev from "../../assets/intro-dev.jpg";

import { Flex } from "@chakra-ui/react";
import AboutMe from "../../components/AboutMe/AboutMe";

const Home = () => {
  return (
    <>
      <Hero></Hero>

      <AboutMe></AboutMe>
      <Flex gap={"60px"} flexDirection={"column"}>
        <ShowCase
          image={introUx}
          heading="Mastering Frontend Technologies on the Daily!"
          text="Pan Pan elegantly crafts outstanding sites using modern frontend technologies like HTML, CSS, and JavaScript, leaving no stone unturned."
          target="sandbox"
        />

        <ShowCase
          revert={true}
          image={introDev}
          heading="Transformative UX Design Expert"
          text="Her exceptional UX skills will sweep you off your feet as she turns the interaction between end-users and digital products into a thing of beauty."
          target="ux"
        />
      </Flex>
    </>
  );
};

export default Home;
