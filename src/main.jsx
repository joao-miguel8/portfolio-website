import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Work from "./components/Works.jsx";
import AppThemeContext from "./context/AppThemeContext.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" element={<Navigate to="/about" replace />} />
			<Route path="/about" element={<About />} />
			<Route path="/skills" element={<Skills />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/works" element={<Work />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AppThemeContext>
			<RouterProvider router={router}>
				<App />
			</RouterProvider>
		</AppThemeContext>
	</React.StrictMode>
);
