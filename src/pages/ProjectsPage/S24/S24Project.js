import React from 'react'
import suomiLogo from './images/s24Logo.png'
import userJounery from "./images/userjounery.jpeg"
import userResearch from "./images/research.jpg"
import stakeholderMap from "./images/stakeholderMap.jpeg"
import threadViewAd from "./images/threadView_ad_draft.png"
import threadViewAd_old from "./images/threadView_ad_old.png"
import threadViewAd_new from "./images/threadView_ad_new.png"
import home_lo from "./images/home_lo.png"
import home_hi from "./images/home_hi.png"
import home_ads from "./images/home_ads.png"
import design_demo from "./images/design_demo.png"
import design_thread from "./images/design_thread.png"
import design_wireframe from "./images/design_wireframe.png"
import styleguide from "./images/styleguide.jpg"

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const project_instruction = css`
  padding-top: 48px;
  display: flex;
`
const project_introduction_desc = css`
  min-width: 400px;
`

const S24Project = () => {
  return (
    <article>
      <div className='project-container'>
        <div>

          <h2>Redesign <a href="Suomi24.fi">Suomi24.fi</a>
            : public internet forum in Finland.
          </h2>
        </div>

        <div css={project_instruction}>
          <div style={{
            minWidth: '320px',
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
          <div css={project_introduction_desc}>
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
              <ul>
                <li>User Experience Designer</li>
                <li>Frontend Developer</li>
              </ul>

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
              Suomi24 is not appearing on the first page of Google search results.
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
          <p>Our first research focused on real website users. We recruited volunteers from the Suomi24 forum, selecting a diverse range of participants based on age, gender, location, history with Suomi24, and frequency of visits. These participants were invited to participate in a<b> one-on-one user interview</b> and a <b>first-impression test</b>, which helped us gain an in-depth understanding of their feelings about Suomi24. In addition to the interviews, we collected over 500 user responses through an <b>online survey</b> on the forum.  </p>
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
          <div>
            <img src={userJounery} alt="userJounery" style={{ width: "50%", height: "50%" }} />
          </div>
          <h3>Analyze User Behavior And Establish Evaluation Targets</h3>
          <p>To gain insight into user behavior, we analyzed data collected from Google Analytics, VWO, and Hotjar. Our analysis focused on where users clicked the most, what was visible in the first three seconds after the page loaded, whether users scrolled to access the information we provided, and whether users found the information relevant and useful.</p>
          <p>Based on our findings, we concluded that it is essential to rearrange the layout to make the most of the first screen. This will enable users to quickly access the information they need and make the website more user-friendly.</p>
          <p>To evaluate the ROI of our redesign, it's crucial to analyze the analytics data. By doing so, we can set up clear targets and adjust our design strategy accordingly.</p>

          <div>
            <img src={userResearch} alt="User Research" style={{ width: "50%", height: "50%" }} />
          </div>
        </div>
        <div>
          <h2>Collaborating with stakeholder</h2>
          <h3>Clarify responsibilities using Content Map</h3>
          <p>Redesigning a website with a long history, such as Suomi24, requires a collaborative effort. The project is dependent on other products, with numerous links, components, and shared APIs. In addition, the marketing and advertisement management team reserves every advertisement on the screen, making it difficult to rearrange them. To clarify responsibilities and the impact of each stakeholder on the redesign work, we collaborated with the product managers, developers, marketing team, and content managers to create a stakeholder map. </p>
          <img src={stakeholderMap} alt="Stakeholder Map" style={{ width: "50%", height: "50%" }} />

          <h3>Usability V.S. Revenue?  Or Both</h3>
          <div>One of the severe problems found during usability testing and user interviews is that there are too many advertisements, particularly in the thread pages, which is the landing page for more than 97% of users. The irrelevant advertisement image, sometimes resulting in an empty white space when the ad doesn't load successfully. This often disrupts users, and they may leave the page or find it unappealing. However, removing or moving the ad lower down the page is not an option as it is one of our main sources of income and must be visible at the beginning.

          </div>
          <div> I have redesigned the page in a way that the advertisement is visible in the first place, along with the topic and a portion of the content. The final result was monitored using Google Ad Manager, and both the impression and the reading depth on the page slightly increased.</div>
          <div>I presented two proposals to let market team choose:
            <ol>
              <li>Move the ad beneath the topic and the content of the main thread. When text is too long, clip the text &lt;text-overflow=‘ellipsis’&gt;  to ensure the ad shows more than 50%.</li>
              <li>Introduce a smaller ad slot for mobile view.</li>
            </ol>
            <div>The final result was monitored using Google Ad Manager, and both the impression and the reading depth on the page slightly increased.</div></div>

          <img src={threadViewAd_old} alt="Thread view ads" style={{ width: "30%", height: "50%" }} />
          <img src={threadViewAd} alt="Thread view ads" style={{ width: "30%", height: "50%" }} />
          <img src={threadViewAd_new} alt="Thread view ads" style={{ width: "30%", height: "50%" }} />
        </div>
        <div>
          <h2>Build navigation</h2>
          <h3>Refactory the navigationg widget</h3>
          <div>There are many topics hidden deep within deep navigation structure, like pearls buried under sand. To encourage user navigation, we have designed a mega-navigation that includes a search bar, layered navigation items, and a specially designed top area for highlighting important topics.</div>
        </div>
        <h3>Build a information-rich homepage</h3>
        <div>Create an informative homepage that effectively showcases our brand and drives more traffic to our discussion forum. We worked closely with our content management and marketing teams to redesign the layout, ensuring a balance between informative content and advertisements.</div>
        <img src={home_lo} alt="Homepage-lofi" style={{ width: "40%", height: "50%" }} />
        <img src={home_hi} alt="Homepage-hifi" style={{ paddingLeft: "15%", width: "40%", height: "50%" }} />
        <img src={home_ads} alt="Homepage ads layout" style={{ width: "20%", height: "50%" }} />


        <div>
          <h2>Visualizing User-centered Design</h2>
          <h3>Mobile First Improvement</h3>
          <div>
            Research indicates that over 74% of Suomi24 page views are from mobile devices, and this number is on the rise. Therefore, we are focusing our efforts on refining the mobile UI.
            <ol>
              <li>Ensure text content is visible right away.</li>

              <li>Improve search-ability by making the search feature available in the top navigation widget.</li>
              <li>Reduce dividers and layer margins in the thread view.</li>
              <li>Minimize the use of different colors and font sizes.</li>
              <li>Increase the interaction area by using meaningful icons.</li>
              <li>Improve the mobile usability of the navigation widget.</li>
            </ol>
            <p>We conducted several rounds of testing to ensure smooth and intuitive interactions, as well as a relaxed and effortless UI for mobile users.</p>
            <img src={design_demo} alt="design demo" style={{ width: "40%", height: "50%" }} />
            <img src={design_thread} alt="design thread view" style={{ width: "40%", height: "50%" }} />
            <img src={design_wireframe} alt="wireframe" style={{ width: "40%", height: "50%" }} />
            <img src={styleguide} alt="styleguide" style={{ height: "400px", paddingLeft: "10%" }} />


          </div>
        </div>
        <div>
          <h2>Lessons Learned</h2>
          <h3>Don’t ditch the old design too soon</h3>
          <div>
            <p>We discovered that fewer than 10% of users visit the homepage of suomi24.fi, with most of them navigating to other websites. We wanted to make the homepage more useful so that users could find interesting content and continue their journey inside the forum. With good intentions, we made a significant change to the homepage to provide more helpful information and allow users to use the homepage more effectively.
            </p>
            <p>However, our abrupt change replaced the entire old homepage with the new design, resulting in complaints from users. We soon realized that many users used the old homepage as an index, from which they accessed news, mail, and even Google. We acknowledge that this usage of the homepage is valuable, and there is nothing inherently wrong with how users interacted with it. As a result, we reverted back to the original homepage design very quick, and redesign the links.
            </p>
            <p>It's important to always keep the user's needs and habits in mind when making changes to a website or application. In this case, it seems like the users had developed a certain behavior and pattern of use for the homepage that was disrupted by the sudden change. It might be worth considering conducting more user research to identify what specific improvements could be made to the homepage to make it more useful without disrupting the user's established patterns of use.
            </p>
          </div>
        </div>
        <div>

        </div>
        <div style={{ paddingTop: "68px" }}>
          <h6 style={{ display: "block", margin: "0 auto", width: "500px" }}>&lt;The End Of Story. I will continue to work on updating the styles&gt;</h6>
          <h6 style={{ display: "block", margin: "0 auto", width: "230px" }}>&lt;Last update: May, 18, 2023&gt;</h6>
        </div>
      </div>
    </article>
  )
}

export default S24Project