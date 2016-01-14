import React from 'react';
import ReactDOM from 'react-dom';

import RCFilters from './filters';
import RCResults from './results';
import RCResultsBar from './resultsbar';
import RCPagination from './pagination';
import CreditCardService from './credit_card_service';

function filtersChangedCallbackCreate(component) {
  return function(filters, card_types, companies) {
    CreditCardService.find({
      filters: filters,
      card_types: card_types,
      companies: companies
    }, function (queryResults) {
      component.setState(queryResults);
    });
  }
}

var RCSearchPage = React.createClass({
  componentWillMount: function() {
    var component = this;
    CreditCardService.find({filters: ['low_rates']}, function (queryResults) {
      component.setState(queryResults);
    });
  },

  getInitialState: function(){
    return {
      filters: {
        bucket_low_rates: {doc_count: 0},
        bucket_low_fees: {doc_count: 0},
        bucket_rewards: {doc_count: 0},
        bucket_frequent_flyer: {doc_count: 0},
        bucket_overseas_spending: {doc_count: 0},
        bucket_perks: {doc_count: 0},
        bucket_intro_offers: {doc_count: 0},
        bucket_bt_intro_offers: {doc_count: 0},
        bucket_special_offers: {doc_count: 0},
        bucket_all_offers: {doc_count: 0},
        bucket_big_four: {doc_count: 0}
      },
      results: []
    };
  },

  render: function() {
    return (
      <main>
        <RCResultsBar totalRecords={this.state.total} pagesize={10} currentpage={1} />
        <div className="container">
          <div className='row row-offcanvas row-offcanvas-left'>
            <aside id="rc-filters" className='col-md-3 facets sidebar-offcanvas'>
              <RCFilters filters={this.state.filters} onFiltersChanged={filtersChangedCallbackCreate(this)} />
            </aside>
            <div id="rc-results" className="col-md-9">
              <RCResults results={this.state.results} />
              <RCPagination totalRecords={this.state.total} selected={8}/>
            </div>
          </div>
        </div>
      </main>
    );
  }
});

export default RCSearchPage;
