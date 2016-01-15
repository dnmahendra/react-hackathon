function calculateATMWithdrawal(product, spent_amount) {
  var amount = spent_amount;
  var atm_fee = Math.max(product.international_atm_dollar, product.international_atm_percent != null ?  product.international_atm_percent * amount / 100.0 : 0);
  var conversion_fee = product.currency_conversion_fee != null ? amount * product.currency_conversion_fee / 100.0 : 0;
  return conversion_fee + atm_fee;
}

var Sorter = {

  sort : function(spent_amount, products) {
    products.sort(function(a,b) {
      var amt = calculateATMWithdrawal(a._source,spent_amount)-calculateATMWithdrawal(b._source,spent_amount);
      if (amt == 0) {
        return a._source.name < b._source.name ? -1 : 1;
      }
      return amt;
    });
  }
};

export default Sorter;
