import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import BGPattern from "./BGPattern";

const Work = () => {
	return (
		<>
			<section>
				<BGPattern />
				<Header />
				<div className="mx-4">
					<Navbar />
				</div>
			</section>
		</>
	);
};
export default Work;
