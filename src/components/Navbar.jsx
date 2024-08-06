import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "../App.css";

const NavBar = () => {
	const navLinks = [
		{ link: "/", name: "Home", onClick: null },
		{ link: "/work", name: "Work" },
		{ link: "/marketingPlan", name: "$999 Marketing Plan" },
	];

	const [openNavMenu, setOpenNavMenu] = useState(false);
	const location = useLocation();

	return (
		<>
			<div className={classNames(openNavMenu === true ? "translate-x-0" : "translate-x-full", "p-4 fixed top-0 right-0 z-50 duration-300 w-[320px] h-screen bg-white [box-shadow:rgba(0,_0,_0,_0.05)_0px_6px_24px_0px,_rgba(0,_0,_0,_0.08)_0px_0px_0px_1px] ")}>
				<button onClick={() => setOpenNavMenu(false)} className="absolute top-4 right-3">
					<img className="w-8" src="./src/assets/close-icon.svg" alt="close navigation menu" />
				</button>
				<nav className="ml-4 mt-20 mx-auto">
					<ul className="flex flex-col gap-10">
						{navLinks.map(navLink => {
							return (
								<li>
									<Link to={navLink.link} key={navLink.name}>
										{navLink.name !== "$999 marketing plan" ? (
											<span className={classNames("font-bold text-18 robotoMono hover:text-[#3078c0]", location.pathname === navLink.link ? "text-[#3078c0]" : "text-black")}>{navLink.name}</span>
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
			</div>
			<header className="sticky top-0 z-40 px-2 py-4 flex items-center border-b-2 border-gray-150 bg-white">
				<img src="src/assets/favicon.png" alt="" className="w-10" />
				<button onClick={() => setOpenNavMenu(true)} className="absolute right-4">
					<img className="w-8" src="./src/assets/menu-icon.svg" alt="open navigation menu" />
				</button>
			</header>
		</>
	);
};

export default NavBar;
