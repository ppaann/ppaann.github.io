import React from 'react'

import { Link } from "react-router-dom"
import style from './Navbar.module.scss'

const Navbar = () => {
  return (
    <>
      <div className={style.nav}>
        <Link to="/">
          <h4>Pan Pan</h4>
        </Link>
        <ul style={{
          display: 'flex',
          flexDirection: "column",
          float: 'right'
        }}>
          <li>
            <h6>Email:</h6>
            <a href="mailto:mailbox.pan@gmail.com">mailbox.pan@gmail.com</a>
          </li>
          <li>
            <h6>Linkedin:</h6>
            <a href="https://www.linkedin.com/in/panpanpan/">in/panpanpan</a>
          </li>
          <li>
            <h6>Source:</h6>
            <a href="https://github.com/ppaann/ppaann.github.io/">github/ppaann</a>
          </li>
          <li>
            <Link to="/about">
              <h6>About</h6></Link>
          </li>
        </ul>
        <div className="hamburger" >
        </div>

      </div>
    </>
  )
}

export default Navbar