import { useState } from "react"
import classNames from "classnames";
import '../App.css'

const NavBar = () => {
const [activeNavLink, setActiveNavLink] = useState(null);

const handleActiveNavLink = (e) => {
  e.preventDefault();
setActiveNavLink(e.target.textContent);
}

const navLinks = [
  {key: "about" ,label: "ABOUT"},
  {key: "work" ,label: "WORK"},
  {key: "skills" ,label: "SKILLS"},
  {key: "contact" ,label: "CONTACT"},
]

  return (
  <nav>
      <ul onClick={handleActiveNavLink} className="px-2 flex flex-wrap gap-3 robotoMono">
        {navLinks.map((link) => { return (
          <li key={link.key} >
            <a href={link.key} className={classNames(" text-18 font-light dark:text-white",
            { "text-[#1A96C6] dark:text-[#1A96C6]": activeNavLink === link.label} )}>{link.label}
            </a>
          </li>
        )})}
    </ul>
  </nav>
  )
}

export default NavBar