import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Header from "./Header";
import BGPattern from "./BGPattern";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import discordGIF from "../assets/giphy-discord-landing-page.gif";
import wellingtonLimousineGIF from "../assets/wellington-limousine-gif.gif";
import LegendOfZeldaGIF from "../assets/loz-breath-of-the-wild-gif.gif";
import cineEquipGIF from "../assets/cine-equip-gif.gif";
import instaCartGIF from "../assets/instacart-gif.gif";

const Work = () => {
	const projects = [
		{
			name: "Breath of the wild Website",
			summary: "A compendium showcasing materials,creatures and treasures in The Breath of the Wild video game.",
			techUsed: ["React", "TypeScript", "Tailwind"],
			githubLink: "https://github.com/joao-miguel8/breath-of-the-wild-companion-app",
			liveDemoLink: "https://breath-of-the-wild-companion-app.pages.dev/",
			img: LegendOfZeldaGIF,
		},
		{
			name: "Wellington Limousine",
			summary: "A local freelance client project showcasing their services, benefits and an email submission form to retain potential clients.",
			techUsed: ["TypeScript", "React", "Tailwind"],
			githubLink: "https://github.com/joao-miguel8/wellington-limousine",
			liveDemoLink: "https://wellington-limousine.pages.dev/",
			img: wellingtonLimousineGIF,
		},
		{
			name: "CineEquip",
			summary: "Full-stack software application using MERN (MongoDB, Express.js, React.js, Node.js + Typescript) designed to address the organizational needs of professionals in the film industry, a solution to the management of project equipment.",
			techUsed: ["React", "Tailwind", "Zustand", "Express", "Mongoose"],
			githubLink: "https://github.com/joao-miguel8/cineEquip",
			liveDemoLink: "",
			img: cineEquipGIF,
		},
		{
			name: "Instacart Landing Page",
			summary: "A landing page design challenge focusing specifically on copying an existing design with similar frontend functionality of the original.",
			techUsed: ["React", "TypeScript", "CSS"],
			githubLink: "https://github.com/joao-miguel8/instacart.com-design-challenge",
			liveDemoLink: "https://instacart-com-design-challenge.pages.dev/",
			img: instaCartGIF,
		},
		{
			name: "Discord Landing Page",
			summary: "A no framework landing page showcasing frontend skills like animated transitions and responsive design principles.",
			techUsed: ["HTML", "Javascript", "CSS"],
			githubLink: "https://github.com/joao-miguel8/discord-landing-page",
			liveDemoLink: "https://main--fancy-pithivier-ee4b22.netlify.app/",
			img: discordGIF,
		},
	];

	return (
		<>
			<BGPattern />
			<section className="mb-4 pt-10 mx-auto px-4 w-full lg:w-[60rem] h-full">
				<Header />
				<div>
					<Navbar />
					<motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
						<Swiper
							className="w-full mt-10 h-full"
							modules={[Pagination, Autoplay, Navigation]}
							navigation
							pagination={{
								clickable: true,
								type: "progressbar",
							}}
							spaceBetween={50}>
							<div>
								{projects.map(project => {
									return (
										<SwiperSlide>
											<h1 className="mt-20 font-bold text-center text-34 dark:text-white montserrat">{project.name}</h1>
											<p className="mx-auto mt-10 w-full md:w-[40rem] text-center text-20 dark:text-white montserrat">{project.summary}</p>
											<div className="mt-10 flex justify-center items-center flex-wrap gap-2 text-bold dark:text-white">
												<h4 className="font-bold text-16 montserrat ">Skills Used:</h4>
												{project.techUsed.map((tech, index) => {
													return (
														<>
															<h5 className="font-bold robotoMono">{tech}</h5>
															{index < project.techUsed.length - 1 && <span className="w-2 h-2 rounded-full bg-[#43baea]"></span>}
														</>
													);
												})}
											</div>
											{/* view live demo / view code button */}
											<div className="mt-8 flex justify-center gap-4 flex-wrap">
												{/* view live demo button */}
												<a
													href={project.liveDemoLink}
													target="_blank"
													className={`font-bold text-[14px] text-[#fff] bg-[#43baea] px-[22px] py-[6px] border-[solid] border-[#43baea] border-[2px] [box-shadow:rgb(0,_0,_0)_0px_0px_0px_0px] rounded-[50px] [transition:621ms] translate-y-[0] flex flex-row items-center cursor-pointer hover:[transition:800ms] hover:-translate-y-0 hover:bg-[#fff] hover:text-[#43baea] hover:border-[solid] hover:border-[2px] hover:border-[#43baea] montserrat ${
														project.name === "Portfolio" && "hidden"
													}`}>
													View live demo
												</a>
												{/* view code button */}
												<a
													href={project.githubLink}
													target="_blank"
													className="px-4 py-2 text-[14px] font-bold border rounded-full border-black dark:border-white hover:bg-black hover:text-white dark:hover:text-white dark:hover:border-black hover:dark:text-white dark:text-white
												transition ease-in-out duration-500 [box-shadow:0_4px_30px_rgba(0,_0,_0,_0.1)] backdrop-filter backdrop-blur-[8.1px] border-[solid] montserrat">
													View Code
												</a>
											</div>
											<img src={project.img} alt={`${project.name} image`} className=" mt-10 w-full h-auto" />
										</SwiperSlide>
									);
								})}
							</div>
						</Swiper>
					</motion.div>
				</div>
			</section>
		</>
	);
};
export default Work;
