import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'bootstrap-slider';


var RCSliders = React.createClass({

  componentDidMount: function() {
    $('#ex1').slider({
      formatter: function(value) {
        return 'Current value: ' + value;
      }
    });
  },
  numberChanged: function(value) {
    this.props.osSpendingCallback(value.target.value);
  },
  getInitialState: function(){
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
                <input type="number" onChange={this.numberChanged} />
                <input id="ex1" data-slider-id='ex1Slider' type="text" data-slider-min="0" data-slider-max="20" data-slider-step="1" data-slider-value="14"/>
              </h3>
            </div>
          </div>
        </div>
    );
  }
});

export default RCSliders;
