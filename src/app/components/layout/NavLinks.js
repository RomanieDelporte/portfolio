/** @format */

import { NavLink } from "react-router-dom";
import * as Routes from "../../routes";
// import logo from "../../assets/images/logo.png";
const NavLinks = (props) => {
	return (
		<div className='container col-12'>
			<div className='row header_heading'>
				<div className='col-md-10 header_navigation'>
					<ul className='header_nav'>
						<li>
							<NavLink
								to={Routes.ABOUT}
								className='nav-link'
								activeClassName='active'
								onClick={() => props.isMobile && props.closeHamburgerMenu()}>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								to={Routes.PORTFOLIO}
								className='nav-link'
								activeClassName='active'
								onClick={() => props.isMobile && props.closeHamburgerMenu()}>
								Portfolio
							</NavLink>
						</li>
						<li>
							<NavLink
								to={Routes.CONTACT}
								className='nav-link'
								activeClassName='active'
								onClick={() => props.isMobile && props.closeHamburgerMenu()}>
								Contact
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default NavLinks;
