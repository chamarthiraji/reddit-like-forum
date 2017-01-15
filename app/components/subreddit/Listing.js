import React, { Component } from 'react';
import axios from 'axios';
import ListItem from './ListItem';

export default class Listing extends Component {
	constructor() {
		super();

		this.state = {
			posts: []
		}

		this._onChangeUser = this._onChangeUser.bind(this);
		this._onChangeStore = this._onChangeStore.bind(this);
	}

	componentDidMount() {
		// CodeStore.addChangeListener(this._onChange);    
		// this is OK
		// console.log("Listing componentDidMount");
		axios.get('/posts/' + this.props.params.subredditId).then(
			posts => {
				{/*console.log(posts.data); */}
				this.setState({ posts: posts.data });
			});
	} // end of - componentDidMount

	_onChangeUser(event) {
		// console.log("Listing _onChangeUser!");
		var enteredChars = event.target.value;
		CodeService.nextCode(enteredChars);
		// No need to update state here - go to sleep until store changes
	}

	_onChangeStore() {
		// console.log("Listing _onChangeStore");
		// console.log("Listing componentDidUpdate posts.data:"+
		//	posts.data);
		// console.log("Listing componentDidUpdate posts.data 2:"+
		//	JSON.stringify(posts.data));
		// console.log("Listing componentDidUpdate posts.data:"+
		//	posts.data);
		// console.log("Listing componentDidUpdate posts.data 2:"+
		//	JSON.stringify(posts.data));
		axios.get('/posts/' + this.props.params.subredditId).then(
			posts => {
			this.setState({ posts: posts.data });
		});

	 	// var newList = getListFromStore();  // your own function to get list from store
	  	// this.setState({ options: newList});            // update state here
	}

	render() {
		return (
			
			<ul>
				{this.state.posts.map(post => <ListItem key={post._id} post={post} />)}
			</ul>
		);
	}
}
