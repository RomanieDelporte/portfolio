/** @format */

import React from "react";
import { Project } from "../components/project";
import Button from "../components/Button";

const PortfolioPage = () => {
	return (
		<div className='portfoliopage container mt-5'>
			<h1>Cases</h1>
			<div className='row'>
				<Project />
			</div>
			<div className='portfoliopage_github'>
				<Button
					title='See more on github →'
					email='https://github.com/RomanieDelporte'
					target='_blank'
				/>
			</div>
		</div>
	);
};

export default PortfolioPage;
