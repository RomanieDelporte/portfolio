/** @format */

import React from "react";

const Button = (props) => {
	const { title, email, icon } = props;
	return (
		<a className='button' href={email} icon={icon}>
			{title}
		</a>
	);
};

export default Button;
