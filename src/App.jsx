import "./App.css";
import { useState } from "react";
import NavBar from "./components/Navbar";
import About from "./components/About.jsx";
import Contact from "./components/Contact";
import { createRef } from "react";
import HeroSection from "./components/HeroSection.jsx";
import PortfolioModal from "./components/PortfolioModal.jsx";

function App() {
	const inputRef = createRef();
	const [isPortfolioModalClosed, setIsPortfolioModalClosed] = useState(false);
	const scrollToForm = e => {
		inputRef.current.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<>
			<NavBar setIsPortfolioModalClosed={setIsPortfolioModalClosed} />
			<HeroSection scrollToForm={scrollToForm} />
			<About />
			<Contact getInTouchRef={inputRef} />
			<PortfolioModal isPortfolioModalClosed={isPortfolioModalClosed} setIsPortfolioModalClosed={setIsPortfolioModalClosed} />
		</>
	);
}

export default App;
