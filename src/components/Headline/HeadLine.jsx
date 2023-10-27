import { Box, Flex, Heading, HStack } from "@chakra-ui/react";
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
import classes from "./HeadLine.module.css";

function HeadLine() {
  return (
    <Flex
      mt="20"
      mb="20"
      className={classes.headline}
      flexDirection={["column", "column", "row", "row"]}
    >
      <Box className={classes.intro}>
        <Heading as="h1" size="2xl" fontSize={["32px", "32px", "40px", "48px"]}>
          About me
        </Heading>
        <b>
          I'm a Frontend Developer and UX Designer. My goal is to deliver
          top-notch user experiences through structured, reusable code.
        </b>
      </Box>
      <Flex flexDirection="column" gap="4">
        <Box>
          <h2>Frontend Tools</h2>
          <HStack>
            <IconReact />
            <IconHtml5 />
            <IconSass />
            <IconNodeExpress />
            <IconMongo />
            <IconExpress />
            <IconGit />
          </HStack>
        </Box>
        <Box padding-top="8">
          <h2>UX Tools</h2>
          <HStack>
            <IconFigma />
            <IconSketch />
            <IconHotjar />
            <IconAnalytics />
            <img
              src="https://static.wingify.com/gcp/images/vwo-logo-color.svg"
              alt="vwo"
              className={classes["img-vwo"]}
            />
          </HStack>
        </Box>
      </Flex>
    </Flex>
  );
}

export default HeadLine;
