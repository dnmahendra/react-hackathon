// NOT IN ES:
// - company logo

import React from 'react';
import ReactDOM from 'react-dom';

import CardTypes from './card-types'

var RCProduct = React.createClass({
  calculateATMWithdrawal: function(product) {

    var amount = this.props.input.osSpendingAmount;
    var atm_fee = Math.max(product.international_atm_dollar, product.international_atm_percent != null ?  product.international_atm_percent * amount / 100.0 : 0);
    var conversion_fee = product.currency_conversion_fee != null ? amount * product.currency_conversion_fee / 100.0 : 0;
    return conversion_fee + atm_fee;
  },
  render: function() {
    var product = this.props.product;

    var card_type_logo = '/img/card_types/'+ CardTypes[product.card_type] + '.png';

    var promotion = product.promotions.filter(
      function (promotion) {
        return promotion.regions.includes("promoted_search")
      }
    ).pop();

    var action_button;

    if (promotion) {
      action_button = (
        <a
          className="btn btn-primary"
          target="_blank"
          data-ga-send="event"
          data-ga-category="Search Result"
          data-ga-action="Apply Click"
          data-ga-label={ product.company.name + ' ' + product.name}
          href={"/credit-cards/promotions/" +promotion.id+ "/click?filters=&amp;type=goto_site"}
        >Go to Site</a>
      );

    } else {
      action_button = (
        <a
          className="btn btn-default"
          data-ga-send="event"
          data-ga-category="Search Result"
          data-ga-action="Product Details Button Click"
          data-ga-label={ product.company.name + ' ' + product.name}
          href={'/credit-cards/' + product.company.slug + '/' + product.slug }
        >Details</a>
      )
    }

    return (
      <tr>
        <td className='text-center hidden-xs'>
          <div className='btn-compare fa fa-square-o' data-add-url='/credit-cards/comparison/202/add' data-product-id='202' data-remove-url='/credit-cards/comparison/202/remove'>Compare</div>
        </td>
        <td className='text-center xs-show-3'>
          <img className="img-responsive" src={"http://placehold.it/88x31/?text="+product.company.name} />
        </td>
        <td className='xs-show-9 product-name'>
          <a data-ga-send="event" data-ga-category="Search Result" data-ga-action="Product Title Click" data-ga-label="frank credit card" href={'/credit-cards/' + product.company.slug + '/' + product.slug }>{product.name}
</a></td>
        <td className='text-center xs-show-3 xs-left'>
          <img className="img-responsive" src={card_type_logo} />
        </td>
        <td className='text-center xs-show-3'>
          <div className='small product-xs-head visible-xs'>Interest Rate</div>
          <p className='cct-percent'>
            <strong>
              {product.purchase_standard_rate_percentage}%
            </strong>
          </p>
        </td>
        <td className='text-center xs-show-3'>
          <div className='small product-xs-head visible-xs'>Annual Fee</div>
          <strong className='cct-percent'>
            ${product.annual_fee_currency}
          </strong>
        </td>
        <td className='text-center xs-show-3'>
          <div className='small product-xs-head visible-xs'>Max Free Days</div>
          <strong>
            {product.interest_free_period_quantity}
          </strong>
        </td>
        <td className='text-center hidden-xs'>
          <strong>
            ${product.late_payment_fee_currency}
          </strong>
        </td>
        <td className='text-center hidden-xs'>
          <strong>
            ${Math.round(this.calculateATMWithdrawal(product) * 100) / 100.0}
          </strong>
        </td>
        <td className='text-center xs-show-12'>
          {action_button}
        </td>
      </tr>
    );
  }
});

export default RCProduct;
