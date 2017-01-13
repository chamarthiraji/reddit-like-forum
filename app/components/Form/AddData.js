import React from "react";
import axios from 'axios';

var localState = {};

export default class AddData extends React.Component{
  
	constructor() {
		super();
		this.state = {
	               author: "",
                 content:"",
                 title:"",
                 subredditId:""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		var newState = { };
		newState[event.target.id]= event.target.value;
    localState[event.target.id]= event.target.value;

		this.setState(newState);
			
	}

	handleSubmit(event) {
		event.preventDefault();
		//console.log("Click");
  
    //console.log("localState:"+JSON.stringify(localState));
   
    axios.post('/posts/postData/', localState
      ).then(function(response) {
        console.log("handleSubmit:"+response.data);
    });

		this.setState({ author: "",
                     content:"",
                     title:"",
                     subredditId:"" });
	}
  
	render(){
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
          <h3 className="panel-title text-center">Add a post</h3>
        </div>

        <div className="panel-body text-center">

      			<form onSubmit={this.handleSubmit}>
        		<div className="form-group">
          			<h4 className="">
            			<strong>Add new Post</strong>
          			</h4>

              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange event.
              */}

          		<input
            		type="text"
            		className="form-control text-center"
            		id="author"
                placeholder="Author"
            		value={this.state.author}
            		onChange={this.handleChange}
            		
          		/>
              <input
                type="text"
                className="form-control text-center"
                id="content"
                placeholder="Content"
                value={this.state.content}
                onChange={this.handleChange}
                
              />
              <input
                type="text"
                className="form-control text-center"
                id="subredditId"
                placeholder="Subreddit"
                value={this.state.subredditId}
                onChange={this.handleChange}
                
              />
              <input
                type="text"
                className="form-control text-center"
                id="title"
                placeholder="Title"
                value={this.state.title}
                onChange={this.handleChange}
                
              />

          		<br />

          		<button
            		type="submit"
            		className="btn btn-primary"
          		>
            		Submit
        		</button>

          	</div>
      	  </form>
        </div>
      </div>	
		);
	}
}