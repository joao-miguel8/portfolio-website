import React from "react";
import GoogleLogo from "../assets/Google__G__logo.svg";
import FacebookLogo from "../assets/facebook_logo.svg";
import BingLogo from "../assets/Bing_Logo.svg";
import HubSpotLogo from "../assets/HubSpot_Logo.svg";

function Certifications() {
	const certificationsList = [
		{ logo: GoogleLogo, text: "Google Certified", size: "w-14" },
		// { logo: FacebookLogo, text: "Facebook Certified", size: "w-14" },
		// { logo: BingLogo, text: "Bing Certified", size: "w-16" },
		{ logo: HubSpotLogo, text: "Hubspot Certified", size: "w-18" },
	];
	return (
		<div className="mt-28">
			<h3 className="uppercase text-center monoSlab font-semibold text-24 text-white">Certifications</h3>
			{/* Certifications list */}
			<div className="flex flex-wrap gap-10 justify-center">
				{certificationsList.map(item => {
					return (
						<div key={item.text} className="mt-4 w-fit">
							<span className="text-16 text-white montserrat font-semibold">{item.text}</span>
							<img className={`mt-2 ${item.size} m-auto`} src={item.logo} alt={item.text + "image"} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Certifications;
