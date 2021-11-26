/** @format */

import React from "react";
import Button from "../components/Button";
import work from "../assets/images/work.png";
const ContactPage = () => {
	return (
		<div className='contactpage mt-5 col-12'>
			<div className='container'>
				<h1 className='mb-5'>Contact</h1>
				<div className='row'>
					<img src={work} alt='work' />
					<div className='contactpage_email'>
						<Button
							title='Email Me'
							email='mailto:romaniedelporte230@gmail.com'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
