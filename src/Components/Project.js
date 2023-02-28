import React from 'react'
import suomiLogo from '../assets/s24Logo.png'

const Project = () => {
  return (
    <>
      <h1>Redesign <a href="Suomi24.fi">Suomi24.fi</a>
        : the largest internet forum in Finland. </h1>
      <ul className='project-intro' style={{
        margin: "20px 0"
      }}>
        <li>
          <h6>My role:</h6>
          <p>UX designer / Frontend Engineer</p>
        </li>
        <li>
          <h6>Website:</h6>
          <a href="https://www.suomi24.fi/">suomi24.fi</a>
        </li>
      </ul>

      <div className='project-log' style={{ paddingTop: "48px" }}>
        <div style={{ marginLeft: "15%" }}>
          <img alt="Suomi24" src={suomiLogo} style={{
            width: "130px",
            borderRadius: "15px",
            float: "left"
          }} />
          <p style={{ width: "50%", marginLeft: "155px" }}
          >Suomi24.fi is a popular online community in Finland where people can discuss various topics, seek advice, and connect with others.
            It was founded in 2000 and has become one of the largest online forums in Finland.</p>
        </div>
      </div>

      <div style={{ paddingTop: "68px" }}>
        <h6 style={{ display: "block", margin: "0 auto", width: "200px" }}>&lt;Coming soon&gt;</h6>
      </div>

    </>
  )
}

export default Project