import React from "react";
import axios from 'axios';

import ViewComments from '../subreddit/ViewComments';
// var localState = {};
var tempDbComments = [];
export default class Comments extends React.Component{
	constructor(props) {
		super(props);
    // console.log("comment props",props);
    // console.log("comment ",props.params.id);
		this.state = {
      // comments that are already in db will be stored 
      //   in dbComments array
			dbComments: [],
      userComment : ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
    this.getComments = this.getComments.bind(this);
	}

	handleChange(event) {
   // event.preventDefault();

    // console.log("comments handleChange props.params.id:",
    //  this.props.params.id);
		var newState = tempDbComments;
    newState[event.target.id] = event.target.value;
    // console.log("comments handleChange userComment:"+
    // newState["userComment"]);

    this.setState(newState);

	}

	handleSubmit(event) {
		event.preventDefault();
		// console.log(" comments handleSubmit");
    var newState = { };
    newState["dbComments"]= tempDbComments;
    // newState["comment"]= event.target.value;
    //localState["comment"]= event.target.value;
    // console.log(" event.target.value:"+event.target.value);
    // console.log(" this.state:"+this.state);
    // console.log(" this.state.dbComments:"+this.state.dbComments);
    // console.log(" this.state.userComment:"+this.state.userComment);
    //  this.setState(newState);
    axios.post('posts/comments/'+ this.props.params.id, 
      {value: this.state.userComment}).then((res) => {
             //   console.log('res', res);
            })

    if (this.props.params.id) {
      this.getComments();
    }
    //this.setState({ comment: [] });
	}

  componentDidMount() {
  //  console.log("comments js 2 - componentDidUpdate");
    if (this.props.params.id) {
      this.getComments();
    }
   
  } // end of - componentDidMount

  getComments() {
    axios.get('/posts/comments/' + this.props.params.id).then(
      posts => {
        // console.log("comments js - componentDidUpdate posts:"+
        //   JSON.stringify(posts));
        // console.log("comments js 2 - componentDidUpdate posts 2 1:"+
        //   JSON.stringify(posts.data[0]));
        // console.log("comments js 2 - componentDidUpdate posts 2:"+
        //   JSON.stringify(posts.data[0].comments));

        tempDbComments = posts.data[0].comments;
        this.setState({ dbComments: tempDbComments, userComment : "" });
      });
  } // end of - getComments

	render(){
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
          <h3 className="panel-title text-center">Comments</h3>
          
            <ul >
            {this.state.dbComments.map(
              (dbComments, index) => 
                <ViewComments key={index} dbComments={dbComments} />)}

          </ul>
      
        </div>
        <div className="panel-body text-center">

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className="">
                <strong></strong>
              </h4>

              {/*
                Note how each of the form elements has an id 
                that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event 
                associated with our handleChange event.


                value=""
              */}

          		<input
            		type="text"
            		className="form-control text-center"
            		id="userComment"         		
                placeholder="Enter new comment"
                value={this.state.userComment}
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

