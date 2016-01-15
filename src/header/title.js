import React from 'react';
import ReactDOM from 'react-dom';

var RCTitle = React.createClass({
  render: function() {
    return (
      <div className='container'>
        <div className='page-heading'>
          <i className='icon icons-disc icon-credit-cards'></i>
           <h1><div style={{display:'inline'}}>{this.props.vertical}</div>
            <small className='hidden-sm hidden-xs'>{this.props.children}</small>
          </h1>
        </div>
      </div>
    );
  }
});

export default RCTitle;
