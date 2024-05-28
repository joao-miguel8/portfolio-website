import "./App.css";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact";
import { createRef } from "react";

function App() {
	const inputRef = createRef();

	const scrollToForm = e => {
		inputRef.current.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<>
			<NavBar />
			<Hero scrollToForm={scrollToForm} />
			<About />
			<Contact getInTouchRef={inputRef} />
		</>
	);
}

export default App;
