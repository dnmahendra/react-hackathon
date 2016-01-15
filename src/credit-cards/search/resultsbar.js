import React from 'react';
import ReactDOM from 'react-dom';

var RCResultsBar = React.createClass({

  getDisplayText : function (){
    var output='';
    if(this.props.totalRecords > this.props.pagesize ){
        output = '' + (this.props.currentpage-1) * this.props.pagesize + '-' + (this.props.currentpage) * this.props.pagesize ;
        output = 'Displaying ' + output + ' of '+ this.props.totalRecords + ' cards matching search criteria';
    } else {
        output = 'Displaying ' + this.props.totalRecords + ' cards matching search criteria';
    }
    return output;
  },
  render: function() {
    return (
     <div className='container'>
        <div className='pullout pullout-lg hidden-xs'>
          <a className="btn btn-default btn-icon col-md-2 pull-right" onClick={this.props.onclear}><i className='fa fa-close pull-right' ></i>
            Clear All Filters
          </a>
          <span className='p results-bar top'>
          {this.getDisplayText()}
          </span>
        </div>
        <span className='p results-bar mobile-top visible-xs'>
            {this.getDisplayText()}
        </span>
      </div>
    );
  }
});

export default RCResultsBar;
