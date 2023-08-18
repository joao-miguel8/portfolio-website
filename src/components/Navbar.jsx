import { useState } from "react"
import classNames from "classnames";
import '../App.css'

const NavBar = ({ activeNavLink, setActiveNavLink, navLinks}) => {


const handleActiveNavLink = (e, link) => {
  e.preventDefault();
  setActiveNavLink(link);
}


  return (
  <nav>
      <ul className="flex flex-wrap gap-3 robotoMono">
        {Object.entries(navLinks).map(([link]) => {
          const capitalizeLinks = link.toUpperCase()
          return (
          <li onClick={(e) => handleActiveNavLink(e,link)} key={link} >
            <a href={link} className={classNames(" text-18 font-light",
            { "text-[#1A96C6] dark:text-[#1A96C6]": activeNavLink === link,  "dark:text-white": activeNavLink !== link} )}>{capitalizeLinks}
            </a>
          </li>
        )
        })}
    </ul>

  </nav>
  )
}

export default NavBar