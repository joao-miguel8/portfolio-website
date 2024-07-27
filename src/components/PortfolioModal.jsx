import classNames from "classnames";
import React from "react";

const PortfolioModal = ({ isPortfolioModalClosed, setIsPortfolioModalClosed }) => {
	return (
		<div className={classNames(`z-50 fixed bottom-0 bg-white w-full h-screen duration-500`, isPortfolioModalClosed ? "translate-y-0" : "translate-y-full")}>
			<button onClick={() => setIsPortfolioModalClosed(false)} className="mt-4 mx-2 px-2 absolute right-0 text-32">
				X
			</button>
		</div>
	);
};

export default PortfolioModal;
