import classNames from "classnames";
import "../App.css";
import { useContext } from "react";
import { ThemeContext } from "../context/AppThemeContext";

const NavBar = () => {
	const themeMode = useContext(ThemeContext);

	const navLinks = [
		{ link: "#about", name: "About Me" },
		{ link: "#contact", name: "Contact" },
	];

	return (
		<nav className="mt-8 mb-20 p-4 sticky top-0 z-50 flex justify-center flex-wrap gap-4 bg-white">
			<ul className="flex gap-6">
				{navLinks.map(navLink => {
					return (
						<a key={navLink.to} href={navLink.link} className="cursor-pointer">
							<li className={classNames(themeMode.isDarkTheme ? "text-[#333]" : "dark:text-[#333]", "font-bold text-18 robotoMono hover:text-green-500")} key={navLink.to}>
								{navLink.name}
							</li>
						</a>
					);
				})}
			</ul>
		</nav>
	);
};

export default NavBar;
