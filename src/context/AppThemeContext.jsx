import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const AppThemeContext = props => {
	const [isDarkTheme, setIsDarkTheme] = useState(true);

	const toggleTheme = () => {
		setIsDarkTheme(prevState => !prevState);
	};

	useEffect(() => {
		const bodyEle = document.querySelector("body");
		bodyEle.classList.toggle("dark", isDarkTheme);
		bodyEle.classList.toggle("light", !isDarkTheme);
	}, [isDarkTheme]);

	return (
		<div>
			<ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>{props.children}</ThemeContext.Provider>
		</div>
	);
};

export default AppThemeContext;
