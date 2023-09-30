import classNames from "classnames";
import "../App.css";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
	const location = useLocation();

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
						<Link to={navLink.to} className={classNames("text-18 text-dark font-bold dark:text-white robotoMono", location.pathname === navLink.to ? "text-[#1A96C6] dark:text-[#1cafe9]" : "")}>
							<li key={navLink.to}>{navLink.name}</li>
						</Link>
					</ul>
				);
			})}
		</nav>
	);
};

export default NavBar;
