import React from 'react';
import { Link } from 'react-router';

import Nav from '../component/Nav';

export default class Layout extends React.Component {

	navigate() {
		this.props.history.pushState(null, '/');//giving back-button in browser
	}

	render() {
		return(
			<div>
				<Nav/ >
				<div class="jumbotron">
					{this.props.children}
				</div>
			</div>
		);
	}
}