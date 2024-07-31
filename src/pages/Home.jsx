import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Contact from "../components/Contact";
import { useRef } from "react";

function Home() {
	const location = useLocation();
	const isMarketingPlanPage = location.pathname === "/999marketingPlan";
	const aboutRef = useRef(null);
	const contactRef = useRef(null);
	return (
		<>
			{!isMarketingPlanPage && (
				<>
					<NavBar />
					<HeroSection />
					<About />
					<Contact />
				</>
			)}
		</>
	);
}

export default Home;
