const About = () => {
	const coreServices = [
		{ title: "Pay-Per-Click:PPC", description: "Looking to reach your ideal audience and maximize your ROI? Targeted PPC campaigns ensure your ads are seen by the right people at the right time." },
		{ title: "Search Engine Optimization:SEO", description: "Need to boost your online visibility? Having a tailored SEO strategy can help your website rank higher, making it easier for customers to find you." },
		{ title: "Paid Social Ads", description: "Looking to engage with your audience on social media? My eye-catching paid social ads connect you with your target audience and drive conversions." },
	];

	return (
		<>
			<section id="about" className="mx-14 pt-40 mt-20 min-h-[200px]">
				<h2 className="text-34 monoSlab font-semibold">Hi, I'm João!</h2>
				<p className="mt-4 text-18 leading-8 montserrat">
					My journey began in the world of software development, initially fueled by a passion for game development. As I went deeper, I found myself learning web/software development as a hobby and gaining some freelance experience. It wasn't long before I discovered the dynamic field of
					digital marketing. I realized that even the most brilliant website or SaaS product can't reach its full potential without effective marketing. This led me down the path of all things digital marketing.
				</p>
				<h3 className="mt-10 text-30">Core Services</h3>
				<ul className="mt-4 flex flex-col gap-4 md:flex-row">
					{coreServices.map(service => {
						return (
							<li key={service.title}>
								<h5 className="text-18 font-semibold montserrat">{service.title}</h5>
								<p className="montserrat">{service.description}</p>
							</li>
						);
					})}
				</ul>
			</section>
		</>
	);
};

export default About;
