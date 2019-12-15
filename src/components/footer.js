import React from 'react'
import { Link } from 'gatsby'


const Header = () => {

  return (
    <div>
      <h1>Hi, i'm Remy Bordignon</h1>

      <ul>
        <li>
          <Link to={'/contact'}>Contact</Link>
        </li>
        <li>
          <Link to={'/experience'}>Experience</Link>
        </li>
      </ul>
    </div>
  )
}
