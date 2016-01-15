import React from 'react';
import ReactDOM from 'react-dom';

import RCFilters from './filters';
import RCResults from './results';
import RCSliders from './sliders';
import RCResultsBar from './resultsbar';
import RCPagination from './pagination';
import CreditCardService from './credit_card_service';
import Query from './query';

function filtersChangedCallbackCreate(component) {
  return function(filters) {
    CreditCardService.find(filters,
    function (queryResults) {
      component.setState(queryResults);
    });
  }
}

function paginationChangedCallback(component) {
  return function(page) {
    var params = Query.getDetails();
    params["page"] = page;
    console.log(params);
    CreditCardService.find(params, function (queryResults) {
      component.setState(queryResults);
    });
  }
}

var RCSearchPage = React.createClass({
  componentWillMount: function() {
    var component = this;
    CreditCardService.find({filters: []}, function (queryResults) {
      component.setState(queryResults);
    });
  },
  getCards : function() {
    var component = this;
    CreditCardService.find(Query.getDetails(),
    function (queryResults) {
      component.setState(queryResults);
      component.setState({buckets: Query.getDetails()});
    });
  },
  osSpendingCallback : function(val) {
    this.setState({input: {osSpendingAmount: val}});
  },
  clearResults: function() {
    Query.clearAll();
    this.getCards();
  },
  filterToggle : function (filter_name) {
    Query.toggleFilter(filter_name);
    this.getCards();
  },
  cardToggle: function(card_tpe) {
    Query.toggleCardType(card_tpe);
    this.getCards();
  },
  paginationChanged: function() {

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
      results: [],
      input: {
        osSpendingAmount: 100
      },
      buckets: {}
    };
  },

  render: function() {
    return (
      <main>
        <RCResultsBar totalRecords={this.state.total} pagesize={25} currentpage={1} onclear={this.clearResults} />
        <div className="container">
          <div className='row row-offcanvas row-offcanvas-left'>
            <aside id="rc-filters" className='col-md-3 facets sidebar-offcanvas'>
              <div id="rc-sliders">
                <RCSliders osSpendingCallback={this.osSpendingCallback} />
              </div>
              <div id="rc-filters">
                <RCFilters filters={this.state.filters} buckets={this.state.buckets} filterToggle={this.filterToggle} cardToggle={this.cardToggle} />
              </div>
            </aside>
            <div id="rc-results" className="col-md-9">
              <RCResults results={this.state.results} input={this.state.input} />
              <RCPagination totalRecords={this.state.total}
                            currentPage={this.state.currentPage}
                            pagesize={25}
                            onPaginationChanged={paginationChangedCallback(this)}/>
            </div>
          </div>
        </div>
      </main>
    );
  }
});

export default RCSearchPage;
