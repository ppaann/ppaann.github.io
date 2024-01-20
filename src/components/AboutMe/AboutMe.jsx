import { Box, Flex, Heading, Text, VStack, Wrap } from "@chakra-ui/react";
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
  IconAngular,
} from "../../assets/icons";
import classes from "./aboutMe.module.css";

import { useColorModeValue } from "@chakra-ui/react";

function AboutMe() {
  const value = useColorModeValue("purple.200", "purple.700");
  return (
    <Box
      id="about"
      as="section"
      pt="28"
      pb="20"
      className={classes.aboutMe}
      minH="35vh"
      backgroundColor={value}
    >
      <Flex
        maxW="container.xl"
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
            pt="0"
          >
            About me
          </Heading>
          <Box>
            <Text>
              Hello! I'm Pan Pan, a Frontend Developer and UX Designer with a
              truly global perspective. Originally from China, my career journey
              began in Finland and has since brought me to the United States.
            </Text>
            <Text pt="1.5em">
              Passionate about crafting seamless user experiences, I blend
              innovative design with clean, efficient code to bring digital
              visions to life. My work is where aesthetics meet functionality,
              creating interfaces that are not only visually appealing but also
              user-friendly and intuitive.
            </Text>
          </Box>
        </Box>
        <Flex flexDirection="column" gap="4">
          <VStack align={["center", "center", "flex-start"]}>
            <Heading as="h2" size="md">
              Frontend Tools
            </Heading>
            <Wrap>
              <IconReact />
              <IconAngular />
              <IconHtml5 />
              <IconSass />
              <IconNodeExpress />
              <IconMongo />
              <IconExpress />
              <IconGit />
            </Wrap>
          </VStack>
          <VStack padding-top="8" align={["center", "center", "flex-start"]}>
            <Heading as="h2" size="md">
              UX Tools
            </Heading>
            <Wrap>
              <IconFigma />
              <IconSketch />
              <IconHotjar />
              <IconAnalytics />
              <img
                src="https://static.wingify.com/gcp/images/vwo-logo-color.svg"
                alt="vwo"
                className={classes["img-vwo"]}
              />
            </Wrap>
          </VStack>
        </Flex>
      </Flex>
    </Box>
  );
}

export default AboutMe;
