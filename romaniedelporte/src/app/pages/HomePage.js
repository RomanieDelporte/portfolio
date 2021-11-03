/** @format */

import React from "react";
import mezelf from "../assets/images/mezelf.jpg";

const HomePage = () => {
	return (
		<div className='homepage col-12 mt-5 '>
			<div className='container'>
				<div className='row'>
					<div className=' homepage_image col-md-6'>
						<img src={mezelf} alt='pic' />
					</div>
					<div className='homepage_intro col-md-6 '>
						<h1>
							<span>I'm</span> a front-end/Full-stack Developer
						</h1>
						<h3>
							my passion is to make beautiful websites with a nice design and
							great code.{" "}
						</h3>
					</div>

					<div className='col-md-4'>
						<div className='homepage_info mt-5'>
							<h2>Tools</h2>
							<div className='homepage_skills mt-5 pb-3 pt-4 m-5'>
								<ul>
									<li>Visual studio code</li>
									<li>Github</li>
									<li>Terminal</li>
									<li>Adobe</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='col-md-4'>
						<div className='homepage_info mt-5'>
							<h2>Skills</h2>
							<div className='homepage_skills mt-5 pb-3 pt-4 m-5'>
								<ul>
									<li>Javasript(es6) </li>
									<li>Html5</li>
									<li>CSS(sass,scss)</li>
									<li>React</li>
									<li>React native</li>
									<li>Svelte</li>
									<li>Wordpress</li>
									<li>Graphql</li>
									<li>Apollo Client</li>
								</ul>
								<p>See more skills</p>
							</div>
						</div>
					</div>
					<div className='col-md-4'>
						<div className='homepage_info mt-5'>
							<h2>Knowledge</h2>
							<div className='homepage_skills mt-5 pb-3 pt-4 m-5'>
								<ul>
									<li>Redux </li>
									<li>Typescript</li>
									<li>Php</li>
									<li>Three.js</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
