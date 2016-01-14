import React from 'react';
import ReactDOM from 'react-dom';

import RCFilters from './filters';
import RCResults from './results';

var RCSearchPage = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className='row row-offcanvas row-offcanvas-left'>
          <aside className='col-md-3 facets sidebar-offcanvas'>
            <RCFilters />
          </aside>
          <div className="col-md-9">
            <RCResults results={this.state.results}/>
          </div>
        </div>
      </div>
    );
  }
});

export default RCSearchPage;
