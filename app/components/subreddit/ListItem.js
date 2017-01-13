import React, { Component } from 'react';
import { Link }  from 'react-router';

import Comments from '../Form/Comments';
import DetailForm from './DetailForm';
import ViewComments from './ViewComments';

export default class ListItem extends Component {
	constructor(props){
		super(props);
		console.log("ListItem props",this.props.post
			);
		
	}
	
	render() {
		return (
			<div>
				<li key={this.props.key} className="well">

					<p>{this.props.post.title}</p> 
					<p>{this.props.post.content}</p> 
						<Link to={`/comments/${this.props.post._id}`}>
					comments</Link>
					

					{/*

						<Link to="/viewcomments" params={{ testvalue: "hello"}}> hi View Comments</Link>


						<ViewComments data={this.props.post.comments}/>
						<DetailForm data={this.props.post} />
						<p>{this.props.post.content}</p> 

						
						<Link to={{pathname:'/viewcomments' ,query: {testvalue: "hello" }}}> hi 2View Comments</Link>


					*/}
					
				</li>

			</div>	
		);
	}
}
