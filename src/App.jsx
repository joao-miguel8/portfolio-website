import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import NavBar from './components/Navbar'
import About from './components/About'

function App() {
  const [activeNavLink, setActiveNavLink] = useState("about");

const navLinks = {
  about: <About />,
  work: "Work",
  skills: "skills",
  contact: "contact"
}

  return (
      <div className=
      'min-[580px]:max-w-[508px] min-[580px]:mx-[10%]  min-[780px]:max-w-[704px]  min-[992px]:max-w-[896px] flex flex-col mx-4 mt-3' >
    <Header />
    <NavBar navLinks={navLinks} activeNavLink={activeNavLink} setActiveNavLink={setActiveNavLink}/>
{navLinks[activeNavLink]}
      </div>
  )
}

export default App
