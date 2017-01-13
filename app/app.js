import React from 'react';
import ReactDOM from 'react-dom';

import routes from './config/routes';
import Main from './components/Main';

// Renders the contents according to the route page.
ReactDOM.render(routes, document.getElementById('app'));
