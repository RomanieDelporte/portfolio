/** @format */

import NavLinks from "./NavLinks";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const HamburgerNavigation = () => {
	const [open, setOpen] = useState(false);

	const hamburgerIcon = (
		<HiOutlineMenuAlt3
			className='hamburger'
			size='40px'
			color='black'
			onClick={() => setOpen(!open)}
		/>
	);
	const CloseIcon = (
		<AiOutlineClose
			className='hamburger'
			size='40px'
			color='black'
			onClick={() => setOpen(!open)}
		/>
	);

	const closeHamburgerMenu = () => setOpen(false);

	return (
		<nav className='hamburgernavigation'>
			{open ? CloseIcon : hamburgerIcon}
			{open && (
				<NavLinks isMobile={true} closeHamburgerMenu={closeHamburgerMenu} />
			)}
		</nav>
	);
};

export default HamburgerNavigation;
