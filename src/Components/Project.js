import React from 'react'
import suomiLogo from '../assets/s24Logo.png'

const Project = () => {
  return (
    <>
      <div className='project-container'>
        <div>

          <h1>Redesign <a href="Suomi24.fi">Suomi24.fi</a>
            : public internet forum in Finland.
          </h1>
        </div>

        <div className='project-logo' style={{
          paddingTop: "48px", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))"
        }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left"
          }}>
            <img alt="Suomi24" src={suomiLogo} style={{
              width: "130px",
              borderRadius: "15px",
            }} />

            <p style={{
              whiteSpace: "nowrap",
              padding: " 24px 0",
              fontWeight: "600"
            }}>Suomi24: What Finns are talking about</p>
          </div>
          <div>
            <p
            >Suomi24.fi is a popular online community in Finland where people can discuss various topics, seek advice, and connect with others.
              It was founded in 2000 and has become one of the largest online forums in Finland.</p>
            <p style={{ paddingTop: "16px" }}>It has more than 1.4 million weekly users.</p>
          </div>
        </div>

        <div className="project-intr__container">
          <div className="project-intro__item myRole">
            <p>My Role</p>
            <div>
              <ui>
                <li>User Experience Designer</li>
                <li>Frontend Developer</li>
              </ui>

            </div>
          </div>
          <div className="project-intro__item deliverables">
            <p>Deliverables</p>
            <div>
              <p style={{ paddingTop: "0" }}>UX</p>
              <ui>
                <li>User survey and interview</li>
                <li>User jounery map</li>
                <li>Stakeholder map</li>
                <li>Personas</li>
                <li>Site map</li>
                <li>Navigation Design</li>
                <li>Search Engine Optimization</li>
              </ui>
              <p>Frontend</p>
              <ul>
                <li>React component library</li>
                <li>Unit testing</li>
              </ul>
            </div>

          </div>
          <div className='project-intro__item tools' >
            <p>Tools</p>
            <div>
              <ui>
                <li>Sketch</li>
                <li>Balsamiq</li>
                <li>VWO</li>
                <li>Hotjar</li>
                <li>Google Analystic</li>
                <li>React</li>
                <li>Javascript/CSS/Html</li>
              </ui>
            </div>
          </div>
        </div>

        <div className="project-detail objective" style={{ borderTop: "1px solid black" }}>



          <div style={{ padding: "32px" }}>
            The Suomi24 team aimed to redesign their website to make it more fresh-looking and appealing to younger audiences, while also improve its mobile compatibility. In addition to updating the user interface (UI), the team needed to replace the outdated FlightJS frontend platform with React. I joined the team in August 2018 as the sole UX designer, leading the UX research and design for the new UI. Additionally, I worked as a frontend engineer with two other engineers to maintain and enhance the website.

          </div>
        </div>

        <div style={{ paddingTop: "68px" }}>
          <h6 style={{ display: "block", margin: "0 auto", width: "200px" }}>&lt;Coming soon&gt;</h6>
        </div>
      </div>
    </>
  )
}

export default Project