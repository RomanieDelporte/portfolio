/** @format */

import React from "react";

import HamburgerNavigation from "./HamburgerNavigation";
import Navigation from "./Navigation";

const Header = () => {
	return (
		<div className='header'>
			<Navigation />
			<HamburgerNavigation />
		</div>
	);
};
export default Header;
