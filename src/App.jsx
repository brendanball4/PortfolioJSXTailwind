import React, { useEffect, useState } from "react";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import scroll from "./components/scroll";
import ScrollToTopButton from "./components/scroll";


function App() {
	const [isAlertOpen, setIsAlertOpen] = useState(false);
	const [backToTop, setBackToTop] = useState(false);
  	const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	}, []);

	function CustomAlert({ isOpen, message, onClose }) {
		if (!isOpen) return null;
	  
		return (
			<div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
				<div className="bg-white p-4 rounded-lg shadow">
					<p>{message}</p>
					<button onClick={onClose} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
						Close
					</button>
				</div>
			</div>
		);
	};
	  

	const handleThemeSwitch = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	const showAlert = () => {
		setIsAlertOpen(true);
	};
	
	const closeAlert = () => {
		setIsAlertOpen(false);
	};
	

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	const sun = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLineJoin="round"
				d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
			/>
		</svg>
	);

	const discordUsername = 'itsnynx'; // Replace with your actual Discord username and tag
	const emailAddress = "ball.brendan10@gmail.com";

	const copyToClipboard = (text) => {
	  navigator.clipboard.writeText(text).then(
		() => {
			if(text == discordUsername) {
				alert('Discord username copied to clipboard! Send me a friend/message request on Discord and we\'ll connect from there!');
			} else if (text == emailAddress){
				if (window.confirm('Email address copied to clipboard! Click \'OK\' to open your default email application or \'Cancel\' to decline. Continue?')) {
					window.location.href = 'mailto:ball.brendan10@gmail.com';
				}
			}
		  
		  // Or use a more subtle notification like a tooltip or a small popup
		},
		(err) => {
		  console.error('Failed to copy: ', err);
		}
	  );
	};

	const moon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLineJoin="round"
				d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
			/>
		</svg>
	);

  return (
    <>
		<button
			type="button"
			onClick={handleThemeSwitch}
			className="absolute 2xl:fixed p-2 z-10 right-[40px] top-4 bg-violet-300 dark:bg-orange-300 text-lg p-1 rounded-md"
		>
			{theme === "dark" ? sun : moon}
		</button>
		<div className="absolute 2xl:fixed right-[95px] top-5 border-r-2 border-gray-900 dark:border-blue-100 h-6"></div>
		<a 
                            href="https://linkedin.com/in/brendanmball"
							target="_blank"
							rel="noopener noreferrer"
                            className="absolute 2xl:fixed right-[160px] bg-gray-500 p-2 top-3.5 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
                            <svg
                            className="w-5 h-5 fill-current"
                            role="img"
                            viewBox="0 0 256 256"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <g>
                                <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055" />
                            </g>
                            </svg>
                        </a>

                        <a 
                            href="https://github.com/brendanball4"
							target="_blank"
							rel="noopener noreferrer"
                            className="absolute 2xl:fixed z-10 right-[115px] bg-gray-500 p-2 top-3.5 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="w-5"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                            >
                            <g fill="none">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                                    fill="currentColor"
                                />
                            </g>
                            </svg>
                        </a>
                        <a 
							onClick={() => copyToClipboard(emailAddress)}
                            className="absolute 2xl:fixed z-10 right-[205px] bg-gray-500 p-2 top-3.5 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
							<svg xmlns="http://www.w3.org/2000/svg" 
							width="20" height="20" 
							fill="currentColor" 
							class="bi bi-envelope-fill" 
							viewBox="0 0 16 16">
								<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
							</svg>
                        </a>
						<a 
                            onClick={() => copyToClipboard(discordUsername)}
                            className="absolute 2xl:fixed z-10 cursor-pointer right-[250px] bg-gray-500 p-2 top-3.5 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
							<svg xmlns="http://www.w3.org/2000/svg" 
							width="20" height="20"
							className="w-5"
							fill="currentColor" 
							class="bi bi-discord" 
							viewBox="0 0 16 16">
								<path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
							</svg>
                        </a>
		<div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
			<div className="max-w-5xl w-11/12 mx-auto">
				<Intro />
				<Portfolio />
				<Timeline />
				<Contact />
				<Footer />
			</div>
				<div>
					<ScrollToTopButton />
				</div>
		</div>
	 </>
  )
}

export default App
