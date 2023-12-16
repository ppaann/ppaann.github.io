import React, { useRef } from "react";

import { useInView } from "framer-motion";

const Section = ({ children, className, id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: 0.5 });

  return (
    <section
      as="section"
      id={id}
      className={className}
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
      }}
    >
      {children}
    </section>
  );
};

export default Section;
