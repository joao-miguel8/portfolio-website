import "./App.css";
import { createRef } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import PdfGuideModal from "./pages/MarketingPlan";
import Home from "./pages/Home";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/999marketingPlan" element={<PdfGuideModal />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</>
	);
}

export default App;
