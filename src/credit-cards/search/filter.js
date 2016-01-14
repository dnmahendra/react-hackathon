import React from 'react';
import ReactDOM from 'react-dom';

var RCFilter = React.createClass({
  render: function() {
    return (
      <a className="list-group-item" href="">
        <div className='pull-right'>
          <span className='badge'>{this.props.count}</span>
        </div>
        <i className='fa fa-sort-amount-asc'></i>{this.props.name}
      </a>
    );
  }
});

export default RCFilter;
