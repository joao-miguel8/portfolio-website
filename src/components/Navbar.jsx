import classNames from "classnames";
import "../App.css";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/AppThemeContext";

const NavBar = () => {
	const location = useLocation();
	const themeMode = useContext(ThemeContext);

	const navLinks = [
		{ to: "/about", name: "About" },
		{ to: "/skills", name: "Skills" },
		{ to: "/works", name: "Works" },
		{ to: "/contact", name: "Contact" },
	];

	return (
		<nav className="my-4 flex flex-wrap gap-3">
			{navLinks.map(navLink => {
				return (
					<ul>
						<Link to={navLink.to}>
							<li className={classNames(themeMode.isDarkTheme ? "text-white" : "dark:text-[#1c7da3]", "text-18 font-bold robotoMono", location.pathname === navLink.to && "text-[#1c7da3] dark:text-[#1cafe9]")} key={navLink.to}>
								{navLink.name}
							</li>
						</Link>
					</ul>
				);
			})}
		</nav>
	);
};

export default NavBar;
