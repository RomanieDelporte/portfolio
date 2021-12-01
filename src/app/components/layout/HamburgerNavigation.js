/** @format */

import NavLinks from "./NavLinks";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

import { Link } from "react-router-dom";
import * as Routes from "../../routes";
import logo from "../../assets/images/logo.png";

const HamburgerNavigation = (props) => {
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
			className='close'
			size='40px'
			color='black'
			onClick={() => setOpen(!open)}
		/>
	);

	const closeHamburgerMenu = () => setOpen(false);

	return (
		<nav className='hamburgernavigation'>
			<div className='header_title col-md-2'>
				<Link
					to={Routes.LANDING}
					className='header_name'
					onClick={() => props.isMobile && props.closeHamburgerMenu()}>
					<img src={logo} alt='logo' />
				</Link>
			</div>
			{open ? CloseIcon : hamburgerIcon}
			{open && (
				<>
					<NavLinks isMobile={true} closeHamburgerMenu={closeHamburgerMenu} />{" "}
				</>
			)}
		</nav>
	);
};

export default HamburgerNavigation;
