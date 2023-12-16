import React from "react";
import ProjectSummary from "../../../components/ProjectSummary/Projectsummary";
import S24Project from "./S24Project";

const S24UXWorks = () => {
  return (
    <article>
      <ProjectSummary
        heading="Redesign Suomi24.fi "
        description="Revamping the website for a mordern, mobile-friendly design."
      />

      <S24Project />
    </article>
  );
};

export default S24UXWorks;
