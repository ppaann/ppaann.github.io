import { Center, Text, VStack } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useInView } from "framer-motion";

const ImageInArticle = ({ children, description = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: 0.5 });

  return (
    <Center
      paddingX={"4"}
      paddingTop="8"
      paddingBottom="4"
      position="relative"
      ref={ref}
    >
      <div
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        <VStack sx={{ img: { boxShadow: "2px 2px 5px 1px rgba(0,0,0,0.2)" } }}>
          {children}
          <Text
            w="100%"
            textAlign={"center"}
            paddingY="4"
            fontWeight={600}
            display={description.length > 0 ? "block" : "none"}
          >
            {description}
          </Text>
        </VStack>
      </div>
    </Center>
  );
};

export default ImageInArticle;
