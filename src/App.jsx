import React, { useEffect, useState } from "react";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import MoreProjects from "./components/MoreProjects";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/scroll";
import ProjectPage from "./pages/projects";
import Navbar from "./components/Navbar";
import Toast from "./components/Toast";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Techstack from "./components/Techstack";

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
      <div className="bg-paper dark:bg-ink text-stone-900 dark:text-stone-300 min-h-screen font-inter">
		<Navbar theme={theme} onToggleTheme={handleThemeSwitch} />
		<Toast />
		<Routes>
			<Route path="/project/:id" element={<ProjectPage />} />
			<Route path="/" element={
				<>
					<div className="max-w-5xl w-11/12 mx-auto">
						{/* Full-screen business card: who I am + top 3 projects */}
						<section className="min-h-screen flex flex-col justify-center pt-20 pb-10 md:py-10">
							<Intro />
							<Portfolio />
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
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	  </div>
    </Router>
	 </>
  );
}

export default App