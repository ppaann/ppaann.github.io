import React from 'react'

import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div className="hamburger" >
      </div>
    </div>
  )
}

export default Navbar