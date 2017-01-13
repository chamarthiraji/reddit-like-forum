import React from 'react';
import { IndexRoute, Route, Router, hashHistory } 
  from 'react-router';

import Main from '../components/Main';
import Listing from '../components/subreddit/Listing';
import AddData from '../components/Form/AddData';
import Comments from '../components/Form/Comments';
import DetailForm from '../components/subreddit/DetailForm';
import ViewComments from '../components/subreddit/ViewComments';

module.exports = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
  		<Route path="/addData" component={AddData} />
      <Route path="/viewcomments" component={ViewComments} />
  		<Route path="/comments/:id" component={Comments} />
  		<Route path="/:subredditId" component={Listing} />

  		<IndexRoute component={Listing} />

    </Route>
  </Router>
);
