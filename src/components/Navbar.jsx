import classNames from "classnames";
import "../App.css";
import { useContext } from "react";
import { ThemeContext } from "../context/AppThemeContext";

const NavBar = ({ setIsPortfolioModalClosed }) => {
	const themeMode = useContext(ThemeContext);

	const navLinks = [
		{ link: "#about", name: "About Me", onClick: null },
		{ link: "#contact", name: "Contact", onClick: null },
		{ link: "#pdfGuide", name: "$999 Marketing Plan", onClick: () => setIsPortfolioModalClosed(true) },
	];

	return (
		<header className="sticky top-0 z-40 px-2  py-4 flex items-center border-b-2 border-b-gray-100 bg-white ">
			<img src="src/assets/favicon.png" alt="" className="w-10" />
			<nav className="mx-auto p-4 flex justify-center flex-wrap gap-4">
				<ul className="flex gap-6">
					{navLinks.map(navLink => {
						return (
							<a onClick={navLink.onClick} key={navLink.to} href={navLink.link} className="cursor-pointer">
								{navLink.name !== "$999 marketing plan" ? (
									<li className={classNames("font-bold text-18 robotoMono hover:text-[#3078c0]")}>{navLink.name}</li>
								) : (
									<li className="font-bold text-18 robotoMono hover:text-[#3078c0]">
										<span className="line-through mr-2">{navLink.name.split(" ")[0]} </span>
										{navLink.name.slice(5)}
									</li>
								)}
							</a>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};

export default NavBar;
