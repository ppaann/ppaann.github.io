import React, { useRef } from "react";
import {
  Heading,
  Box,
  Flex,
  Img,
  Button,
  HStack,
  Text,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useInView } from "framer-motion";

const ShowCase = ({
  image = "",
  heading = "",
  text = "",
  liveLink = "",
  designLink = "",
  sourceLink = "",
}) => {
  const textWithLineBreaks = text.replace(/\\n/g, "\n\n");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: 0.3 });

  return (
    <Flex
      md="8"
      gap={{ base: "40px", md: "4em" }}
      flexDirection={{ base: "column", md: "row" }}
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      }}
    >
      <Box flexBasis="33%">
        <Heading pb="5" fontWeight="normal" fontSize="32">
          {heading}
        </Heading>
        <Text whiteSpace="pre-line" fontSize="md">
          {textWithLineBreaks}
        </Text>
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
            _hover={{ shadow: "lg" }}
          >
            See Live
          </Button>
          {designLink.length > 0 && (
            <Button
              as={ReactRouterLink}
              to={designLink}
              colorScheme="purple"
              variant="outline"
              _hover={{ shadow: "lg" }}
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
              _hover={{ shadow: "lg" }}
              pl="4"
            >
              Source
            </Button>
          )}
        </HStack>
      </Box>
      <Box
        overflow="hidden"
        flexBasis="67%"
        boxShadow="md"
        _hover={{ shadow: "xl" }}
      >
        <LinkBox>
          <LinkOverlay href={liveLink} />
          <Img _hover={{ filter: "none" }} src={image} alt="intro" />
        </LinkBox>
      </Box>
    </Flex>
  );
};

export default ShowCase;
