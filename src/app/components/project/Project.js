/** @format */

import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import * as Routes from "../../routes";

const GET_PROJECTS = gql`
	{
		projects {
			id
			title
			about
			githubUrl
			image
		}
	}
`;

const Project = () => {
	const { loading, data } = useQuery(GET_PROJECTS, {});

	if (loading) return "The projects are loading...";

	return (
		<div className='row g-0 p-3'>
			{!loading &&
				data.projects.map((project, key) => (
					<div className='card col-12 col-md-3' key={key}>
						<img src={project.image} className='card-img-top' alt='...' />
						<div className='card-body'>
							<p className='card-text'>{project.title}</p>
							<Link to={Routes.PORTFOLIO_DETAIL.replace(":id", project.id)}>
								Read case →
							</Link>
						</div>
					</div>
				))}
		</div>
	);
};

export default Project;
