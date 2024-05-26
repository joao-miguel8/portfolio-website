import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Work from "./components/Works.jsx";

function App() {
	return (
		<>
			<Header />
			<NavBar />
			<About />
			<Work />
			<Skills />
			<Contact />
		</>
	);
}

export default App;
