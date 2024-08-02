import React from "react";
import NavBar from "../components/Navbar";

function Work() {
	return (
		<>
			<NavBar />
			<section className="mx-20">
				<h3 className="mt-20 text-center text-26 monoslab font-semibold">Product Launch Case Study: GoPro Hero 12 Black Edition</h3>
				<div className="mt-20 flex flex-col gap-4">
					<div className="flex gap-2">
						<h5 className="monoSlab font-semibold">Brand:</h5>
						<span className="montserrat font-semibold">GoPro</span>
					</div>
					<div className="flex gap-2">
						<h5 className="monoSlab font-semibold">Project Title:</h5>
						<p className="monsterrat"> GoPro HERO12 BLACK Edition Launch - Sales and Conversions</p>
					</div>
					<p className="montserrat">
						GoPro is an american technology company founded in 2002, manufacturing action cameras and developing its own mobile apps and video-editing software. With the launch of the new GoPro HERO12 BLACK Edition, the main goal is to improve the promotion with various paid advertising
						channels.
					</p>
					<h4 className="mt-12 text-18 monoSlab font-semibold">Objective</h4>
					<div className="flex flex-col">
						<h5 className="text-14 monoSlab font-semibold">Primary:</h5>
						<ul className="ml-10">
							<li className="text-16 montserrat list-disc">Drive Sales & Conversions for the GoPro HERO12 Black Edition</li>
							<li className="montserrat list-disc">Secondary: Increase more website traffic to the main GoPro website</li>
						</ul>
					</div>
					<div>
						<h5 className="text-14 monoSlab font-semibold">Platforms & Channels:</h5>
						<p className="montserrat">Google Ads: (Search, Display, YouTube), Facebook</p>
					</div>
					<div>
						<h5 className="text-14 monoSlab font-semibold">Outdoor Enthusiasts:</h5>
						<p className="montserrat">Aventure travelers, vloggers, sports enthusiasts Budget: $500,000</p>
					</div>
				</div>
			</section>
			<iframe className="my-20 mx-auto border-2 w-3/4 md:w-[600px] min-w-[400px] h-[600px] rounded-md" src="public/Paid Ads Strategy for the release of GoPro HERO 12 Black Edition copy.pdf" frameBorder="0" title="PDF Viewer"></iframe>
		</>
	);
}

export default Work;
