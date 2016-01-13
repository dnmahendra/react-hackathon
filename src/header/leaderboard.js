import React from 'react';
import ReactDOM from 'react-dom';

var RCLeaderboard = React.createClass({
  render: function() {
    return (
      <div className='visible-md visible-lg'>
        <div className='ad ad-leaderboard ad-leaderboard-top'>
          <small>
            Advertisement
          </small>
          <div id="dfp-leaderboard-top" className="google-dfp" data-size="728x90" data-unit="/115125416/leaderboard-top" data-targeting="{&quot;vertical&quot;:[&quot;credit-cards&quot;]}"></div>
        </div>
      </div>
    );
  }
});

export default RCLeaderboard;
