import "./App.css";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact";
import Work from "./components/Works.jsx";

function App() {
	return (
		<>
			<NavBar />
			<Hero />
			<About />
			{/* <Work /> */}
			{/* <Contact /> */}
		</>
	);
}

export default App;
