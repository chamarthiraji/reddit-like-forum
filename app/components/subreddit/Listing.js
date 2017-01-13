import React, { Component } from 'react';
import axios from 'axios';
import ListItem from './ListItem';

export default class Listing extends Component {
	constructor() {
		super();

		this.state = {
			posts: []
		}
	}

	componentDidMount() {
		axios.get('/posts/' + this.props.params.subredditId).then(posts => {
			{/*console.log(posts.data); */}
			this.setState({ posts: posts.data });
		});
	}

	componentDidUpdate() {
		axios.get('/posts/' + this.props.params.subredditId).then(posts => {
			this.setState({ posts: posts.data });
		});
	}

	render() {
		return (
			
			<ul>
				{this.state.posts.map(post => <ListItem key={post._id} post={post} />)}
			</ul>
		);
	}
}
