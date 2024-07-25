import classNames from "classnames";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = ({ getInTouchRef }) => {
	const [nameInput, setNameInput] = useState("");
	const [emailInput, setEmailInput] = useState("");
	const [descriptionInput, setDescriptionInput] = useState("");

	return (
		<>
			<section id="contact" className="mt-60 mb-4 mx-auto w-full lg:w-[60rem] h-full">
				<div className="mx-8">
					<motion.div animate={{ x: 80, y: 0 }} className="mt-10 relative -left-20">
						<div className="p-8 [box-shadow:rgba(60,_64,_67,_0.3)_0px_1px_2px_0px,_rgba(60,_64,_67,_0.15)_0px_1px_3px_1px] rounded-md">
							<h2 className="text-24 uppercase monoSlab font-semibold dark:text-#333">Lets Have a Chat</h2>
							<p className="mt-4 montserrat">Let me show you how an incredible marketing strategy can drive boost your brands awareness, increase your potential traffic and revenue.</p>
							<form ref={getInTouchRef} className="mt-8 flex flex-col gap-4" action="https://api.web3forms.com/submit" method="POST">
								{/* connect form to web3forms endpoint with public api key */}
								<input type="hidden" name="apikey" value="15e1c0c6-fe6c-4ab2-a32d-ed52e7a3a762"></input>
								{/* Name input */}
								<label required htmlFor="name" className=" flex flex-col dark:text-#333 robotoMono">
									Name
									<input
										required
										type="text"
										name="name"
										onChange={e => setNameInput(e.target.value)}
										className={classNames("pb-1 bg-transparent border-b-[1px] border-black dark:border-text-#333 focus:outline-none focus:border-[#3078c0] focus:text-#333 dark:focus:border-[#3078c0] transition ease-in-out duration-300")}
									/>
								</label>
								{/* Email Input */}
								<label htmlFor="email" pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" className=" flex flex-col dark:text-#333 robotoMono">
									E-mail
									<input
										required
										onChange={e => setEmailInput(e.target.value)}
										type="email"
										name="email"
										className="pb-1 bg-transparent border-b-[1px] border-black dark:border-#333 focus:outline-none focus:border-#333 focus:text-#333 dark:focus:border-[#3078c0] transition ease-in-out duration-300"
									/>
								</label>
								{/* description textArea */}
								<label htmlFor="description" onChange={e => setDescriptionInput(e.target.value)} className="flex flex-col mt-4 dark:text-#333 robotoMono">
									Send a message
								</label>
								<textarea
									required
									rows={5}
									type="text"
									name="description"
									className="mt-1 p-1 rounded-md resize-none bg-transparent border-[1px] border-black dark:border-#333 focus:outline-none focus:border-#333 focus:text-#333 dark:focus:border-[#3078c0] transition ease-in-out duration-300"
								/>
								<div className="flex flex-col md:flex-row md:items-between items-center justify-between">
									<input type="hidden" name="redirect" value="https://web3forms.com/success" />
									<motion.button type="submit" className="p-2 my-4 mx-auto md:mx-0 sm:mx-none w-5/6 uppercase text-14 md:w-40 max-[300px]:text-12 font-bold rounded-md text-white bg-[#333] hover:bg-[#222]  hover:text-#333 robotoMono hover:transition ease-in-out hover:duration-300">
										Send Email
									</motion.button>
									{/* Linkedin */}
									<a className="transition duration-300 ease-in-out hover:-translate-y-2" target="_blank" href="https://www.linkedin.com/in/jo%C3%A3omiguelc/">
										<svg xmlns="http://www.w3.org/2000/svg" width="32" viewBox="7.025 7.025 497.951 497.95" id="linkedin">
											<linearGradient id="a" x1="-974.482" x2="-622.378" y1="1306.773" y2="1658.877" gradientTransform="translate(1054.43 -1226.825)" gradientUnits="userSpaceOnUse">
												<stop offset="0" stop-color="#2489be"></stop>
												<stop offset="1" stop-color="#0575b3"></stop>
											</linearGradient>
											<path
												fill="bg-[#333]"
												d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"></path>
										</svg>
									</a>
								</div>
							</form>
							{/* form disclaimer */}
							<p className="text-center mt-6 text-12 montserrat font-light">Your email address will be used solely for communication regarding this inquiry and will not be shared or used for any other purposes.</p>
						</div>
					</motion.div>
				</div>
			</section>
		</>
	);
};

export default Contact;
