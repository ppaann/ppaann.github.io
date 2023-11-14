import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import {
  IconAnalytics,
  IconFigma,
  IconHotjar,
  IconNodeExpress,
  IconReact,
  IconSketch,
  IconSass,
  IconHtml5,
  IconGit,
  IconMongo,
  IconExpress,
  IconVwo,
} from "../../assets/icons";
import classes from "./aboutMe.module.css";

function AboutMe() {
  return (
    <Box
      id="about"
      as="section"
      pt="28"
      pb="20"
      className={classes.aboutMe}
      minH="50vh"
      backgroundColor="purple.200"
    >
      <Flex
        maxW={["87.5%", "87.5%", "container.lg", "container.xl"]}
        justifyContent="center"
        flexDirection={["column", "column", "row", "row"]}
        mx="auto"
      >
        <Box className={classes.intro} textAlign={["center", "center", "left"]}>
          <Heading
            as="h1"
            size="2xl"
            fontSize={["32px", "32px", "40px", "48px"]}
            pb="5"
          >
            About me
          </Heading>
          <b>
            I'm a Frontend Developer and UX Designer. My goal is to deliver
            top-notch user experiences through structured, reusable code.
          </b>
        </Box>
        <Flex flexDirection="column" gap="4">
          <VStack align={["center", "center", "flex-start"]}>
            <Heading as="h2" size="md">
              Frontend Tools
            </Heading>
            <HStack>
              <IconReact />
              <IconHtml5 />
              <IconSass />
              <IconNodeExpress />
              <IconMongo />
              <IconExpress />
              <IconGit />
            </HStack>
          </VStack>
          <VStack padding-top="8" align={["center", "center", "flex-start"]}>
            <Heading as="h2" size="md">
              UX Tools
            </Heading>
            <HStack>
              <IconFigma />
              <IconSketch />
              <IconHotjar />
              <IconAnalytics />
              <IconVwo />
              <img
                src="https://static.wingify.com/gcp/images/vwo-logo-color.svg"
                alt="vwo"
                className={classes["img-vwo"]}
              />
            </HStack>
          </VStack>
        </Flex>
      </Flex>
    </Box>
  );
}

export default AboutMe;
