import React from "react";
import Section from "../../../components/Section/Section";
import { Container, Heading, Progress, Text } from "@chakra-ui/react";
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
          <Heading as="h5" textAlign={"Center"}>
            Greetings!
            <Text fontSize="xl">
              Please be advised that I am currently hard at work refining this
              article.
              <br />
              You are perusing a MVP eidtion, which offers you a glimpse into
              the inner workings of my design process.
            </Text>
            <Progress size="xs" isIndeterminate />
          </Heading>
        </Section>
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
            Vivian requires a website to reach a broader audience, especially
            those beyond the realm of social media. The website's primary goal
            is to narrate her unique story, showcase her skills, and facilitate
            easy contact for potential clients.
          </Text>
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
    </article>
  );
};

export default DancerWebsite;
