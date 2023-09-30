import { motion } from "framer-motion";
import NavBar from "./Navbar";
import Header from "./Header";
import BGPattern from "./BGPattern";

const Skills = () => {
	const skills = ["React", "HTML", "CSS", "SASS", "Tailwind", "NODE", "Javascript", "Git", "Firebase"];

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
		<section>
			<BGPattern />
			<Header />
			<div className="mx-4">
				<NavBar />
				<div className="mt-6">
					<p className="text-black dark:text-white font-regular montserrat">Here is a list of all my skills, this list is steadily growing over time.</p>
					<motion.ul variants={variants} initial="hidden" animate="show" className="mt-4 flex flex-col gap-2">
						{skills.map((skill, i) => {
							return (
								<motion.li variants={item} key={i} className="text-20 text-[#1783ae] dark:text-[#20b6f1] robotoMono">
									{skill}
								</motion.li>
							);
						})}
					</motion.ul>
				</div>
			</div>
		</section>
	);
};

export default Skills;
