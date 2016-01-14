import React from 'react';
import ReactDOM from 'react-dom';

import RCFilters from './filters';
import RCProduct from './product';
import RCPagination from './pagination';

import elasticsearch from 'elasticsearch';

var client = new elasticsearch.Client({
  host: 'http://search-dev-ratecity01-xxqfhvgnouqfnppttlgd3wu4du.ap-southeast-2.es.amazonaws.com/credit_cards-products/',
  log: 'trace'
});

var RCResults = React.createClass({

  render: function() {
    var products = this.state.results.map(function(product) {
      return (<RCProduct product={product._source}/>);
    });
    return (
      <div>
          <RCPagination total={this.state.total} />
        <table className='table table-striped credit-card-table'>
          <tbody>
            <tr className='hidden-xs'>
              <th></th>
              <th className='text-center'>
                Company
              </th>
              <th>Product</th>
              <th className='text-center'>
                Card Type
              </th>
              <th className='text-center'>Interest Rate</th>
              <th className='text-center'>Annual Fee</th>
              <th className='text-center'>Max Free Days</th>
              <th className='text-center'>Late Payment Fee</th>

              <th className='text-center' data-container='body' data-content='RateCity may receive remuneration for referrals to these links and/or as a consequence of a consumer acquiring a credit product after following these links.' data-placement='auto' data-toggle='popover'
              data-trigger='hover'>Go To Site</th>
            </tr>
            {products}
          </tbody>
        </table>
        <RCPagination total={this.state.total}/>
      </div>
    );
  }
});

export default RCResults;
