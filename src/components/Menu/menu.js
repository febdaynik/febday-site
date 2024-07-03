import { motion } from 'framer-motion';

import "../../styles/Menu.css";
import "../../styles/TransitionPage.css";
import githubLogo from "../../images/github-mark-white.png"
import CustomLink from "../AnimateLink"
import ButtonAnimate from "./buttonAnimate"


const animateTemplate = async (
	className,
	duration,
) => {
	const backgroundMenu = document.querySelector('.background-menu-block');

	document.querySelector('#root').style.overflow = 'hidden';
	backgroundMenu.classList.add(className);
	await new Promise(resolve => setTimeout(resolve, duration));
	backgroundMenu.classList.remove(className);
}

const animateIn = async () => {
	if ( localStorage.getItem('animate') !== null && !Number(localStorage.getItem('animate')))
		return 
	
	const menuBlock = document.querySelector('.menu-block');

	menuBlock.style.opacity = 0;

	return await animateTemplate('background-menu-block-animation', 2800)
}

const animateOut = async () => {
	if ( localStorage.getItem('animate') !== null && !Number(localStorage.getItem('animate')) )
		return 

	const menuBlock = document.querySelector('.menu-block');

	menuBlock.style.opacity = 1;

	return await animateTemplate('background-menu-block-out-animation', 3000)
}

const githubClick = (value) => {
	window.open("https://github.com/febdaynik/febday-site");
};

export default function Menu() {

	
	return (
		<motion.div 
			animate="active"
			exit={{opacity: 0}}
			onAnimationStart={animateOut}
			style={{height: "100%", width: "100"}}
		>	
			<CustomLink to="/desktop" onClick={animateIn} style={{width: "100%", height: "100%", position: "absolute", perspective: "64px", cursor: "auto"}}>
				<div className="computer-screen"></div>
			</CustomLink>
			<div className="menu-block">
				<div>
					<div className="div-h1-block">
						<h1>MENU</h1>
					</div>
					<nav className="menu-block-nav">
						<div><span><CustomLink to="/desktop/botofolio" onClick={ animateIn }>Botofoilio</CustomLink></span></div>
						<div><span><CustomLink to="/desktop/about" onClick={ animateIn }>About</CustomLink></span></div>
						<div><span><CustomLink to="/desktop/contact" onClick={ animateIn }>Contact</CustomLink></span></div>
					</nav>
					<div className="menu-footer">
						<div id="githubbbutton" onClick={githubClick}>
							<img src={githubLogo} alt="github logo" />
							<span>source code</span>
						</div>
					</div>
				</div>
				<ButtonAnimate />

			</div>
			<div className="background-menu-block"/>
		</motion.div>
	);

}
