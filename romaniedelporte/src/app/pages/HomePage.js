/** @format */

import React from "react";
// import "animate.css";
import mezelf from "../assets/images/mezelf.jpg";
import js from "../assets/images/javascript.png";
import react from "../assets/images/react.png";
import svelte from "../assets/images/svelte.png";
import graphql from "../assets/images/graphql.png";
import sass from "../assets/images/sass.png";
import htmlcss from "../assets/images/htmlcss.svg";
import apollo from "../assets/images/apollo.svg";
import mongodb from "../assets/images/mongodb.jpeg";
import adobexd from "../assets/images/adobexd.svg";
import php from "../assets/images/php.png";
import nodejs from "../assets/images/nodejs.png";
const HomePage = () => {
	return (
		<div className='homepage col-12 mt-5 '>
			<div className='container'>
				<div className='row'>
					<div className=' homepage_image col-md-6'>
						<img src={mezelf} alt='pic' />
					</div>
					<div className='homepage_intro col-md-6 animate__animated animate__backInRight '>
						<h1>
							<span>I'm</span> a front-end/Full-stack Developer
						</h1>
						<h3>
							my passion is to make beautiful websites with a nice design and
							great code.{" "}
						</h3>
					</div>
					<div className='homepage_myself mt-5'>
						<h1>Technologies</h1>
						<span></span>
						<div className='homepage_skills d-flex bd-highlight col-12'>
							<div className='homepage_item mt-5 flex-fill bd-highlight'>
								<img src={js} alt='javascript' />
								<p>Javascript</p>
							</div>
							<div className='homepage_item mt-5  col-md-3'>
								<img src={react} alt='react' />
								<p>React</p>
							</div>
							<div className='homepage_item mt-5  col-md-3'>
								<img src={react} alt='reactnative' />
								<p>React Native</p>
							</div>
							<div className='homepage_item mt-5  col-md-3'>
								<img src={svelte} alt='svelte' />
								<p>Svelte</p>
							</div>
							<div className='homepage_item mt-5  col-md-3'>
								<img src={graphql} alt='Graphql' />
								<p>Graphql</p>
							</div>
							<div className='homepage_item mt-5  col-md-3'>
								<img src={sass} alt='sass' />
								<p>Sass </p>
							</div>
							<div className='homepage_item mt-5  col-md-3'>
								<img src={htmlcss} alt='htmlcss' />
								<p>Html & Css </p>
							</div>
							<div className='homepage_item mt-5  col-md-3'>
								<img src={apollo} alt='apollo' />
								<p>Apollo </p>
							</div>
							<div className='homepage_item mt-5  col-md-3'>
								<img src={mongodb} alt='mongdb' />
								<p>Mongodb </p>
							</div>
							<div className='homepage_item mt-5  col-md-3'>
								<img src={adobexd} alt='adobexd' />
								<p>Adobexd </p>
							</div>
							<div className='homepage_item mt-5  col-md-3'>
								<img src={php} alt='php' />
								<p>Php </p>
							</div>
							<div className='homepage_item mt-5  col-md-3'>
								<img src={nodejs} alt='nodejs' />
								<p>Nodejs </p>
							</div>
						</div>
					</div>
					<div className='homepage_portfolio mt-5'>test</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
