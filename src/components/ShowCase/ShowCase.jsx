import React from "react";
import {
  Heading,
  Box,
  Flex,
  Img,
  Button,
  HStack,
  Text,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const ShowCase = ({
  image = "",
  heading = "",
  text = "",
  liveLink = "",
  designLink = "",
  sourceLink = "",
}) => {
  const textWithLineBreaks = text.replace(/\\n/g, "\n\n");
  return (
    <Flex
      md="8"
      gap={{ base: "40px", md: "8em" }}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Box flexBasis="33%">
        <Heading pb="5" fontWeight="normal" fontSize="32">
          {heading}
        </Heading>
        <Text whiteSpace="pre-line">{textWithLineBreaks}</Text>
        <Heading as="h4" fontSize={"xs"} color={"purple.500"} mt={4}>
          Role: UX designer, Frontend Developer
        </Heading>
        <HStack mt={8} spacing={4}>
          <Button
            as={ReactRouterLink}
            to={liveLink}
            target="_blank"
            colorScheme="purple"
            variant="outline"
          >
            See Live
          </Button>
          {designLink.length > 0 && (
            <Button
              as={ReactRouterLink}
              to={designLink}
              colorScheme="purple"
              variant="outline"
            >
              UX Design
            </Button>
          )}
          {sourceLink.length > 0 && (
            <Button
              as={ReactRouterLink}
              to={sourceLink}
              colorScheme="purple"
              variant="link"
            >
              Source
            </Button>
          )}
        </HStack>
      </Box>
      <Box overflow="hidden" flexBasis="67%" boxShadow="md">
        <Img _hover={{ filter: "none" }} src={image} alt="intro" />
      </Box>
    </Flex>
  );
};

export default ShowCase;
