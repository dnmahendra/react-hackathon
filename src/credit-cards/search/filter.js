import React from 'react';
import ReactDOM from 'react-dom';

var RCFilter = React.createClass({
  onClick: function(event) {
    if (this.props.onClick) {
      this.props.onClick(this.props.id);
    }

  },
  render: function() {
    if (this.props.selected) {
      return (
        <a className="list-group-item active" onClick={this.onClick}>
          <div className='pull-right'>
            <i className="fa fa-close"></i>
          </div>
          <i className='fa fa-sort-amount-asc'></i>{this.props.name}
        </a>
      );
    } else {
      return (
        <a className="list-group-item" onClick={this.onClick}>
          <div className='pull-right'>
          <span className='badge'>{this.props.count}</span>
          </div>
          <i className='fa fa-sort-amount-asc'></i>{this.props.name}
        </a>
      );
    }
  }
});

export default RCFilter;
