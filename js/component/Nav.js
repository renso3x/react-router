import React from 'react';

import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {

	render() {
		return (
			<div>
				<nav>
					<ul class="nav nav-pills">
						<li>
							<IndexLink to="/"> <button class="btn btn-primary btn-lg">Home</button> </IndexLink>
						</li>
						<li>
							<Link to="about"> <button class="btn btn-primary btn-lg">About</button> </Link>
						</li>
						<li>
							<Link to="feature"> <button class="btn btn-primary btn-lg">Feature</button> </Link>
						</li> 
						<li>
							<Link to="query/hello-world"> <button class="btn btn-primary btn-lg">Query</button> </Link>
						</li> 
					</ul>
				</nav>
			</div>
		);
	}
}