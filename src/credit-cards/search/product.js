import React from 'react';
import ReactDOM from 'react-dom';

var RCProduct = React.createClass({
  render: function() {
    var product = this.props.product;

    var card_types = {
      '1': 'visa',
      '2': 'mastercard',
      '3': 'american_express',
      '4': 'diners_club'
    }

    var card_type_logo = '/img/card_types/'+ card_types[product.card_type] + '.png';
    console.log(card_type_logo);

    return (
      <tr>
        <td className='text-center hidden-xs'>
          <div className='btn-compare fa fa-square-o' data-add-url='/credit-cards/comparison/202/add' data-product-id='202' data-remove-url='/credit-cards/comparison/202/remove'>Compare</div>
        </td>
        <td className='text-center xs-show-3'>
          <img className="img-responsive" src={"http://placehold.it/88x31/?text="+product.company.name} />
        </td>
        <td className='xs-show-9 product-name'>
          <a data-ga-send="event" data-ga-category="Search Result" data-ga-action="Product Title Click" data-ga-label="frank credit card" href={'/credit-cards/' + product.company.slug + '/' + product.slug }>{this.props.product.name}
</a></td>
        <td className='text-center xs-show-3 xs-left'>
          <img className="img-responsive" src={card_type_logo} />
        </td>
        <td className='text-center xs-show-3'>
          <div className='small product-xs-head visible-xs'>Interest Rate</div>
          <p className='cct-percent'>
            <strong>
              {this.props.product.purchase_standard_rate_percentage}%
            </strong>
          </p>
        </td>
        <td className='text-center xs-show-3'>
          <div className='small product-xs-head visible-xs'>Annual Fee</div>
          <strong className='cct-percent'>
            ${this.props.product.annual_fee_currency}
          </strong>
        </td>
        <td className='text-center xs-show-3'>
          <div className='small product-xs-head visible-xs'>Max Free Days</div>
          <strong>
            {this.props.product.interest_free_period_quantity}
          </strong>
        </td>
        <td className='text-center hidden-xs'>
          <strong>
            ${this.props.product.late_payment_fee_currency}
          </strong>
        </td>

        <td className='text-center xs-show-12'>
          <a className="btn btn-primary" target="_blank" data-ga-send="event" data-ga-category="Search Result" data-ga-action="Apply Click" data-ga-label="frank credit card" href="/credit-cards/promotions/213/click?filters=&amp;type=goto_site">Go to Site</a>
        </td>
      </tr>
    );
  }
});

export default RCProduct;
