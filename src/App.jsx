import "./App.css";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Work from "./components/Works.jsx";

function App() {
	return (
		<>
			<NavBar />
			<About />
			<Work />
			<Skills />
			<Contact />
		</>
	);
}

export default App;
