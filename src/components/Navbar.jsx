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
		<header className="px-2 mb-20 py-4 flex items-center border-b-2 border-b-gray-100">
			<img src="src/assets/favicon.png" alt="" className="w-10" />
			<nav className="mx-auto p-4 sticky top-0 z-50 flex justify-center flex-wrap gap-4 bg-white">
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
		</header>
	);
};

export default NavBar;
