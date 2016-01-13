import React from 'react';
import ReactDOM from 'react-dom';

var RCNav = React.createClass({
  render: function() {
    return (
      <button className='navbar-toggle' data-target='#navbar-collapse' data-toggle='collapse' type='button'>
        <span className='sr-only'>Toggle navigation</span>
        <span className='icon-bar'></span>
        <span className='icon-bar'></span>
        <span className='icon-bar'></span>
      </button>
    );
  }
});

export default RCNav;
