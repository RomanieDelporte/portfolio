/** @format */

import React from "react";
import me from "../assets/images/mezelf.jpg";
import comingsoon from "../assets/images/comingsoon.jpeg";
import Button from "../components/Button";

const HomePage = () => {
	return (
		<div className='homepage col-12 mt-5 '>
			<div className='container'>
				<div className='row'>
					<div className='homepage_me col-md-6'>
						<h1>Hello</h1>
						<h3>
							I'm <span>Romanie Delporte</span>{" "}
						</h3>
						<p>
							Frontend Developer that strives for a beautiful design and better
							code.
						</p>
						<Button title='About me  →' email='/about' />
					</div>
					<div className='homepage_image col-md-6'>
						<img
							className='animate__animated animate__fadeInRight'
							src={me}
							alt='pic'
						/>
					</div>
				</div>
				<div className='homepage_projects mt-5'>
					<h1>Some Projects</h1>
					<div className='homepage_projects_cases'>
						<div className='homepage_projects_project mt-5'>
							<img src={comingsoon} alt='coming' />
							<Button title='See Case' />
						</div>
						<div className='homepage_projects_project mt-5'>
							<img src={comingsoon} alt='coming' />
							<Button title='See Case' />
						</div>
						<div className='homepage_projects_project mt-5'>
							<img src={comingsoon} alt='coming' />
							<Button title='See Case' />
						</div>
					</div>
					<div className='homepage_projects_all mt-5'>
						<Button title='All cases → ' email='/portfolio' />
					</div>
				</div>
			</div>
			<div className='homepage_contact'>
				<h2>Contact me</h2>
				<p>If you have any questions or want to discuss something</p>
				<Button
					title="Email me"
					email='mailto:romaniedelporte230@gmail.com'
				/>
			</div>
		</div>
	);
};

export default HomePage;
