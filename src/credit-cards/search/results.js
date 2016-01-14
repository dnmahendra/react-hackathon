import React from 'react';
import ReactDOM from 'react-dom';

import RCFilters from './filters';
import RCProduct from './product';

import elasticsearch from 'elasticsearch';

var client = new elasticsearch.Client({
  host: 'http://search-dev-ratecity01-xxqfhvgnouqfnppttlgd3wu4du.ap-southeast-2.es.amazonaws.com',
  log: 'trace'
});

var RCResults = React.createClass({

  getInitialState: function(){

    return { results: [] };
  },

  componentWillMount: function() {
    var self = this;
    client.search({
     "index": "credit_cards-products",
     "body": {"size":25,"query":{"function_score":{"query":{"filtered":{"filter":[{"bool":{"must":[{"term":{"visible":true}},{"term":{"is_business":false}},{"term":{"is_secure":false}}]}}]}}}},"aggregations":{"bucket_rewards":{"filter":{"query":{"query_string":{"query":"buckets:rewards"}}}},"bucket_low_fees":{"filter":{"query":{"query_string":{"query":"buckets:low_fees"}}}},"bucket_low_rates":{"filter":{"query":{"query_string":{"query":"buckets:low_rates"}}}},"bucket_all_offers":{"filter":{"query":{"query_string":{"query":"buckets:all_offers"}}}},"bucket_intro_offers":{"filter":{"query":{"query_string":{"query":"buckets:intro_offers"}}}},"bucket_bt_intro_offers":{"filter":{"query":{"query_string":{"query":"buckets:bt_intro_offers"}}}},"bucket_special_offers":{"filter":{"query":{"query_string":{"query":"buckets:special_offers"}}}},"bucket_overseas_spending":{"filter":{"query":{"query_string":{"query":"buckets:overseas_spending"}}}},"bucket_frequent_flyer":{"filter":{"query":{"query_string":{"query":"buckets:frequent_flyer"}}}},"bucket_big_four":{"filter":{"query":{"query_string":{"query":"buckets:big_four"}}}},"bucket_perks":{"filter":{"query":{"query_string":{"query":"buckets:perks"}}}},"companies":{"terms":{"field":"company_id","size":10}},"card_types":{"terms":{"field":"card_type","size":4,"min_doc_count":0}}},"sort":[{"_score":{"order":"desc"}},{"purchase_standard_rate_percentage":{"order":"asc"}},{"annual_fee_currency":{"order":"asc"}},{"interest_free_period_quantity":{"order":"desc"}}]}
    }).then(
      function (body) {
        self.setState({ results: body.hits.hits })
      },
      function (error) {
        console.trace(error.message);
      }
    );
  },

  render: function() {
    var products = this.state.results.map(function(product) {
      return (<RCProduct name={product._source.name}/>);
    });
    console.log(products);
    return (
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
    );
  }
});

export default RCResults;
