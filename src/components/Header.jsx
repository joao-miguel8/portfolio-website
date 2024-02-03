import { useContext } from "react";
import { ThemeContext } from "../context/AppThemeContext";
import { motion } from "framer-motion";
import classNames from "classnames";
import { Link } from "react-router-dom";
const Header = () => {
	const themeMode = useContext(ThemeContext);

	return (
		<>
			<div className="mx-10 pt-4 flex flex-wrap items-center justify-between">
				<Link to={"/about"}>
					<motion.a whileHover={{ scale: 0.9 }} href="#">
						<span className={`text-16 flex items-center gap-1 montserrat font-bold text-[#43baea]`}>
							<span className="text-16 text-[#43baea] dark:text-[#43baea] ">&lt;</span>
							JoãoMiguel<span className=" text-16 text-[#43baea] dark:text-[#43baea]"> /&gt; </span>
						</span>
					</motion.a>
				</Link>
				<div className="w-20">
					<button onClick={themeMode.toggleTheme} className={classNames("w-full flex items-center ", themeMode.isDarkTheme === false ? "text-[#1A95c6]" : "text-[#f4e84a]")}>
						{/* Sun icon */}
						<svg xmlns="http://www.w3.org/2000/svg" className={classNames("p-1 w-full", !themeMode.isDarkTheme && "border-2 border-dashed border-[#1A95c6]")} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
						</svg>
						{/* Moon icon */}
						<svg xmlns="http://www.w3.org/2000/svg" className={classNames("w-full p-1", themeMode.isDarkTheme === true ? "fill-[#1A95c6]" : "fill-[#2f2f2f] ", themeMode.isDarkTheme && "border-2 border-dashed ")} fill="none" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
						</svg>
					</button>
				</div>
			</div>
		</>
	);
};

export default Header;
