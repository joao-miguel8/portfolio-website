import { useEffect, useState } from "react"
import classNames from 'classnames'

const Header = () => {
const [toggleTheme, setToggleTheme] = useState("light");

const htmlEle = document.documentElement;
if (toggleTheme === "light") {
  htmlEle.style.background = "#fff";
} else {
  htmlEle.style.background = "#101626";
}

// applies light/dark mode theme to html element:
useEffect(() => {
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(toggleTheme);
},[toggleTheme])

const handleToggleTheme = () => {
  setToggleTheme((prevState) => prevState === "dark" ? "light" : "dark");
}

return (
  <>
<div className="flex items-center justify-between bg-white dark:bg-[#101626]" >

    <a href="#">
        <h4 className={`text-14 flex items-center gap-1 montserrat font-bold text-[#1A96C6]`}>
          <span className="text-14 text-[#1A96C6] dark:text-[#1A96C6] " >&lt;</span>
          JoãoMiguel<span className=" text-14 text-[#1A96C6] dark:text-[#1A96C6]"> /&gt; </span>
        </h4>
    </a>
    <div className="flex gap-2" >
      <button onClick={handleToggleTheme} className="w-20 flex items-center" >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"className={classNames(
          "w-full", "p-2",
          {'border border-dashed border-[#1A96C6] text-[#1A96C6]': toggleTheme === 'light'},
          {"text-[#575B67]": toggleTheme !== "light"})}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={classNames( "w-full", "p-2",
          {'border border-dashed border-[#1A96C6] text-[#1A96C6] ': toggleTheme === 'dark'},
          {'text-[#575B67]': toggleTheme !== 'dark'}
          )}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
      </button>
    </div>
</div>
  </>
)
}


export default Header