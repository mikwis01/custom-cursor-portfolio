import React, { useContext, useEffect, useRef } from 'react'
import { MenuContext } from '../../helper/Context'
import WorksTile from '../WorksTile/WorksTile'

import './WorksNav.css'

const WorksNav = () => {
	const { menuState, setMenuState } = useContext(MenuContext)
	const navRef = useRef()

	useEffect(() => {
		navRef.current.style.transition = 'transform 0.5s ease-in-out'
	}, [])

	return (
		<nav className={menuState ? 'nav_active' : ''} ref={navRef}>
			<button
				className="closeNav"
				onClick={() => {
					setMenuState(false)
				}}>
				<svg
					className="close_svg"
					viewBox="0 0 53 53"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<line
						x1="2.12132"
						y1="2.87868"
						x2="50.1213"
						y2="50.8787"
						stroke="#D9D9D9"
						strokeWidth="6"
					/>
					<line
						x1="2.24233"
						y1="50.8787"
						x2="50.2423"
						y2="2.87868"
						stroke="#D9D9D9"
						strokeWidth="6"
					/>
				</svg>
			</button>
			<h2>WORKS</h2>
			<WorksTile link="https://melodic-pika-7a1818.netlify.app/">
				<h3>crypto news hub</h3>
				<p>mern stack - redux</p>
			</WorksTile>
			<WorksTile link="https://fastidious-crisp-134866.netlify.app/">
				<h3>previous portfolio website</h3>
				<p>react - three.js </p>
			</WorksTile>
		</nav>
	)
}

export default WorksNav
