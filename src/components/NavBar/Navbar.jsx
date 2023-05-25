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
        <Link to='/sandbox' className={style.navItem}>
          <h6>Sandbox</h6>
        </Link>
        <Link to="/about" className={style.navItem}>
          <h6>About</h6>
        </Link>
        {/* 
        <ul className={style.ul}>
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
        </ul>*/}
        <div className="hamburger" >
        </div>

      </div>
    </>
  )
}

export default Navbar