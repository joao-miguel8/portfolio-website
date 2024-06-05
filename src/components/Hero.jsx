const Hero = ({ scrollToForm }) => {
	return (
		<>
			<section className="mx-4">
				<div className="flex w-full h-[400px]">
					<div className="mx-auto">
						<div className="flex gap-4 items-center justify-center">
							{/* Linkedin */}
							<a className="transition duration-300 ease-in-out hover:-translate-y-2" target="_blank" href="https://www.linkedin.com/in/jo%C3%A3omiguelc/">
								<svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="7.025 7.025 497.951 497.95" id="linkedin">
									<linearGradient id="a" x1="-974.482" x2="-622.378" y1="1306.773" y2="1658.877" gradientTransform="translate(1054.43 -1226.825)" gradientUnits="userSpaceOnUse">
										<stop offset="0" stop-color="#2489be"></stop>
										<stop offset="1" stop-color="#0575b3"></stop>
									</linearGradient>
									<path
										fill="url(#a)"
										d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"></path>
								</svg>
							</a>
							{/* Resume */}
							<a target="_blank" href="" className="p-1 flex flex-col items-center shadow-md rounded-lg [box-shadow:rgba(9,_30,_66,_0.25)_0px_4px_8px_-2px,_rgba(9,_30,_66,_0.08)_0px_0px_0px_1px] transition duration-300 ease-in-out hover:-translate-y-2">
								<img src="public/cloud-download-alt_7435099.svg" alt="" className="w-6" />
								<span className="text-12 font-semibold uppercase">Resume</span>
							</a>
						</div>
						<div className="mt-8 flex flex-col lg:flex-row gap-6 justify-center items-center">
							<img src="public/JoaoHeadshot.jpg" alt="image of joão" className="inline-block bg-red-400 w-60 rounded-md" />
							<div className=" text-center lg:text-left">
								<h2 className="w-[22rem] text-32 font-medium monoSlab">Hey I am João, your next Digital Marketer. </h2>
								<button onClick={scrollToForm} className="mt-4 p-4 font-semibold bg-[#333] hover:bg-[#222] duration-200 text-white rounded-sm">
									Get in touch
								</button>
							</div>
						</div>
					</div>
				</div>
				<p className="mx-20 mt-20 text-28 text-center font-bold monoSlab">
					<span className="text-green-400">Driving growth</span>, <span className="text-green-400">boosting visibility</span>, and <span className="text-green-400"> maximizing ROI</span> through strategies and marketing techniques.
				</p>
			</section>
		</>
	);
};

export default Hero;
