import "./App.css";
import NavBar from "./components/Navbar";
import About from "./components/About.jsx";
import Contact from "./components/Contact";
import { createRef } from "react";
import HeroSection from "./components/HeroSection.jsx";

function App() {
	const inputRef = createRef();

	const scrollToForm = e => {
		inputRef.current.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<>
			<NavBar />
			<HeroSection scrollToForm={scrollToForm} />
			<About />
			<Contact getInTouchRef={inputRef} />
		</>
	);
}

export default App;
