import classNames from "classnames";
import "../App.css";
import { useContext } from "react";
import { ThemeContext } from "../context/AppThemeContext";

const NavBar = ({ setIsPortfolioModalClosed }) => {
	const themeMode = useContext(ThemeContext);

	const navLinks = [
		{ link: "#about", name: "About Me", onClick: null },
		{ link: "#contact", name: "Contact", onClick: null },
		{ link: "#portfolio", name: "Portfolio", onClick: () => setIsPortfolioModalClosed(true) },
	];

	return (
		<header className="sticky top-0 z-40 px-2 mb-20 py-4 flex items-center border-b-2 border-b-gray-100 bg-white ">
			<img src="src/assets/favicon.png" alt="" className="w-10" />
			<nav className="mx-auto p-4 flex justify-center flex-wrap gap-4">
				<ul className="flex gap-6">
					{navLinks.map(navLink => {
						return (
							<button onClick={navLink.onClick} key={navLink.to} href={navLink.link} className="cursor-pointer">
								<li className={classNames(themeMode.isDarkTheme ? "text-[#333]" : "dark:text-[#333]", "font-bold text-18 robotoMono hover:text-[#3078c0]")}>{navLink.name}</li>
							</button>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};

export default NavBar;
