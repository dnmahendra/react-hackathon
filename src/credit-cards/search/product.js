import React from 'react';
import ReactDOM from 'react-dom';

var RCProduct = React.createClass({
  render: function() {
    return (
      <tr>
        <td className='text-center hidden-xs'>
          <div className='btn-compare fa fa-square-o' data-add-url='/credit-cards/comparison/202/add' data-product-id='202' data-remove-url='/credit-cards/comparison/202/remove'>Compare</div>
        </td>
        <td className='text-center xs-show-3'>
          <img className="img-responsive" src="http://placehold.it/88x31" />
        </td>
        <td className='xs-show-9 product-name'>
          <a data-ga-send="event" data-ga-category="Search Result" data-ga-action="Product Title Click" data-ga-label="frank credit card" href="/credit-cards/me-bank/frank-credit-card">{this.props.name}
</a></td>
        <td className='text-center xs-show-3 xs-left'>
          <img className="img-responsive" src="http://placehold.it/30x30" />
        </td>
        <td className='text-center xs-show-3'>
          <div className='small product-xs-head visible-xs'>Interest Rate</div>
          <p className='cct-percent'>
            <strong>
              9.99%
            </strong>
          </p>
        </td>
        <td className='text-center xs-show-3'>
          <div className='small product-xs-head visible-xs'>Annual Fee</div>
          <strong className='cct-percent'>
            $0
          </strong>
        </td>
        <td className='text-center xs-show-3'>
          <div className='small product-xs-head visible-xs'>Max Free Days</div>
          <strong>
            55
          </strong>
        </td>
        <td className='text-center hidden-xs'>
          <strong>
            $10
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
