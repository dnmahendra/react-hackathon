import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import "./rangeslider.js"

var RCSliders = React.createClass({

  componentDidMount: function() {
    $('input[type="range"]').rangeslider();
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
              <input type="range" min="10" max="1000" step="10" value="300" onChange={this.numberChanged} data-orientation="vertical" />
            </h3>
          </div>
        </div>
      </div>
    );
  }
});

export default RCSliders;
