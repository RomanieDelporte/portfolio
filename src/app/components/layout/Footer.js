/** @format */

import React from "react";

const Footer = () => {
	return (
		<div className='footer mt-5'>
			<div className='footer_info container col-12'>
				<div className='row footer_navigation col-md-6'>
					<p> Copyright © 2021 Romanie Delporte</p>
				</div>
				<div className='footer_information col-md-6'>
					<a
						href='https://github.com/RomanieDelporte'
						target='_blank'
						rel='noreferrer'>
						Github
					</a>
					<a
						href='https://www.linkedin.com/in/romanie-delporte-446981193/'
						target='_blank'
						rel='noreferrer'>
						LinkedIn
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
