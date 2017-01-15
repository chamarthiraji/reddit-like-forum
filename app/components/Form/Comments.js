import React from "react";
import axios from "axios";

import ViewComments from '../subreddit/ViewComments';
var localState = {};

export default class Comments extends React.Component{
	constructor(props) {
		super(props);
    console.log("comment props",props);
    console.log("comment ",props.params.id);
		this.state = {
			comment: []
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		var newState = { };
		newState["comment"]= event.target.value;
    localState["comment"]= event.target.value;

    console.log("comments data",this.props.params.id);
		this.setState(newState);
			
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log("Click");
    axios.post('posts/comments/'+ this.props.params.id, {value: this.state.comment}).then((res) => {
                console.log('res', res);
            })

    //this.setState({ comment: [] });
	}	

  componentDidMount() {
    console.log("comments js - componentDidUpdate");
    axios.get('/posts/comments/' + this.props.params.id).then(posts => {
    //  console.log("comments js - posts componentDidUpdate posts:"+JSON.stringify(posts));
    console.log("comments js - posts componentDidUpdate posts 2:"+posts.data[0].comments[1]);
    this.setState({ comment: posts.data[0].comments });
    });
  }

	render(){
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
          <h3 className="panel-title text-center">Comments</h3>
          <ul>
            {this.state.comment.map(comment => <ViewComments  comment={comment} />)}
          </ul>
        </div>
        <div className="panel-body text-center">

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className="">
                <strong></strong>
              </h4>

              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange event.

                value={this.state.comment}

              */}

          		<input
            		type="text"
            		className="form-control text-center"
            		id="comment"
            		
                placeholder="Enter new comment"
            		onChange={this.handleChange}
            		required
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

