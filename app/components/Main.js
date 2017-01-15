import React, { Component } from 'react';
import { Link }  from 'react-router';

export default class Main extends Component {
	render() {
		// console.log("main....");
		return (
			<div className="container">
	      		<div className="jumbotron">
		        	<h2><strong>Reddit!</strong></h2>
		        	<Link to="/addData">add Post</Link>
	      		</div>

		      	<div className="row">
		        	{/* This code will dump the correct 
		        	Child Component */}
		        	
		        	{this.props.children}
		      	</div>
	    	</div>
		);
	}
}
