import React from 'react'
import suomiLogo from '../assets/s24Logo.png'

const Project = () => {
  return (
    <>
      <div className='project-container'>
        <div>

          <h2>Redesign <a href="Suomi24.fi">Suomi24.fi</a>
            : public internet forum in Finland.
          </h2>
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
              <ul>
                <li>User survey and interview</li>
                <li>User jounery map</li>
                <li>Stakeholder map</li>
                <li>Personas</li>
                <li>Site map</li>
                <li>Navigation Design</li>
                <li>Search Engine Optimization</li>
              </ul>
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
              <ul>
                <li>Sketch</li>
                <li>Figma</li>
                <li>Balsamiq</li>
                <li>VWO</li>
                <li>Hotjar</li>
                <li>google Analytics</li>
                <li>Google Tag Manager</li>
                <li>React</li>
                <li>Javascript/CSS/HTML</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="project-detail objective" style={{ borderTop: "1px solid black" }}>
          <h2>Overview</h2>

          <div style={{ padding: "32px" }}>
            The Suomi24 team aimed to redesign their website to make it more fresh-looking and appealing to younger audiences, while also improve its mobile compatibility. In addition to updating the user interface (UI), the team needed to replace the outdated FlightJS frontend platform with React. I joined the team in August 2018 as the sole UX designer, leading the UX research and design for the new UI. Additionally, I worked as a frontend engineer with two other engineers to maintain and enhance the website.
          </div>
          <div>
            <h3>Problems</h3>
            <div>The number of active users is declining.
              Suomi24 is not appearing on the first page of Google search results
              Advertisement revenue is not showing a profitable trend.
              The frontend platform being used is no longer being updated.</div>
            <h3>Proposed Solutions</h3>
            <ol>
              <li>Redesign the UI to adopt modern desktop and mobile UIs.</li>
              <li>Improve user experience to encourage more interactions and provide users with confidence to navigate the platform.</li>
              <li>Increase the metrics for advertisement display.</li>
              <li>Conduct Search Engine Optimization (SEO) to improve Suomi24's visibility on Google search results.</li>
            </ol>
          </div>
        </div>

        <div className='project-detail research'>
          <h2>Research</h2>
          <h3>User study</h3>
          <p>Our first research focused on real website users. We recruited volunteers from the Suomi24 forum, selecting a diverse range of participants based on age, gender, location, history with Suomi24, and frequency of visits. These participants were invited to participate in a<b> one-on-one user interview</b> and a first-impression test, which helped us gain an in-depth understanding of their feelings about Suomi24. In addition to the interviews, we collected over 200 user responses through an online survey on the forum.  </p>
          <h3>Findings</h3>
          <ol>
            <li>The website appears boring and outdated.</li>
            <li>Some components do not follow mobile interaction patterns and do not work as expected.</li>
            <li>The website's anonymous nature discourages users from registering, as they fear losing their anonymity.</li>
            <li>Users are more interested in local events and building their own communities.</li>
            <li>Users who arrive at Suomi24 from Google cannot find anything else of interest on the first page they land on.</li>
          </ol>
        </div>
        <div>
          <h2>Getting Closer to User-centered Design</h2>
          <h3>Users' Motivations and Pain Points</h3>
          <p>At first glance, it seems that users find the website useful but not interesting. However, upon closer inspection, we found that users have divergent motivations. Creating personas has helped us clarify these divergences, and we can use them as a basis for use cases in later development stages.</p>
          <p>After discussing with the Product Owner and the Business Development team, we have decided to focus on two personas because they represented two user groups: the information seeker and the explorer. The information seeker is someone who visits the website with a specific purpose, seeking knowledge or social approval. On the other hand, the explorer visits the website to relax and doesn't have a specific purpose in mind.
          </p>
          <h3>Analyze User Behavior And Establish Evaluation Targets</h3>
          <p>To gain insight into user behavior, we analyzed data collected from Google Analytics, VWO, and Hotjar. Our analysis focused on where users clicked the most, what was visible in the first three seconds after the page loaded, whether users scrolled to access the information we provided, and whether users found the information relevant and useful.</p>
          <p>Based on our findings, we concluded that it is essential to rearrange the layout to make the most of the first screen. This will enable users to quickly access the information they need and make the website more user-friendly.</p>
          <p>To evaluate the ROI of our redesign, it's crucial to analyze the analytics data. By doing so, we can set up clear targets and adjust our design strategy accordingly.</p>
        </div>
        <div>
          <h2>Collaborating with stakeholder</h2>
          <h3>Clarify responsibilities using Content Map</h3>
          <h3>Idealization together</h3>
          <h3>Dealing with technical limitation</h3>
        </div>
        <div>
          <h2>Build navigation</h2>
          <h3>Refactory the navigationg widget</h3>
        </div>
        <div>
          <h2>Visualizing User-centered Design</h2>
          <h3>Mobile First Improvement</h3>
        </div>
        <div>
          <h2>Lessons Learned</h2>
        </div>
        <div>

        </div>
        <div style={{ paddingTop: "68px" }}>
          <h6 style={{ display: "block", margin: "0 auto", width: "200px" }}>&lt;To be continued. &gt;</h6>
          <h6 style={{ display: "block", margin: "0 auto", width: "200px" }}>&lt;Last update: Mar, 2, 2023&gt;</h6>

        </div>
      </div>
    </>
  )
}

export default Project