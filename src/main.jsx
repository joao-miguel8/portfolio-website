import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import AppThemeContext from "./context/AppThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AppThemeContext>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</AppThemeContext>
	</React.StrictMode>
);
