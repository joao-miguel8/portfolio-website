const About = () => {
	const coreServices = [
		{ title: "Pay-Per-Click:PPC", description: "Looking to reach your ideal audience and maximize your ROI? Targeted PPC campaigns ensure your ads are seen by the right people at the right time." },
		{ title: "Search Engine Optimization:SEO", description: "Need to boost your online visibility? Having a tailored SEO strategy can help your website rank higher, making it easier for customers to find you." },
		{ title: "Paid Social Ads", description: "Looking to engage with your audience on social media? My eye-catching paid social ads connect you with your target audience and drive conversions." },
	];

	return (
		<>
			<div className="mt-40 custom-shape-divider-top-1722475952 bg-[#3078c0]">
				<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
					<path fill="#1d5fa1" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
					<path
						fill="#1d5fa1"
						d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
						opacity=".5"
						class="shape-fill"></path>
					<path fill="#1d5fa1" d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
				</svg>

				<section id="about" className="mx-14 mt-20 min-h-[200px]">
					<h2 className="text-34 monoSlab font-semibold text-white">Hi, I'm João!</h2>
					<p className="mt-4 text-18 leading-8 montserrat text-white">
						My journey began in the world of software development, initially fueled by a passion for game development. As I went deeper, I've learned web/software development in my free time and gained some freelance work experience.
					</p>
					<p className="mt-4 text-18 leading-8 montserrat text-white">
						It wasn't long before I discovered the dynamic field of digital marketing. I realized that even the most brilliant website or SaaS product can't reach its full potential without effective marketing. This led me down the path of all things digital marketing.
					</p>
					<h3 className="mt-20 text-24 font-semibold uppercase">Core Services</h3>
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
				<div className="custom-shape-divider-bottom-1722476847 pt-20">
					<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path fill="#1d5fa1" d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z" class="shape-fill"></path>
					</svg>
				</div>
			</div>
		</>
	);
};

export default About;
