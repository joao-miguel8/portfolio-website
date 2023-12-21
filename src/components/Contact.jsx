import classNames from "classnames";
import { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "./Navbar";
import Header from "./Header";
import BGPattern from "./BGPattern";
const Contact = () => {
	const [nameInput, setNameInput] = useState("");
	const [emailInput, setEmailInput] = useState("");
	const [descriptionInput, setDescriptionInput] = useState("");

	return (
		<>
			<BGPattern />
			<section className="mb-4 pt-10 mx-auto w-full lg:w-[60rem] h-full">
				<Header />
				<div className="mx-4">
					<NavBar />
					<motion.div animate={{ x: 80, y: 0 }} className="mt-6 relative -left-20">
						<h3 className="text-center text-32 dark:text-[#1fb3ed]">Want to work with me?</h3>
						<form className="flex flex-col gap-4" action="https://api.web3forms.com/submit" method="POST">
							{/* connect form to web3forms endpoint with public api key */}
							<input type="hidden" name="apikey" value="15e1c0c6-fe6c-4ab2-a32d-ed52e7a3a762"></input>
							{/* Name input */}
							<label required htmlFor="name" className=" flex flex-col dark:text-white robotoMono">
								Name
								<input
									required
									type="text"
									name="name"
									onChange={e => setNameInput(e.target.value)}
									className={classNames("pb-1 bg-transparent border-b-[1px] border-black dark:border-white focus:outline-none focus:border-[#1fb3ed] focus:text-[#49c2f1] dark:focus:border-[#1fb3ed] transition ease-in-out duration-300")}
								/>
							</label>
							{/* Email Input */}
							<label htmlFor="email" pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" className=" flex flex-col dark:text-white robotoMono">
								E-mail
								<input
									required
									onChange={e => setEmailInput(e.target.value)}
									type="email"
									name="email"
									className="pb-1 bg-transparent border-b-[1px] border-black dark:border-white focus:outline-none focus:border-[#1fb3ed] focus:text-[#49c2f1] dark:focus:border-[#1fb3ed] transition ease-in-out duration-300"
								/>
							</label>
							{/* description textArea */}
							<label htmlFor="description" onChange={e => setDescriptionInput(e.target.value)} className="flex flex-col mt-4 dark:text-white robotoMono">
								Send a message
							</label>
							<textarea
								required
								rows={5}
								type="text"
								name="description"
								className="mt-1 p-1 resize-none bg-transparent border-[1px] border-black dark:border-white focus:outline-none focus:border-[#1fb3ed] focus:text-[#49c2f1] dark:focus:border-[#1fb3ed] transition ease-in-out duration-300"
							/>
							<input type="hidden" name="redirect" value="https://web3forms.com/success" />
							<motion.button
								whileHover={{ scale: 1.05 }}
								type="submit"
								className="p-2 my-6 mx-auto w-5/6 text-16 max-[300px]:text-12 border text-black bg-white border-neutral-300 hover:text-white hover:bg-#1fb3ed] dark:hover:bg-[#1fb3ed] hover:bg-[#1fb3ed] robotoMono shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:transition ease-in-out hover:duration-300	">
								Get In Touch
							</motion.button>
						</form>
						{/* github / linkedin external media links */}
						<div aria-label="media links section" className="mt-2 right-10 flex gap-4 items-center justify-center align-bottom ">
							{/* Github link */}
							<a aria-label="external link to github" href="https://github.com/joao-miguel8" target="_blank">
								<svg className="w-10 h-10 fill-[#1A96C6] hover:fill-[#0d688c] transition ease-in-out duration-300" id="Layer_1" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g>
										<path
											clip-rule="evenodd"
											d="M296.133,354.174c49.885-5.891,102.942-24.029,102.942-110.192   c0-24.49-8.624-44.448-22.67-59.869c2.266-5.89,9.515-28.114-2.734-58.947c0,0-18.139-5.898-60.759,22.669   c-18.139-4.983-38.09-8.163-56.682-8.163c-19.053,0-39.011,3.18-56.697,8.163c-43.082-28.567-61.22-22.669-61.22-22.669   c-12.241,30.833-4.983,53.057-2.718,58.947c-14.061,15.42-22.677,35.379-22.677,59.869c0,86.163,53.057,104.301,102.942,110.192   c-6.344,5.452-12.241,15.873-14.507,30.387c-12.702,5.438-45.808,15.873-65.758-18.592c0,0-11.795-21.31-34.012-22.669   c0,0-22.224-0.453-1.813,13.592c0,0,14.96,6.812,24.943,32.653c0,0,13.6,43.089,76.179,29.48v38.543   c0,5.906-4.53,12.702-15.865,10.89C96.139,438.977,32.2,354.626,32.2,255.77c0-123.807,100.216-224.022,224.03-224.022   c123.347,0,224.023,100.216,223.57,224.022c0,98.856-63.946,182.754-152.828,212.688c-11.342,2.266-15.873-4.53-15.873-10.89   V395.45C311.1,374.577,304.288,360.985,296.133,354.174L296.133,354.174z M512,256.23C512,114.73,397.263,0,256.23,0   C114.73,0,0,114.73,0,256.23C0,397.263,114.73,512,256.23,512C397.263,512,512,397.263,512,256.23L512,256.23z"
											fill-rule="evenodd"
										/>
									</g>
								</svg>
							</a>
							{/* Linkedin Link */}
							<a aria-label="external link to linkedin" href="https://www.linkedin.com/in/jo%C3%A3omigueltech/" target="_blank">
								<svg className="w-10 h-10 fill-[#1A96C6] hover:fill-[#0d688c] transition ease-in-out duration-300 " id="linkedin" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
									<title />
									<path d="M454.26,23.47H57.74A34.21,34.21,0,0,0,23.63,57.58V454.1a34.21,34.21,0,0,0,34.11,34.11H454.26a34.21,34.21,0,0,0,34.11-34.11V57.58A34.21,34.21,0,0,0,454.26,23.47Zm-290.4,396H95.39V198.13h68.47ZM129.63,167.09a40.55,40.55,0,1,1,40.55-40.55A40.54,40.54,0,0,1,129.63,167.09ZM422.92,419.52H354V298.1s1.61-24.34-11.41-37c-11.84-11.49-28.3-8.68-28.3-8.68s-18.31.46-28.3,16c-6,9.33-7.76,22.05-8.21,30.7V419.52H209.3V198.13h68.47v26.66c6.2-8.81,17.07-20.54,32.86-26.66,24-9.28,44.61-7.92,62.32-2.58,22.21,6.69,34.88,25.36,39.47,34.54,6.17,12.32,10.5,28.75,10.5,49.3Z" />
								</svg>
							</a>
						</div>
					</motion.div>
				</div>
			</section>
		</>
	);
};

export default Contact;
