import React from 'react'
import ProjectSummary from '../../components/ProjectSummary/Projectsummary'
import S24Project from './S24/S24Project'

const UXWorks = () => {
  return (
    <div>
      <ProjectSummary heading='Redesign Suomi24.fi '
        description='Revamping the website for a mordern, mobile-friendly design.' />


      <S24Project />
    </div>
  )
}

export default UXWorks