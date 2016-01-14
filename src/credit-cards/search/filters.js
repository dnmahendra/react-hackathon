import React from 'react';
import ReactDOM from 'react-dom';
import RCFilter from './filter';
import RCSelectFilter from './select_filter';

function removeFilter(filters, filter_name) {
  var index = filters.indexOf(filter_name);
  return filters.slice(0, index).concat(filters.slice(index+1, filters.count));
}

var RCFilters = React.createClass({

  filterClickedCallback : function(filter_name) {
    var filters = this.state.selectedFilters;
    if (this.isSelected(filter_name)) {
      filters = removeFilter(this.state.selectedFilters, filter_name);
    } else {
      filters = filters.concat([filter_name]);
    }
    this.setState({
      selectedFilters: filters
    });
    this.props.onFiltersChanged(filters, this.state.selectedCardTypes, []);
  },
  cardTypeClickedCallback : function(filter_name) {
    var cardTypes = this.state.selectedCardTypes;
    if (this.cardIsSelected(filter_name)) {
      cardTypes = removeFilter(this.state.selectedCardTypes, filter_name);
    } else {
      cardTypes = cardTypes.concat([filter_name]);
    }
    this.setState({
      selectedCardTypes: cardTypes
    });
    this.props.onFiltersChanged(this.state.selectedFilters, cardTypes, []);
  },
  isSelected : function(filter_name) {
    return this.state.selectedFilters.indexOf(filter_name) != -1;
  },
  cardIsSelected : function(card_type_name) {
    return this.state.selectedCardTypes.indexOf(card_type_name) != -1;
  },
  getInitialState: function(){
    return {
      selectedFilters: ["low_rates"],
      selectedCardTypes: []
    };
  },
  render: function() {
    console.log(this.props.aggregations);
    return (
      <aside className='col-md-3 facets sidebar-offcanvas'>
        <h2 className='offcanvas-title visible-xs visible-sm' data-toggle='offcanvas'>
          <i className='fa fa-close pull-right'></i> Refine
        </h2>
        <div className='panel panel-default' id='facet-bucket'>
          <div className='panel-heading'>
            <h3 className='panel-title'>
              Show
            </h3>
          </div>
          <div className='list-group'>
            <RCFilter count={this.props.filters.bucket_low_rates.doc_count} id="low_rates" name="Low Rates" onClick={this.filterClickedCallback} selected={ this.isSelected("low_rates") } />
            <RCFilter count={this.props.filters.bucket_low_fees.doc_count} id="low_fees" name="Low Fees" onClick={this.filterClickedCallback} selected={ this.isSelected("low_fees") } />
            <RCFilter count={this.props.filters.bucket_rewards.doc_count} id="rewards" name="Rewards" onClick={this.filterClickedCallback} selected={ this.isSelected("rewards") } />
            <RCFilter count={this.props.filters.bucket_frequent_flyer.doc_count} id="frequent_flyer" name="Frequent Flyer Rewards" onClick={this.filterClickedCallback} selected={ this.isSelected("frequent_flyer") } />
            <RCFilter count={this.props.filters.bucket_overseas_spending.doc_count} id="overseas_spending" name="Overseas Spending" selected={true} onClick={this.filterClickedCallback} selected={ this.isSelected("overseas_spending") } />
            <RCFilter count={this.props.filters.bucket_perks.doc_count} id="perks" name="Perks" onClick={this.filterClickedCallback} selected={ this.isSelected("perks") } />
          </div>
        </div>
        <div className='panel panel-default'>
          <div className='panel-heading'>
            <h3 className='panel-title'>With</h3>
          </div>
          <div className='list-group'>
            <RCFilter count={this.props.filters.bucket_intro_offers.doc_count} id="intro_offers" name="Introductory Offers" onClick={this.filterClickedCallback} selected={ this.isSelected("intro_offers") } />
            <RCFilter count={this.props.filters.bucket_bt_intro_offers.doc_count} id="bt_intro_offers" name="Balance Transfer Offers" onClick={this.filterClickedCallback} selected={ this.isSelected("bt_intro_offers") } />
            <RCFilter count={this.props.filters.bucket_special_offers.doc_count} id="special_offers" name="Special Offers" onClick={this.filterClickedCallback} selected={ this.isSelected("special_offers") } />
            <RCFilter count={this.props.filters.bucket_all_offers.doc_count} id="all_offers" name="All Offers" onClick={this.filterClickedCallback} selected={ this.isSelected("all_offers") } />
          </div>
        </div>
        <div className='panel panel-default'>
          <div className='panel-heading'>
            <h3 className='panel-title'>From</h3>
          </div>
          <div className='list-group'>
            <RCFilter count={this.props.filters.bucket_big_four.doc_count} id="big_four" name="Big 4 Banks" onClick={this.filterClickedCallback} selected={ this.isSelected("big_four") } />
            <RCFilter count={""} name="Visa" id="1" onClick={this.cardTypeClickedCallback} selected={ this.cardIsSelected("1") } />
            <RCFilter count={""} name="MasterCard" id="2" onClick={this.cardTypeClickedCallback} selected={ this.cardIsSelected("2") }  />
            <RCFilter count={""} name="American Express" id="3" onClick={this.cardTypeClickedCallback} selected={ this.cardIsSelected("3") }  />
            <RCSelectFilter />
          </div>
        </div>
      </aside>

    );
  }
});

export default RCFilters;
