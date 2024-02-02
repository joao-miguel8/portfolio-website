import { FaReact, FaCss3Alt, FaHtml5, FaSass, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiTailwindcss, SiTypescript, SiJavascript } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

import { motion } from "framer-motion";
import NavBar from "./Navbar";
import Header from "./Header";
import BGPattern from "./BGPattern";
const size = "26px";
const Skills = () => {
	const skills = [
		{ skill: "REACT", logo: <FaReact color="#1A95c6" size={size} /> },
		{ skill: "HTML", logo: <FaHtml5 color="#F06529" size={size} /> },
		{ skill: "CSS", logo: <FaCss3Alt color="#1A95c6" size={size} /> },
		{ skill: "SASS", logo: <FaSass color="#c69" size={size} /> },
		{ skill: "TAILWIND", logo: <SiTailwindcss color="#1A95c6" size={size} /> },
		{ skill: "NODE", logo: <FaNodeJs color="#68A063" size={size} /> },
		{ skill: "JAVASCRIPT", logo: <SiJavascript color="#F0DB4F" size={size} /> },
		{ skill: "TYPESCRIPT", logo: <SiTypescript color="#1A95c6" size={size} /> },
		{ skill: "GIT", logo: <FaGitAlt color="#f15025" size={size} /> },
		{ skill: "FIREBASE", logo: <IoLogoFirebase color="#f15025" size={size} /> },
		{ skill: "MONGODB", logo: <DiMongodb color="#4DB33D" size={size} /> },
	];

	const variants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};
	const item = {
		hidden: {
			opacity: 0,
			x: -40,
		},
		show: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.4,
			},
		},
	};

	return (
		<>
			<BGPattern />
			<section className="mb-4 pt-10 mx-auto w-full lg:w-[60rem] h-full">
				<Header />
				<div className="mx-4">
					<NavBar />
					<div className="mt-20">
						<p className="text-center text-20 font-bold text-black dark:text-white font-regular montserrat">A collection of skills I have worked with.</p>
						<motion.ul variants={variants} initial="hidden" animate="show" className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
							{skills.map((skill, i) => {
								return (
									<motion.li variants={item} key={i} className="p-2 flex items-center justify-center gap-4 text-18 font-bold text-[#1783ae] dark:text-white robotoMono bg-white/20 shadow-lg ">
										{skill.logo}
										<span>{skill.skill}</span>
									</motion.li>
								);
							})}
						</motion.ul>
					</div>
				</div>
			</section>
		</>
	);
};

export default Skills;
