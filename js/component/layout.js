import React from 'react';

import Header from './header';
import Footer from './footer';

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {title: "Welcome Romeo"};
	}

	changeTitle(title) {
		this.setState({title: title});
	}

	render() {
		return(
			<div>
				<Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
			</div>
		);
	}
}