/** @format */

import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router";
import Button from "../components/Button";

const GET_DETAIL = gql`
	query project($id: ID!) {
		project(id: $id) {
			id
			title
			image
			about
			githubUrl
		}
	}
`;
const PortfolioDetailPage = () => {
	const { id } = useParams();

	const { loading, error, data } = useQuery(GET_DETAIL, {
		variables: { id },
	});

	if (loading) return "Loading...";
	if (error) return `Error! ${error.message}`;

	return (
		<>
			<div className='detail'>
				<div className='container'>
					<div className='row' key={data.id}>
						<div className='detail_link'>
							<a className='mt-3' href='/portfolio'>
								← Cases
							</a>
						</div>
						<div name='content' className='detail__title col-6 col-sm-12 mt-5'>
							<h1>{data.project.title}</h1>
						</div>
						<div className='detail_image'>
							<img className='w-100 mt-4' src={data.project.image} alt='' />
						</div>
						<div className='detail_about mt-3'>
							<p>{data.project.about}</p>
						</div>
						<div className='detail_github mt-4 '>
							<Button title='Github' email={data.project.githubUrl} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PortfolioDetailPage;
