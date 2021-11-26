/** @format */

import { Link, NavLink } from "react-router-dom";
import * as Routes from "../../routes";

const NavLinks = (props) => {
	return (
		<div className='container col-12'>
			<div className='row header_heading'>
				<div className='header_title col-md-2'>
					<Link
						to={Routes.LANDING}
						className='header_name'
						onClick={() => props.isMobile && props.closeHamburgerMenu()}>
						<h2>Romanie</h2>
					</Link>
				</div>
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
