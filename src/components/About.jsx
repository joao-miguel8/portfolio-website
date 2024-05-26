import { motion } from "framer-motion";
import NavBar from "./Navbar";
import Header from "./Header";

const About = () => {
	return (
		<>
			<section className="mb-4 pt-10 mx-auto w-full lg:w-[60rem] h-full">
				<Header />
				<div className="mx-4 mb-12">
					<NavBar />
					<motion.div animate={{ x: 80 }} transition={{ type: "spring", stiffness: 100 }} id="about" className="mt-10 relative -left-20 flex flex-col gap-4">
						<h2 className="text-center text-40 dark:text-white monoSlab">👋 Hey, I'm João Miguel</h2>
						<p className="mx-auto mt-10 max-w-[700px] text-20 text-center dark:text-white leading-7 font-regular montserrat ">
							I am driven by an initial interest in game development, I embarked on a path that eventually led me to excel in frontend development as a web developer and software engineer.
						</p>
						<p className="mx-auto max-w-[700px] text-center text-20 dark:text-white leading-7 font-regular montserrat">
							My journey started from me trying to learn IOS development, which later led me down the path of Web development. The growing interest never fades when there are so many directions one can go, I know the importance of working within a team to contineously learn and improve
							my skillset with others while collaborating on awesome projects.
						</p>

						<a download href="/João-SWE-resume.pdf" className="group mx-auto w-fit flex gap-2 items-end text-end text-18 font-bold robotoSlab dark:text-white">
							<div className="flex gap-2 items-end">
								<span className="group-hover:text-[#1A99C6] duration-300">DOWNLOAD CV</span>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#1A96C6] ">
									<path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
								</svg>
							</div>
						</a>
					</motion.div>
				</div>
			</section>
		</>
	);
};

export default About;
