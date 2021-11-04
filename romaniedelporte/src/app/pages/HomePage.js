/** @format */

import React from "react";
import "animate.css";
import mezelf from "../assets/images/mezelf.jpg";

const HomePage = () => {
	return (
		<div className='homepage col-12 mt-5 '>
			<div className='container'>
				<div className='row'>
					<div className=' homepage_image col-md-6'>
						<img src={mezelf} alt='pic' />
					</div>
					<div className='homepage_intro col-md-6  '>
						<h1>
							<span>I'm</span> a front-end/Full-stack Developer
						</h1>
						<h3>
							my passion is to make beautiful websites with a nice design and
							great code.{" "}
						</h3>
					</div>
					<div className='homepage_myself mt-5'>
						<h1>About me</h1>
						<span></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
