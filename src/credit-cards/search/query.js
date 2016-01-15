var filters = [];
var card_types = [];
var companies = [];

var Query = {

  toggleFilter : function(filter_name) {
    if (filters.indexOf(filter_name) != -1) {
      var index = filters.indexOf(filter_name);
      filters = filters.slice(0, index).concat(filters.slice(index+1, filters.count));
    } else {
      filters.push(filter_name);
    }
  },
  toggleCardType : function(card_type) {
    if (card_types.indexOf(card_type) != -1) {
      var index = card_types.indexOf(card_type);
      card_types = card_types.slice(0, index).concat(card_types.slice(index+1, card_types.count));
    } else {
      card_types.push(card_type);
    }
  },
  isFilterSelected: function(filter_name) {
    return filters.indexOf(filter_name) != -1;
  },
  isCardTypeSelected: function(card_type) {
    return card_types.indexOf(card_type) != -1;
  },
  setCompanies : function(companies) {
    companies = companies
  },
  clearAll : function() {
    filters = [];
    card_types = [];
    companies = [];
  },
  getDetails : function() {
    return {
      filters: filters,
      card_types: card_types,
      companies: companies
    }
  }
};

export default Query;
