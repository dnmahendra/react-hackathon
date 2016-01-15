import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

var RCSliders = React.createClass({

  componentDidMount: function() {

  },
  numberChanged: function(value) {
    this.props.osSpendingCallback(value.target.value);
  },
  getInitialState: function() {
    return {
    };
  },
  render: function() {
    return (
      <div className='sliders'>
        <div className='panel panel-default'>
          <div className='panel-heading'>
            <h3 className='panel-title'>
              ATM Withdraw amount
              <input type="range" min="50" max="500" onChange={this.numberChanged} />
              <span className="value-first">$50</span>
              <span className="value-last">$500</span>
            </h3>
          </div>
        </div>
      </div>
    );
  }
});

export default RCSliders;
