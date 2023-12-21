import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import BGPattern from "./BGPattern";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import discordGIF from "../assets/giphy-discord-landing-page.gif";
import underConstructionIMG from "../assets/under-construction-img.jpg";

const Work = () => {
	const projects = [
		{
			name: "CineEquip",
			summary: "Full-stack software application using MERN (MongoDB, Express.js, React.js, Node.js + Typescript) designed to address the organizational needs of professionals in the film industry, offering a solution to enhance the management of project gear.",
			techUsed: ["React", "Tailwind", "Zustand", "Express", "Mongoose"],
			githubLink: "https://github.com/joao-miguel8/cineEquip",
			img: underConstructionIMG,
		},
		{ name: "Portfolio", summary: "my portfolio website showcasing my current skills and my collection of portfolio projects I have worked on.", techUsed: ["React", "Tailwind"], githubLink: "https://github.com/joao-miguel8/portfolio-website", img: "" },

		{
			name: "Discord Landing Page",
			summary: "A no framework landing page showcasing animated transitions and responsive design principles",
			techUsed: ["HTML", "CSS", "Javascript"],
			githubLink: "https://github.com/joao-miguel8/discord-landing-page",
			img: discordGIF,
		},
	];

	return (
		<>
			<BGPattern />
			<section className="mx-auto w-full lg:w-[60rem] h-full">
				<Header />
				<div>
					<Navbar />
					<motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
						<Swiper
							className="w-full mt-10 h-full"
							modules={[Pagination]}
							pagination={{
								clickable: true,
							}}
							spaceBetween={50}>
							<div>
								{projects.map(project => {
									return (
										<SwiperSlide>
											<h1 className="text-34 dark:text-white montserrat">{project.name}</h1>
											<p className="mt-10 w-full md:w-[40rem] text-20 dark:text-white montserrat">{project.summary}</p>
											<div className="mt-10 flex items-center flex-wrap gap-2 text-bold dark:text-white">
												<h4 className="text-16  montserrat ">Skills Used:</h4>
												{project.techUsed.map((tech, index) => {
													return (
														<>
															<h5 className="font-bold robotoMono">{tech}</h5>
															{index < project.techUsed.length - 1 && <span className="w-2 h-2 rounded-full bg-[#43baea]"></span>}
														</>
													);
												})}
											</div>
											<div className="mt-8 flex gap-4 flex-wrap">
												<a
													href={project.githubLink}
													target="_blank"
													className="font-bold text-[14px] text-[#fff] bg-[#43baea] px-[22px] py-[6px] border-[solid] border-[#43baea] border-[2px] [box-shadow:rgb(0,_0,_0)_0px_0px_0px_0px] rounded-[50px] [transition:621ms] translate-y-[0] flex flex-row items-center cursor-pointer hover:[transition:800ms] hover:-translate-y-0 hover:bg-[#fff] hover:text-[#43baea] hover:border-[solid] hover:border-[2px] hover:border-[#43baea] montserrat">
													View live demo
												</a>
												<a
													href="#"
													className="px-4 py-2 text-[14px] font-bold border border-black dark:border-white hover:bg-black hover:text-white dark:hover:text-white dark:hover:border-black hover:dark:text-white dark:text-white
												transition ease-in-out duration-500 [box-shadow:0_4px_30px_rgba(0,_0,_0,_0.1)] backdrop-filter backdrop-blur-[8.1px] border-[solid] montserrat">
													View Code
												</a>
											</div>
											<img src={project.img} alt={`${project.name} image`} className=" mt-4 w-[400px] border-2 h-60" />
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
