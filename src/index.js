import React from 'react';
import ReactDOM from 'react-dom';

import Router from 'react-router';  
import { IndexRoute, DefaultRoute, Route } from 'react-router';

import RCHeader from './header/header';
import RCSearchPage from './credit-cards/search';
import RCDetails from './credit-cards/details';
import RCFooter from './footer/footer';


let App = React.createClass({  
  render() {
    return (
	  <div>
	    <RCHeader />
        {this.props.children}
	    <RCFooter />
	  </div>
    );
  }
});

ReactDOM.render((
	<Router>
	  	<Route name="app" path="/" component={App} >,
	  		<IndexRoute component={RCSearchPage} />
	    	<Route name="search" path="credit-cards" component={RCSearchPage}/>
	    	<Route name="product" path="product/:slug" component={RCDetails} />
	    </Route>
	</Router>
), document.getElementById('react-body'))
