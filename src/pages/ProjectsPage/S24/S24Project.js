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
import home_desk from "./images/s24-home-desk.png"
import home_m from "./images/s24-homepage-m.png"
import navi_view from "./images/s24-navi.png"

import { Box, Image, Flex, VStack, Text, HStack } from '@chakra-ui/react'
import ImageInArticle from '../../../components/ImageInArticle'

const S24Project = () => {
  return (
    <Box maxW='80.77%' marginX='auto'>

      <ImageInArticle pt={10} position='relative' marginX='auto'
        w={{ base: '300px', md: '800px' }}
        h={{ base: '250px', md: '400px' }}
        overflow='hidden'>
        <Image src={home_desk} h={{base:'auto', md:'400px'}} w='85%'
          marginX='auto'/>
        <Image src={home_m} w="15%" position='absolute'
          bottom='-5px' left='0'/>
        <Image src={navi_view} position='absolute' h='200px' right='0'
          bottom='-20%' w='20%'/>
      </ImageInArticle>

      <Flex flexDirection={{base: 'column',md:'row'}} pt='120px' pb='120px'>
        <VStack w={{base:'100%', md:'50%'}}>
          <img alt="Suomi24" src={suomiLogo} style={{
            width: "130px",
            borderRadius: "15px",
          }} />

          <p style={{
            whiteSpace: "nowrap",
            fontWeight: "600"
          }}>Suomi24: What Finns are talking about</p>
        </VStack>
        <Box w={{base:'100%', md:'50%'}} pl={{base:'0', md:'15'}}>
          <Text pt='12px'
          >Suomi24.fi is a popular online community in Finland where people can discuss various topics, seek advice, and connect with others.
            It was founded in 2000 and has become one of the largest online forums in Finland.</Text>
          <Text style={{ paddingTop: "16px" }}>It has more than 1.4 million weekly users.</Text>
        </Box>
      </Flex>

      <Flex id='role-description'
        flexDirection={{ base: 'column', md: 'row' }} justifyContent='space-between'
        flexWrap='wrap' alignContent={{base:'center', md:'normal'}}
        pb='14' sx={{'> div': {paddingBottom:{base:'16px', md:'0'}}}}>
        <Box w='200px' borderTop={'1px solid #6e6e6e'}>
          <Text pt='4' fontWeight={'600'}>My Role</Text>
          <div>
            <ul>
              <li>User Experience Designer</li>
              <li>Frontend Developer</li>
            </ul>

          </div>
        </Box>
        <Box w='200px' borderTop={'1px solid #6e6e6e'}>
          <Text pt='4' fontWeight={'600'}> Deliverables</Text>
          <div>
            <p >UX</p>
            <ul>
              <li>User survey and interview</li>
              <li>User jounery map</li>
              <li>Stakeholder map</li>
              <li>Personas</li>
              <li>Site map</li>
              <li>Navigation Design</li>
              <li>Search Engine Optimization</li>
            </ul>
            <Text pt='4' fontWeight={'600'}>Frontend</Text>
            <ul>
              <li>React component library</li>
              <li>Unit testing</li>
            </ul>
          </div>

        </Box>
        <Box w='200px' borderTop={'1px solid #6e6e6e'} >
          <Text pt='4' fontWeight={'600'}>Tools</Text>
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
        </Box >
      </Flex>

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
      <Box id='gettingCloserToUCD'>
        <h2>Getting Closer to User-centered Design</h2>
        <h3>Users' Motivations and Pain Points</h3>
        <p>At first glance, it seems that users find the website useful but not interesting. However, upon closer inspection, we found that users have divergent motivations. Creating personas has helped us clarify these divergences, and we can use them as a basis for use cases in later development stages.</p>
        <p>After discussing with the Product Owner and the Business Development team, we have decided to focus on two personas because they represented two user groups: the information seeker and the explorer. The information seeker is someone who visits the website with a specific purpose, seeking knowledge or social approval. On the other hand, the explorer visits the website to relax and doesn't have a specific purpose in mind.
        </p>

        <ImageInArticle
          description='Analyze User Behavior And Establish Evaluation Targets'>

          <HStack spacing='4'>
            <Image src={userJounery} alt="userJounery" w='50%' borderRadius='md' boxShadow='lg' />
            <Image src={userResearch} alt="User Research" w='50%' borderRadius='md' boxShadow='lg' />
          </HStack>
        </ImageInArticle>

        <p>To gain insight into user behavior, we analyzed data collected from Google Analytics, VWO, and Hotjar. Our analysis focused on where users clicked the most, what was visible in the first three seconds after the page loaded, whether users scrolled to access the information we provided, and whether users found the information relevant and useful.</p>
        <p>Based on our findings, we concluded that it is essential to rearrange the layout to make the most of the first screen. This will enable users to quickly access the information they need and make the website more user-friendly.</p>
        <p>To evaluate the ROI of our redesign, it's crucial to analyze the analytics data. By doing so, we can set up clear targets and adjust our design strategy accordingly.</p>

      </Box>
      <Box id='stakeholder'>
        <h2>Collaborating with stakeholder</h2>
        <h3>Clarify responsibilities using Content Map</h3>
        <p>Redesigning a website with a long history, such as Suomi24, requires a collaborative effort. The project is dependent on other products, with numerous links, components, and shared APIs. In addition, the marketing and advertisement management team reserves every advertisement on the screen, making it difficult to rearrange them. To clarify responsibilities and the impact of each stakeholder on the redesign work, we collaborated with the product managers, developers, marketing team, and content managers to create a stakeholder map. </p>

        <ImageInArticle description='Usability V.S. Revenue?  Or Both'>
          <Image src={stakeholderMap} alt="Stakeholder Map" w='80%' borderRadius='lg' />
        </ImageInArticle>
        <div>One of the severe problems found during usability testing and user interviews is that there are too many advertisements, particularly in the thread pages, which is the landing page for more than 97% of users. The irrelevant advertisement image, sometimes resulting in an empty white space when the ad doesn't load successfully. This often disrupts users, and they may leave the page or find it unappealing. However, removing or moving the ad lower down the page is not an option as it is one of our main sources of income and must be visible at the beginning.

        </div>
        <div> I have redesigned the page in a way that the advertisement is visible in the first place, along with the topic and a portion of the content. The final result was monitored using Google Ad Manager, and both the impression and the reading depth on the page slightly increased.</div>
        <div>I presented two proposals to let market team choose:
          <ol>
            <li>Move the ad beneath the topic and the content of the main thread. When text is too long, clip the text &lt;text-overflow=‘ellipsis’&gt;  to ensure the ad shows more than 50%.</li>
            <li>Introduce a smaller ad slot for mobile view.</li>
          </ol>
          <div>The final result was monitored using Google Ad Manager, and both the impression and the reading depth on the page slightly increased.</div></div>
        <ImageInArticle description='Improve ad display in the thread view'>
          <Box position='relative' h={{ base: '200px', md: "360px" }} >
            <Image src={threadViewAd} alt="Thread view ads" w='80%' marginX='auto' h='85%'
              />
            <Image src={threadViewAd_old} alt="Thread view ads" position='absolute' bottom='0' left='-10px' w='20%'
              display={{ base: 'none', md: 'block' }}
              />
            <Image src={threadViewAd_new} alt="Thread view ads" position='absolute' bottom='0' right='-10px' w='20%'
              />
          </Box>

        </ImageInArticle>
      </Box >
      <div className='buildNavigation'>
        <h2>Build navigation</h2>
        <h3>Refactory the navigationg widget</h3>
        <div>There are many topics hidden deep within deep navigation structure, like pearls buried under sand. To encourage user navigation, we have designed a mega-navigation that includes a search bar, layered navigation items, and a specially designed top area for highlighting important topics.</div>

        <h3>Build a information-rich homepage</h3>
        <div>Create an informative homepage that effectively showcases our brand and drives more traffic to our discussion forum. We worked closely with our content management and marketing teams to redesign the layout, ensuring a balance between informative content and advertisements.</div>

        <ImageInArticle description='Homepage lofi to hifi design'
          w='100%'>
          <Flex flexWrap='wrap' gap='20px' >
            <Image src={home_lo} alt="Homepage-lofi" maxHeight={{ md: "395px" }}
            />
            <Image src={home_hi} alt="Homepage-hifi" maxHeight={{ md: "395px" }} />
          </Flex>
        </ImageInArticle>

        <h3>Allocate Advertisement</h3>

        <Flex gap='5%' flexWrap='wrap'>
          <Box w={{ base: '100%', md: '50%' }} minWidth='350px' >
            <div>
              <Text>
                Advertisement as one of the most important revenue resourse must graps much user attention from the page.
              </Text>
              <Text pt='15px'>
                We not only need to provide informative ads that are relevent to user's need, but also we need to place the ads propertly in proper spot and frequency, so that it can keep the balance between user experience and revenue
              </Text>
              <Text>

              </Text>
            </div>
          </Box>
          <Image src={home_ads} alt="Homepage ads layout" w={{ base: '100%', md: '36%' }}
                        borderRadius='lg' />
        </Flex>

      </div>

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


        <ImageInArticle description='The mockups and style guides'> 
          <Box position='relative' display={{base:'none', md:'block'}}>
            
          <Image src={design_demo} alt="design demo" width= "80%" position='relative' marginX='auto' />

          <Image src={design_wireframe} alt="wireframe"  width="50%" position='absolute'
            bottom='0' left= '45%'/>
          <Image src={styleguide} alt="styleguide"  height="450px"  position='absolute'
            bottom="0" right='0'/>
          <Image src={design_thread} alt="design thread view"  position='absolute'
            bottom='0' width="50%"  />
        
          </Box>
          <Flex display={{base:'flex',md:'none'}} flexWrap='wrap'  gap='12px'
             sx={{div:{borderRadius: 'xl',boxShadow:'2px 2px 5px 1px rgba(0,0,0,0.2)'} }}
            >
            <Box  minWidth='350px' maxWidth='450px'  h='450px' 
              backgroundImage={design_demo}
              backgroundPosition='center'
              backgroundRepeat='no-repeat'
            ></Box>
              <Box minWidth='350px' maxWidth='450px' h='450px' 
              backgroundImage={design_wireframe}
              backgroundPosition='right'
              backgroundRepeat='no-repeat'
            ></Box>    
            <Box  minWidth='350px' maxWidth='450px'  h='450px' 
            backgroundImage={design_thread}
            backgroundPosition='revert'
            backgroundRepeat='no-repeat'
            ></Box>    
              <Box  minWidth='350px' maxWidth='450px'  h='450px' 
              backgroundImage={styleguide}
              backgroundPosition='revert'
              backgroundRepeat='no-repeat'
              backgroundSize='50%'
            ></Box>
          </Flex>
        </ImageInArticle>


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


    </Box >
  )
}

export default S24Project