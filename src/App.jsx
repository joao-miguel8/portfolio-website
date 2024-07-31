import "./App.css";
import { createRef } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import MarketingPlan from "./pages/MarketingPlan";
import Home from "./pages/Home";
import Work from "./pages/Work";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/work" element={<Work />} />
				<Route path="/marketingPlan" element={<MarketingPlan />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</>
	);
}

export default App;
