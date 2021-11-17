/** @format */

import React from "react";
import { Link, NavLink } from "react-router-dom";
import * as Routes from "../../routes";
import logo from "../../assets/images/logo.svg";

const Header = () => {
	return (
		<div className='header'>
			<div className='container col-12'>
				<div className='row'>
					<div className='header_title col-md-2'>
						<Link to={Routes.LANDING} className='header_name'>
							<img src={logo} alt='logo' />
						</Link>
					</div>
					<div className='col-md-10 header_navigation'>
						<ul className='header_nav'>
							<li>
								<NavLink
									to={Routes.ABOUT}
									className='nav-link'
									activeClassName='active'>
									About
								</NavLink>
							</li>
							<li>
								<NavLink
									to={Routes.PORTFOLIO}
									className='nav-link'
									activeClassName='active'>
									Portfolio
								</NavLink>
							</li>
							<li>
								<NavLink
									to={Routes.CONTACT}
									className='nav-link'
									activeClassName='active'>
									Contact
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Header;
