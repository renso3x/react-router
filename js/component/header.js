import React from 'react';

import Title from './header/Title';

export default class Header extends React.Component {
	handleChange(e) {
		const title = e.target.value;
		this.props.changeTitle(title);
	}

	render() {
		return(
			<div>
				<Title title={this.props.title} />
			</div>
		);	
	}
}