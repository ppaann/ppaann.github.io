import React from "react";
import {
  Center,
  Container,
  Heading,
  Text,
  Image,
  Flex,
  VStack,
  Box,
} from "@chakra-ui/react";

import Section from "../../../components/Section/Section";
import ProjectSummary from "../../../components/ProjectSummary/Projectsummary";
import ImageInArticle from "../../../components/ImageInArticle";

import vivianDance from "../../../assets/vivian_dance.png";
import logo from "./assets/icon.png";
import insta_1 from "./assets/insta_1.png";

const DancerWebsite = () => {
  return (
    <Container maxW="container.xl" as="article">
      <ProjectSummary
        heading="Story of Vivian's Pole dance website"
        description="The design thinking in Vivian's website, a Biochemistry Post-Doc turned pole dance trainer. "
      />
      <Center>
        <Image
          src={vivianDance}
          alt="Vivian Pole Dance"
          w={["100%", "80%", "50%"]}
        />
      </Center>
      <Container maxW="container.lg">
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          pt="120px"
          pb="120px"
        >
          <VStack w={{ base: "100%", md: "50%" }}>
            <img
              alt="dance logo"
              src={logo}
              style={{
                width: "130px",
                borderRadius: "15px",
              }}
            />

            <p
              style={{
                whiteSpace: "nowrap",
                fontWeight: "600",
              }}
            >
              Vivian's Pole Dance
            </p>
          </VStack>
          <Box
            w={{ base: "100%", md: "50%" }}
            pl={{ base: "0", md: "15" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Text pt="12px">
              Vivian's pole dance website: introduce Vivian as a expert pole
              dancer & trainer. Discover her journey & unique courses.
            </Text>
            <Text style={{ paddingTop: "16px" }}>
              Vivian showcased her dance and work exclusively on Instagram. I
              suggested creating a website to enhance her professional image,
              inspire others, and reach audiences beyond Instagram. After
              convincing her of its benefits, I designed and developed the site.
            </Text>
          </Box>
        </Flex>
      </Container>
      <Container id="work" as="section" maxW="container.xl">
        <Flex
          id="role-description"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-around"
          flexWrap="wrap"
          alignContent={{ base: "center", md: "normal" }}
          pb="14"
          sx={{ "> div": { paddingBottom: { base: "16px", md: "0" } } }}
        >
          <Box w="200px" borderTop={"1px solid #6e6e6e"}>
            <Text pt="4" fontWeight={"600"}>
              My Role
            </Text>
            <ul>
              <li>Content Creator</li>
              <li>UI Designer</li>
              <li>Frontend Developer</li>
            </ul>
          </Box>
          <Box w="200px" borderTop={"1px solid #6e6e6e"}>
            <Text pt="4" fontWeight={"600"}>
              UX / UI
            </Text>
            <p></p>
            <ul>
              <li>User study</li>
              <li>Requirement Analysis</li>
              <li>UI design</li>
            </ul>
            <Text pt="4" fontWeight={"600"}>
              Frontend
            </Text>
            <ul>
              <li>Website development</li>
              <li>Deployable</li>
            </ul>
          </Box>
          <Box w="200px" borderTop={"1px solid #6e6e6e"}>
            <Text pt="4" fontWeight={"600"}>
              Tools
            </Text>
            <ul>
              <li>Photoshop</li>
              <li>Balsamiq</li>
              <li>React</li>
              <li>NextJS</li>
              <li>TailwindCSS</li>
            </ul>
          </Box>
        </Flex>
      </Container>
      <Container maxW="container.lg">
        <Section>
          <Heading as="h2" size="lg">
            Background
          </Heading>
          <Text>
            Vivian has started a new career path as a pole dance trainer, and
            she is eager to showcase her journey and professional capabilities.
            Her transition from a Biochemistry Post-Doc to a pole dance
            enthusiast in her 40s is not just a career change but a personal
            transformation. Vivian's story is one of discovering a newfound
            passion and mastering it to the point where she can now impart her
            knowledge and joy to others. As a beginning coach, while she may not
            have an extensive portfolio, her aim is to use her own story and
            expertise to inspire and encourage more people to explore the world
            of pole dance and consider her courses.
          </Text>
        </Section>
        <Section>
          <Heading as="h2" size="lg">
            Motivation
          </Heading>
          <Text>
            Instagram has it's limitations, it can only showcase a limited part
            of her story. And it requires registration to view the content.
            Vivian requires a website to reach a broader audience, especially
            those beyond the realm of social media. The website's primary goal
            is to narrate her unique story, showcase her skills, and facilitate
            easy contact for potential clients.
          </Text>
          <ImageInArticle
            hasAnimation={false}
            description="Instagram need log in to see videos and more contents."
          >
            <img src={insta_1} alt="Instagram" />
          </ImageInArticle>
        </Section>
        <Section>
          <Heading as="h2" size="lg">
            Approach
          </Heading>
          <Heading as="h3" size="md">
            User-centered design
          </Heading>
          <Text>
            Understanding potential clients' hesitations is key to encouraging
            participation in pole dance. In collaboration with Vivian, we've
            identified specific concerns to address based on her experience. To
            counter these, the website will feature empathetic slogans and
            content that resonate with the target audience, particularly
            addressing common hesitations related to age, physical fitness, and
            body image.
          </Text>
        </Section>
        <Section>
          <Heading as="h3" size="md">
            Accessibility and Usability:
          </Heading>
          <Text>
            The design will be inclusive, catering to people of all ages, with a
            particular focus on those 40 and above, mirroring Vivian's own
            journey. The website will prioritize readability and navigational
            simplicity, using accessible colors and fonts to accommodate a
            diverse user base.
          </Text>
        </Section>
        <Section>
          <Heading as="h3" size="md">
            Engagement Features:
          </Heading>
          <Text>
            A blog and a testimonials section will be integrated to foster a
            sense of community and connection. These elements will not only
            engage visitors but also provide insights into the benefits and joys
            of pole dancing, as experienced by Vivian and her students.
          </Text>
        </Section>

        <Section>
          <Heading as="h2" size="lg">
            Iterative Process:
          </Heading>
          <Text>
            Iterative Process: The content will evolve along with Vivian's
            growing experience and audience feedback. Initial content includes:
            Vivian’s personal story, her training milestones, an expanded
            narrative on why pole dancing is suitable for everyone. Navigation
            will be enhanced as the content grows. Website performance will be
            monitored through SEO analytics, focusing on user engagement metrics
            such as message inquiries and search trend data. Google tags will be
            utilized for tracking and improving user interaction.
          </Text>
        </Section>
        <Section>
          <Heading as="h2" size="lg">
            My Role
          </Heading>
          <Text>
            As a designer, content creator, and developer, I will be employing
            tools like paper and pen for initial concepts, Balsamiq for layout
            planning, and Figma for final color and image selections. The
            frontend will be developed using React, NextJS, and TailwindCSS.
          </Text>
        </Section>
        <Section>
          <Heading as="h2" size="lg">
            Challenges
          </Heading>
          <Text>
            A significant part of the project involves helping Vivian set clear
            goals and managing a large volume of work, including requirement
            analysis, UI/UX design, content creation, and frontend development.
          </Text>
        </Section>
        <Section>
          <Heading as="h2" size="lg">
            Design Conditions
          </Heading>
          <Text>
            The design will be mobile-friendly and accessible, ensuring contrast
            and font size are optimized for all users. The look and feel of the
            website will be dynamic, utilizing animations to create an engaging
            user experience.
          </Text>
        </Section>
      </Container>
    </Container>
  );
};

export default DancerWebsite;
