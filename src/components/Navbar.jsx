import classNames from "classnames";
import "../App.css";
import { useContext } from "react";
import { ThemeContext } from "../context/AppThemeContext";

const NavBar = () => {
	const themeMode = useContext(ThemeContext);

	const navLinks = [
		{ to: "/about", name: "About" },
		{ to: "/skills", name: "Skills" },
		{ to: "/works", name: "Works" },
		{ to: "/contact", name: "Contact" },
	];

	return (
		<nav className="my-4 flex justify-center flex-wrap gap-3">
			<ul className="flex gap-6">
				{navLinks.map(navLink => {
					return (
						<a to={navLink.to}>
							<li className={classNames(themeMode.isDarkTheme ? "text-white" : "dark:text-[#1c7da3]", "text-18 font-bold robotoMono", "" === navLink.to && "text-[#1c7da3] dark:text-[#1cafe9] border-b-2 border-b-[#1cafe9]")} key={navLink.to}>
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
