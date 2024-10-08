import Certifications from "./Certifications";
import IphoneIMG from "../assets/iphone-img.avif";
import EmailIMG from "../assets/email-img.avif";
import SeoIMG from "../assets/seo-img.avif";
import WebsiteIMG from "../assets/website-img.avif";
import GoogleAdsIMG from "../assets/googleads-img.avif";

const About = () => {
	const coreServices = [
		{ title: "SEM/PPC", img: GoogleAdsIMG },
		{ title: "SEO", img: SeoIMG },
		{ title: "Paid Social Ads", img: IphoneIMG },
		{ title: "Website Development", img: WebsiteIMG },
		{ title: "Email Marketing", img: EmailIMG },
	];

	return (
		<>
			<div className="mt-40 custom-shape-divider-top-1722475952 bg-[#3078c0]">
				{/* front background design */}
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
					<h2 className="text-center text-34 monoSlab font-semibold text-white">👋 Hi, I'm João!</h2>
					<p className="text-center  mt-4 text-18 leading-8 montserrat text-white">
						With a background in software development and an early passion for game development, I adjusted my focus to digital marketing. Leveraging my web development skills, I have successfully helped a freelance client’s improve lead generation and enhance online presence. I want to
						continue to transform and improve businesses in the digital landscape through strategic marketing.
					</p>
					<Certifications />
					<div className="mt-20 mx-auto">
						<h3 className="text-center text-24 font-semibold uppercase monoSlab text-white">Core Services</h3>
						<div className="mt-4 flex flex-wrap justify-center">
							{coreServices.map(service => {
								return (
									<div className={`group relative flex items-center justify-center bg-cover bg-center bg-no-repeat w-60 h-80 bg-black border-[1px]`} style={{ backgroundImage: `url(${service.img})` }}>
										{/* overlay */}
										<div className="absolute bottom-0 w-full h-full opacity-50 group-hover:opacity-0 bg-black duration-300"></div>
										<h5 className="w-full text-center z-20 text-26 uppercase font-semibold montserrat text-white group-hover:bg-black opacity-75 duration-300">{service.title}</h5>
									</div>
								);
							})}
						</div>
					</div>
				</section>
				{/* end background design */}
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
