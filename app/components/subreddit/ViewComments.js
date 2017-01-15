import React, { Component } from "react";

import ListItem from './ListItem';

export default class ViewComments extends Component {
	constructor(props){
		super(props);
		// console.log("view comments props",(props));
	}

	render() {
		return (
			<div>
				<li>{this.props.dbComments}</li>
			</div>
	      
		);
	}
}