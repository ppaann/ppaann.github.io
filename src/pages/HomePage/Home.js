import React from "react";
// import { Link } from "react-router-dom"
// import S24Project from '../ProjectsPage/S24/S24Project'
// import Typography from '../../components/Typography/Typography';

import Hero from "../../components/Hero/Hero";
// import introUx from "../../assets/intro-ux.jpg";
import ShowCase from "../../components/ShowCase/ShowCase";
import vivianDance from "../../assets/vivian_dance.png";
import S24Img from "../ProjectsPage/S24/images/s24-home-desk.png";

import { Flex, Heading } from "@chakra-ui/react";
import AboutMe from "../../components/AboutMe/AboutMe";

const Home = () => {
  return (
    <>
      <Hero />

      <AboutMe></AboutMe>
      <Flex
        id="projects"
        gap={{ base: "40px", md: "5em" }}
        flexDirection={"column"}
        py="20"
        as="section"
        className="container"
      >
        <Heading
          textAlign="center"
          as="h1"
          size="2xl"
          fontSize={["32px", "32px", "40px", "48px"]}
          textTransform={"uppercase"}
        >
          Projects
        </Heading>
        <ShowCase
          image={S24Img}
          heading="Redesign Suomi24.fi"
          text="Lead the redesign of Suomi24.fi, the largest Finnish online discussion forumcatering to a vibrant community of 1.4 million weekly users. \nUX: Revamping the layout and look and feel, improved information accessibility and mobile usability. \nFrontend: I modernized the frontend codebase, transitioned it from FlightJS to React framework."
          liveLink="https://www.suomi24.fi"
          designLink="ux-s24"
        />

        <ShowCase
          image={vivianDance}
          heading="Professional Dancer "
          text="Design and implement a professional website for a pole dancer. \nUX: Plan and Design with the client. \nFrontend: NextJs, React, Tailwindcss"
          liveLink="https://vivianpoledance.vercel.app/"
          designLink="ux-dancer"
          sourceLink="https://github.com/ppaann/vivian.pole.dance.app"
        />
      </Flex>
    </>
  );
};

export default Home;
