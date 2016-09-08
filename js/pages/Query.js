import React from 'react';

export default class Query extends React.Component {

	constructor() {
		super();
		this.state = {name: '....'};
	}

	setName(e) {
		this.setState({name: e.target.value});
	}

	render() {
		return (
			<div>
				<h1>Query</h1>
				<p>You are quering [{this.props.params.query}]....</p>

				<p>Please Enter your Name: </p>
				<input name="name" onChange={this.setName.bind(this)} />

				<h2>Hello {this.state.name}</h2>
			</div>
		);
	}
}