const About = () => {
	return (
		<>
			<section className="mx-4">
				<div className="flex w-full h-[400px]">
					<div className="flex flex-col lg:flex-row gap-6 justify-center items-center mx-auto">
						<img src="" alt="image of joão" className="inline-block bg-red-400 h-60 w-60 rounded-md" />

						<div className=" text-center lg:text-left">
							<h2 className="w-[22rem] text-32 font-medium monoSlab">Hey I am João, your next Digital Marketer. </h2>
							<button className="mt-4 p-4 font-semibold bg-[#333] hover:bg-[#222] duration-200 text-white rounded-sm">Get in touch</button>
						</div>
					</div>
				</div>
				<p className="mx-20 mt-14 text-24 text-center font-bold monoSlab">
					<span className="text-green-400">Driving growth</span>, <span className="text-green-400">boosting visibility</span>, and <span className="text-green-400"> maximizing ROI</span> through strategies and marketing techniques.
				</p>
			</section>
		</>
	);
};

export default About;
