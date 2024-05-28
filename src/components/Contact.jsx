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
							<h2 className="text-center text-32 uppercase font-semibold dark:text-#333">Send me an Email?</h2>
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
										className={classNames("pb-1 bg-transparent border-b-[1px] border-black dark:border-text-#333 focus:outline-none focus:border-green-500 focus:text-#333 dark:focus:border-green-500 transition ease-in-out duration-300")}
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
										className="pb-1 bg-transparent border-b-[1px] border-black dark:border-#333 focus:outline-none focus:border-#333 focus:text-#333 dark:focus:border-green-500 transition ease-in-out duration-300"
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
									className="mt-1 p-1 rounded-md resize-none bg-transparent border-[1px] border-black dark:border-#333 focus:outline-none focus:border-#333 focus:text-#333 dark:focus:border-green-500 transition ease-in-out duration-300"
								/>
								<input type="hidden" name="redirect" value="https://web3forms.com/success" />
								<motion.button type="submit" className="p-2 my-6 mx-auto w-5/6 text-16 max-[300px]:text-12 font-bold rounded-md text-#333 bg-green-400 hover:text-#333 robotoMono hover:transition ease-in-out hover:duration-300">
									Submit
								</motion.button>
							</form>
						</div>
					</motion.div>
				</div>
			</section>
		</>
	);
};

export default Contact;
