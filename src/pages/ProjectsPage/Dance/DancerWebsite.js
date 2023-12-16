import React from "react";
import Section from "../../../components/Section/Section";
import { Container, Heading } from "@chakra-ui/react";
import ProjectSummary from "../../../components/ProjectSummary/Projectsummary";

const DancerWebsite = () => {
  return (
    <article>
      <Container maxW="container.xl">
        <ProjectSummary
          heading="Design Story of Vivian's Pole dance website"
          description="The design thinking in Vivian's website, a Biochemistry Post-Doc turned pole dance trainer. "
        />

        <Section>
          <Heading as="h1">
            HI! this piece is still under construction. coming soon ....
          </Heading>
        </Section>
      </Container>
    </article>
  );
};

export default DancerWebsite;
