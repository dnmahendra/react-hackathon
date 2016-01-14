import React from 'react';
import ReactDOM from 'react-dom';

import RCTitle from './title';
import RCBreadcrumb from './breadcrumb';
import RCLeaderboard from './leaderboard';
import RCNav from './nav';

var RCHeader = React.createClass({
  render: function() {
    return (
      <header>
        <div id='masthead'>
          <div className='container'>
            <a className="brand pull-left" href="/">
              <img alt="RateCity.com.au" src="img/logo.svg" />
            </a>
            <button className='navbar-toggle' data-target='#navbar-collapse' data-toggle='collapse' type='button'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>

            <RCLeaderboard />

            <ul className='hidden-xs'>
              <li>Welcome to Australias leading financial comparison site</li>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <RCNav />

        <RCBreadcrumb />

        <RCTitle vertical="Credit Cards ">Compare credit card interest rates and deals</RCTitle>

      </header>
    );
  }
});

export default RCHeader;
