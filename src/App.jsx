import React, { useEffect, useState } from "react";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import MoreProjects from "./components/MoreProjects";
import { FiChevronDown } from "react-icons/fi";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/scroll";
import ProjectPage from "./pages/projects";
import ProgrammingPage from "./pages/programming";
import DatabasePage from "./pages/databases";
import SkillsPage from "./pages/skills";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Techstack from "./components/Techstack";
import Skills from "./data/skills";

function App() {
	const [backToTop, setBackToTop] = useState(false);
  	const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	}, []);  

	const handleThemeSwitch = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

  return (
    <>
	<Router>
      <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
		<Navbar theme={theme} onToggleTheme={handleThemeSwitch} />
		<Routes>
			<Route path="/project/:id" element={<ProjectPage />} />
			<Route path="/" element={
				<>
					<div className="max-w-5xl w-11/12 mx-auto">
						{/* Full-screen business card: who I am + top 3 projects */}
						<section className="min-h-screen flex flex-col justify-center relative pb-14 pt-6">
							<Intro />
							<Portfolio />
							<a
								href="#more-projects"
								title="See more"
								className="absolute bottom-4 left-1/2 -translate-x-1/2 p-2 text-stone-400 dark:text-stone-500 hover:text-violet-500 dark:hover:text-violet-400 transition-colors animate-bounce"
							>
								<FiChevronDown className="w-7 h-7" />
							</a>
						</section>
						<section id="more-projects" className="pt-10">
							<MoreProjects />
						</section>
						<section className="pt-10">
							<Techstack />
						</section>
						<section className="pt-10 pb-16">
							<Timeline />
						</section>
						<ScrollToTopButton />
					</div>
					<Footer />
				</>
			} />
			<Route path="/programming" element={<ProgrammingPage />} />
			<Route path="/databases" element={<DatabasePage />} />
			<Route path="/skills" element={<SkillsPage />} />
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	  </div>
    </Router>
	 </>
  );
}

export default App