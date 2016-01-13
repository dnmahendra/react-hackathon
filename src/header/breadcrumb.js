import React from 'react';
import ReactDOM from 'react-dom';

var RCBreadcrumb = React.createClass({
  render: function() {
    return (
        <div className='container'>
          <ol className='breadcrumb'>
            <li typeof="breadcrumb"><a rel="v:url" property="v:title" href="/">Home</a></li>
            <li typeof="breadcrumb"><a rel="v:url" property="v:title" href="/credit-cards/">Credit Cards</a></li>
            <li className='active'>Compare Credit Cards</li>
          </ol>
        </div>
    );
  }
});

export default RCBreadcrumb;
