const About = () => {
	return (
		<>
			<section className="flex border-4 w-full h-[600px]">
				<div className="mb-12 flex flex-col lg:flex-row gap-6 justify-center items-center mx-auto border-2">
					<img src="" alt="er" className="inline-block bg-red-400 h-60 w-60" />

					<div className="bg-green-300 md:w-80 text-center md:text-left">
						<h2 className="text-32 font-medium monoSlab">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit. </h2>
						<button className="mt-4 p-4 font-semibold bg-[#333] text-white">Get in touch</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
