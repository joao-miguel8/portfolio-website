import React from "react";
import NavBar from "../components/Navbar";
import wellington_limousine_logo from "../assets/wellington-imo-logo.png";
import wellington_limousine_seo_audit from "../assets/Wellington Limousine SEO Audit_.pdf";
import gopro_case_study from "../assets/Paid_Ads_Strategy_for_the_release_of_GoPro_HERO_12_black_edition.pdf";

function Work() {
	return (
		<>
			<NavBar />
			{/* Case study: Wellington Limousine */}
			<section className="w-3/4 mt-20 mx-auto">
				<div>
					<h3 className="text-center text-26 monoslab font-semibold">Project Brief - Wellington Limousine Case Study</h3>
					<img className="mt-4 w-28 mx-auto" src={wellington_limousine_logo} alt="wellington limousine logo" />
				</div>
				{/* Introduction */}
				<div>
					<h5 className="text-18 mt-14 monoSlab font-semibold">Introduction:</h5>
					<p className="montserrat">
						<a className="mx-2 underline text-blue-700" href="https://wellingtonlimousine.net/">
							Wellington Limousine
						</a>
						is an owner-operated chauffeur transportation service based in New York. The business offers various transportation services, including luxury rides, weddings, and airport transfers. In January 2024, the website owner expressed concerns about receiving low leads.
					</p>
				</div>
				{/* Campaign Timeline Details */}
				<div className="mt-4 flex flex-col gap-2">
					<h5 className="monoSlab font-semibold">Campaign Timeline:</h5>
					<div>
						<h5 className="monoSlab font-semibold">Duration:</h5>
						<span className="montserrat">1 month 3/4 - (47 days)</span>
					</div>
					<div>
						<h5 className="monoSlab font-semibold">Dates:</h5>
						<span className="montserrat">May 14th - June 30th</span>
					</div>
					<div>
						<h5 className="monoSlab font-semibold">Budget:</h5>
						<span className="montserrat">$120</span>
					</div>
				</div>
				{/* Challenge */}
				<div>
					<h4 className="text-18 mt-12 monoSlab font-semibold">Challenge:</h4>
					<p className="montserrat">It’s a transportation based business with a variety of service types. Client’s main focus was to generate more leads. Therefore, our major challenges were:</p>
					<ul className="ml-4 mt-4 montserrat list-disc">
						<li>Choosing keywords with commercial intent</li>
						<li>Bringing highly relevant traffic</li>
						<li>Increase form submission leads</li>
						<li>Decrease the cost/conversions</li>
					</ul>
				</div>
				<p className="my-6 text-14 italic">The business owner had no marketing presence digitally or a web presence (no website)</p>
				{/* My Role */}
				<div>
					<h4 className="text-18 monoSlab font-semibold">My Role:</h4>
					<p className="mt-2 montserrat">
						Wellington Limousine lacked an online presence, so I leveraged my digital marketing expertise and software development experience to create a user-friendly, SEO-optimized website for them. I also handled the hosting and deployment of the site. Additionally, I launched and
						monitored a Google Ads campaign to drive leads and increase website traffic.
					</p>
					<p className="mt-2 montserrat">
						The Google Ads Campaign was to promote a few top performing services they offer, with a micro budget of less than $200. I structured the Google Ads campaign by dividing each service into their own ad group’s with each ad group having highly relevant keywords associated with
						each service.
					</p>
				</div>
				{/* What we achieved */}
				<div className="p-4 mt-6 bg-gray-100 rounded-md [box-shadow:rgba(0,_0,_0,_0.05)_0px_6px_24px_0px,_rgba(0,_0,_0,_0.08)_0px_0px_0px_1px]">
					<h4 className="text-18 monoSlab font-semibold">What We Achieved:</h4>
					<div className="flex flex-col gap-2 flex-wrap">
						<div className="mt-4">
							<h5 className="monoSlab font-semibold">Campaign Name:</h5>
							<p className="montserrat">Wellington Limousine | SEARCH | EN | US | NY | services</p>
						</div>
						<div>
							<h5 className="monoSlab font-semibold">Leads Generated:</h5>
							<p className="montserrat">9</p>
						</div>
						<div>
							<h5 className="monoSlab font-semibold">AOV:</h5>
							<p className="montserrat">$75 - $300(average $187.50)</p>
						</div>
						<div className="flex gap-2">
							<h5 className="monoSlab font-semibold">Average CPC:</h5>
							<p className="montserrat">$2.92</p>
						</div>
						<div className="flex gap-4 flex-wrap">
							<div>
								<h5 className="monoSlab font-semibold">Clicks:</h5>
								<p className="montserrat">41</p>
							</div>
							<div>
								<h5 className="monoSlab font-semibold">Impressions:</h5>
								<p className="montserrat">436</p>
							</div>
							<div>
								<h5 className="monoSlab font-semibold">CTR:</h5>
								<p className="montserrat">9.51%</p>
							</div>
						</div>
						<div className="flex gap-2 flex-wrap">
							<div>
								<h5 className="monoSlab font-semibold">Conversion Rate:</h5>
								<p className="montserrat">21.95%</p>
							</div>
							<div>
								<h5 className="monoSlab font-semibold">ROAS:</h5>
								<p className="montserrat">$14.02</p>
							</div>
							<div>
								<h5 className="monoSlab font-semibold">Revenue:</h5>
								<p className="montserrat">$1,687</p>
							</div>
							<div>
								<h5 className="monoSlab font-semibold">Rev Per Click:</h5>
								<p className="montserrat">$41.14</p>
							</div>
						</div>
						<div>
							<h5 className="monoSlab font-semibold">Ad Spend:</h5>
							<p className="montserrat">$120</p>
						</div>
					</div>
					<img className="mx-auto mt-6 rounded-md w-full max-w-[800px]" src="dist/ga-campaign-wellington-limo-overview.png" alt="image google ads campaign data" />
				</div>
				{/* SEO AUDIT */}
				<div className="my-20">
					<h3 className="text-center text-20 monoSlab font-semibold">SEO Audit For Wellington Limousine</h3>
					<iframe className=" mt-8 mx-auto border-2 w-3/4 md:w-[600px] min-w-[400px] h-[600px] rounded-md" src={wellington_limousine_seo_audit} frameBorder="0" title="seo-audit-wellingtonlimousine-pdf"></iframe>
				</div>
			</section>

			{/* ------------------------------- */}
			{/* ------------------------------- */}

			{/* Case Study: GoPro Hero 12 Black Edition */}
			<section className="mt-80 mx-20">
				<h3 className="mt-20 text-center text-26 monoslab font-semibold">Product Launch Case Study: GoPro Hero 12 Black Edition</h3>
				<img className="mt-4 mx-auto w-80" src="src/assets/gopro-logo.png" alt="gopro logo" />
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
				<iframe className="my-20 mx-auto border-2 w-3/4 md:w-[600px] min-w-[400px] h-[600px] rounded-md" src={gopro_case_study} frameBorder="0" title="PDF Viewer"></iframe>
			</section>
		</>
	);
}

export default Work;
