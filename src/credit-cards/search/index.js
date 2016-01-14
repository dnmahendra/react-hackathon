import React from 'react';
import ReactDOM from 'react-dom';

import RCFilters from './filters';
import RCResults from './results';
import elasticsearch from 'elasticsearch';

var client = new elasticsearch.Client({
  host: 'http://search-dev-ratecity01-xxqfhvgnouqfnppttlgd3wu4du.ap-southeast-2.es.amazonaws.com'
});

function queryElasticSearch() {
  var self = this;
  var query = {
    "size":25,
    "query":{"function_score":{"query":{"filtered":{"filter":[{"bool":{"must":[{"query":{"query_string":{"query":"buckets:overseas_spending"}}},{"term":{"visible":true}},{"term":{"is_business":false}},{"term":{"is_secure":false}}]}}]}},"functions":[{"filter":{"bool":{"must":{"term":{"promotions.regions":"promoted_search"}}}},"weight":2}]}},"aggregations":{"bucket_rewards":{"filter":{"query":{"query_string":{"query":"buckets:rewards"}}}},"bucket_low_fees":{"filter":{"query":{"query_string":{"query":"buckets:low_fees"}}}},"bucket_low_rates":{"filter":{"query":{"query_string":{"query":"buckets:low_rates"}}}},"bucket_all_offers":{"filter":{"query":{"query_string":{"query":"buckets:all_offers"}}}},"bucket_intro_offers":{"filter":{"query":{"query_string":{"query":"buckets:intro_offers"}}}},"bucket_bt_intro_offers":{"filter":{"query":{"query_string":{"query":"buckets:bt_intro_offers"}}}},"bucket_special_offers":{"filter":{"query":{"query_string":{"query":"buckets:special_offers"}}}},"bucket_overseas_spending":{"filter":{"query":{"query_string":{"query":"buckets:overseas_spending"}}}},"bucket_frequent_flyer":{"filter":{"query":{"query_string":{"query":"buckets:frequent_flyer"}}}},"bucket_big_four":{"filter":{"query":{"query_string":{"query":"buckets:big_four"}}}},"bucket_perks":{"filter":{"query":{"query_string":{"query":"buckets:perks"}}}},"companies":{"terms":{"field":"company_id","size":10}},"card_types":{"terms":{"field":"card_type","size":4,"min_doc_count":0}}},
    "sort":[{"_score":{"order":"desc"}},{"international_withdrawal_cost":{"order":"asc"}},{"currency_conversion_fee":{"order":"asc"}},{"annual_fee_currency":{"order":"asc"}}]
  }
  client.search({
   "index": "credit_cards-products",
   "type": "product",
   "body": query
  }).then(
    function (body) {
      ReactDOM.render(
        <RCResults results={ body.hits.hits } filters={body.aggregations} />,
        document.getElementById('rc-results')
      );
      ReactDOM.render(
        <RCFilters filters={body.aggregations} />,
        document.getElementById('rc-filters')
      );
    },
    function (error) {
      console.trace(error.message);
    }
  );
}

var RCSearchPage = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className='row row-offcanvas row-offcanvas-left'>
          <aside id="rc-filters" className='col-md-3 facets sidebar-offcanvas'>
          </aside>
          <div id="rc-results" className="col-md-9">
            Loading...
          </div>
        </div>
      </div>
    );
  }
});
queryElasticSearch();

export default RCSearchPage;
