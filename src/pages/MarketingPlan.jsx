import classNames from "classnames";
import React, { useEffect, useRef } from "react";
import NavBar from "../components/Navbar";
import "/src/css/marketingPlan.css";

const MarketingPlan = () => {
	const formRef = useRef(null);

	const scriptContainerRef = useRef(null);

	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://eocampaign1.com/form/e81a421a-4e89-11ef-afc0-e5c4f265a4de.js";
		script.async = true;
		script.setAttribute("data-form", "e81a421a-4e89-11ef-afc0-e5c4f265a4de");

		scriptContainerRef.current?.appendChild(script);

		return () => {
			if (scriptContainerRef.current) {
				scriptContainerRef.current.innerHTML = "";
			}
		};
	}, []);

	return (
		<div className={classNames(`bg-white duration-500`)}>
			<NavBar />
			<div ref={scriptContainerRef}></div>
		</div>
	);
};

export default MarketingPlan;
