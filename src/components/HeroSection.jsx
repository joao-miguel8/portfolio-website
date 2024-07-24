import ProfileIMG from "/joaoHeadshot.jpg";

const HeroSection = ({ scrollToForm }) => {
	return (
		<>
			<section className="mx-4">
				<div className="flex w-full ">
					<div className="mx-auto">
						<div className="mt-8 flex flex-col items-center">
							<img src={ProfileIMG} alt="image of joão" className="inline-block bg-white w-60 rounded-full" />
							<div className="mt-12">
								<h2 className="text-32 font-bold monoSlab text-center"> Creative and Strategic Marketing Support for Your Business.</h2>
								<p className="mt-6 mx-20 text-24 text-center font-bold monoSlab">
									<span className="text-green-400">Driving growth</span>, <span className="text-green-400">boosting visibility</span>, and <span className="text-green-400"> maximizing ROI</span> through strategies and marketing techniques.
								</p>
							</div>
							<div className="mt-10 flex gap-4 items-center text-center lg:text-left">
								<button onClick={scrollToForm} className="p-4 font-semibold bg-[#333] hover:bg-[#222] duration-200 text-white rounded-md text-14 uppercase">
									Send an Email
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default HeroSection;
