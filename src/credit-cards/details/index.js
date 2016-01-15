import React from 'react';

var RCDetails = React.createClass({

  render: function() {
    return (
    	<div className="container">
    		<h1>{this.props.params.slug}</h1>
    		This is details page.
    		<p>
    		TODO: Fetch data from ElasticSearch
    		</p>
    	</div>
    );
  }
});

export default RCDetails;
