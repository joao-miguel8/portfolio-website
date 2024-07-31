import classNames from "classnames";
import { Link } from "react-router-dom";

import "../App.css";

const NavBar = () => {
	const navLinks = [
		{ link: "/home", scrollLink: "#about", name: "About Me", onClick: null },
		{ link: "/home", scrollLink: "#contact", name: "Contact", onClick: null },
		{ link: "/marketingPlan", scrollLink: null, name: "$999 Marketing Plan" },
		{ link: "/work", scrollLink: null, name: "Work" },
	];

	return (
		<header className="sticky bottom-0 z-40 px-2 py-4 flex items-center border-t-2 border-gray-150 bg-white">
			<img src="src/assets/favicon.png" alt="" className="w-10" />
			<nav className="mx-auto p-4 flex justify-center flex-wrap gap-4">
				<ul className="flex gap-6">
					{navLinks.map(navLink => {
						return (
							<li>
								<Link to={navLink.link} key={navLink.name}>
									{navLink.name !== "$999 marketing plan" ? (
										<span className={classNames("font-bold text-18 robotoMono hover:text-[#3078c0]")}>{navLink.name}</span>
									) : (
										<span className="font-bold text-18 robotoMono hover:text-[#050505]">
											<span className="line-through mr-2">{navLink.name.split(" ")[0]} </span>
											{navLink.name.slice(5)}
										</span>
									)}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};

export default NavBar;
