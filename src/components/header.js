import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {

  return (
    <div className={headerStyles.header}>

      <Link className={headerStyles.title} to={'/'}><h1>Hi, I'm Remy Bordignon <span role='img' aria-label='wooo'>🔥</span></h1></Link>

      <ul className={headerStyles.navList}>
        <li>
          <Link className={headerStyles.navItem} to={'/'} activeClassName={headerStyles.activeNavItem}>About</Link>
        </li>
        <li>
          <Link className={headerStyles.navItem} to={'/experience'} activeClassName={headerStyles.activeNavItem}>Experience</Link>
        </li>
        <li>
          <Link className={headerStyles.navItem} to={'/projects'} activeClassName={headerStyles.activeNavItem}>Projects</Link>
        </li>
        <li>
          <Link className={headerStyles.navItem} to={'/contact'} activeClassName={headerStyles.activeNavItem}>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
