import React from 'react';
import ReactDOM from 'react-dom';

var Header = React.createClass({
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
            <div className='visible-md visible-lg'>
              <div className='ad ad-leaderboard ad-leaderboard-top'>
                <small>
                  Advertisement
                </small>
                <div id="dfp-leaderboard-top" className="google-dfp" data-size="728x90" data-unit="/115125416/leaderboard-top" data-targeting="{&quot;vertical&quot;:[&quot;credit-cards&quot;]}"></div>
              </div>


            </div>
            <ul className='hidden-xs'>
              <li>Welcome to Australias leading financial comparison site</li>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className='container'>
          <ol className='breadcrumb'>
            <li typeof="breadcrumb"><a rel="v:url" property="v:title" href="/">Home</a></li>
            <li typeof="breadcrumb"><a rel="v:url" property="v:title" href="/credit-cards/">Credit Cards</a></li>
            <li className='active'>Compare Credit Cards</li>

          </ol>
        </div>

        <div className='container'>
          <div className='page-heading'>
            <i className='icon icons-disc icon-credit-cards'></i>
            <h1>
              Credit Cards
              <small className='hidden-sm hidden-xs'>Compare credit card interest rates and deals</small>
            </h1>
          </div>
        </div>


      </header>
    );
  }
});

ReactDOM.render(
  <Header />,
  document.getElementById('react-body')
);
