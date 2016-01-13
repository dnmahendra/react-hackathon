import React from 'react';
import ReactDOM from 'react-dom';

var RCTitle = React.createClass({
  render: function() {
    return (
      <div className='container'>
        <div className='page-heading'>
          <i className='icon icons-disc icon-credit-cards'></i>
          <h1> <div style={{display:'inline'}}>Credit Cards </div>
            <small className='hidden-sm hidden-xs'>Compare credit card interest rates and deals</small>
          </h1>
        </div>
      </div>
    );
  }
});

export default RCTitle;
