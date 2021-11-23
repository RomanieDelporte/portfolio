/** @format */

import React from "react";
import cv from "../assets/documents/curriculumvitae.pdf";
import javascript from "../assets/images/javascript.png";
import htmlcss from "../assets/images/htmlcss.svg";
import sass from "../assets/images/sass.png";
import react from "../assets/images/react.png";
import svelte from "../assets/images/svelte.png";
import wordpress from "../assets/images/wordpress.png";
import php from "../assets/images/php.png";
import mongodb from "../assets/images/mongodb.jpeg";
import graphql from "../assets/images/graphql.png";
import nodejs from "../assets/images/nodejs.png";
import adobexd from "../assets/images/adobexd.svg";
import Button from "../components/Button";

const AboutPage = () => {
	return (
		<div className='aboutpage col-12'>
			<div className='container'>
				<div className='row'>
					<div className='aboutpage_about mt-5'>
						<h1>Resumé</h1>
					</div>
					<div className='aboutpage_info mt-5 col-md-6'>
						<p>
							I'm <span>Romanie Delporte</span> a frontend/full-stack developer{" "}
							<br></br>
							Passionate in great code and nice design. <br></br> I'm based in
							Belgium
						</p>
					</div>
					<div className='aboutpage_cv mt-5'>
						<a href={cv} download>
							<Button title='Download CV' />
						</a>
					</div>
					<div className='aboutpage_technologies container mt-5 col-12'>
						<h1>Technologies</h1>
						<div className='row'>
							<div className='aboutpage_technologies_item mt-5 col-md-3'>
								<img src={javascript} alt='javascript' />
								<p>Javascript</p>
							</div>
							<div className='aboutpage_technologies_item mt-5 col-md-3'>
								<img src={htmlcss} alt='htmlcss' />
								<p>Html & Css</p>
							</div>
							<div className='aboutpage_technologies_item mt-5 col-md-3'>
								<img src={sass} alt='sass' />
								<p>Sass</p>
							</div>
							<div className='aboutpage_technologies_item mt-5 col-md-3'>
								<img src={react} alt='react' />
								<p>React</p>
							</div>
							<div className='aboutpage_technologies_item mt-5 col-md-3'>
								<img src={react} alt='react' />
								<p>React Native</p>
							</div>
							<div className='aboutpage_technologies_item mt-5 col-md-3'>
								<img src={svelte} alt='svelte' />
								<p>Svelte</p>
							</div>
							<div className='aboutpage_technologies_item mt-5 col-md-3'>
								<img src={wordpress} alt='wordpress' />
								<p>Wordpress</p>
							</div>
							<div className='aboutpage_technologies_item mt-5 col-md-3'>
								<img src={php} alt='php' />
								<p>Php</p>
							</div>
							<div className='aboutpage_technologies_item mt-5 col-md-3'>
								<img src={mongodb} alt='mongodb' />
								<p>Mongodb</p>
							</div>
							<div className='aboutpage_technologies_item mt-5 col-md-3'>
								<img src={graphql} alt='graphql' />
								<p>Graphql</p>
							</div>
							<div className='aboutpage_technologies_item mt-5 col-md-3'>
								<img src={nodejs} alt='nodejs' />
								<p>Nodejs</p>
							</div>
							<div className='aboutpage_technologies_item mt-5 col-md-3'>
								<img src={adobexd} alt='adobexd' />
								<p>Adobexd</p>
							</div>
						</div>
						<div className='aboutpage_experience mt-5 container col-12 '>
							<h1>Experience</h1>
							<div className='aboutpage_intern col-md-6 col-sm-2 '>
								<p>Frontend Developer</p>
								<p>Current</p>
							</div>
							<div className='aboutpage_intern col-md-6 col-sm-2'>
								<p>
									Trainee frontend Development @
									<a href='https://sweetmustard.be'>Sweet Mustard</a>
								</p>
								<p>02/21 - 05/21</p>
							</div>
							<div className='aboutpage_intern col-md-6 col-sm-2'>
								<p>Associate degree programming @ArteveldeHogeschool</p>
								<p>2019-2021</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
