/** @format */

import React from "react";
import me from "../assets/images/mezelf.jpg";
import Button from "../components/Button";
import work from "../assets/images/work.png";

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
					</div>
					<div className='homepage_image col-md-6'>
						<img
							className='animate__animated animate__fadeInRight'
							src={me}
							alt='pic'
						/>
					</div>
				</div>
				<div className='homepage_about container'>
					<div className='row'>
						<h1>My focus</h1>
						<div className=' homepage_challenge mt-3 col-md-6'>
							<h2>Challenge</h2>
							<p>
								As a student I don't know and can't do everything yet. But I am
								always willing to take on new challenges and learn new
								technologies. Completely up-to-date with the latest
								developments, we will find the best solution for your needs
								together
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='homepage_working mt-5 mb-0'>
				<img src={work} alt='work' />
				<div className='homepage_contact p-4'>
					<h2>Contact me</h2>
					<p>
						If you have questions or want to discuss something? on my aboutpage
						you will find some info about me.
					</p>
					<Button
						title='Email me → '
						email='mailto:romaniedelporte230@gmail.com'
					/>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
