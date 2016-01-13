import React from 'react';
import ReactDOM from 'react-dom';

import RCFilters from './filters';

var RCResults = React.createClass({
  render: function() {
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

            <div className='products-featured'>
            </div>
            <div className='products-search'>
              <tr>
                <td className='text-center hidden-xs'>
                  <div className='btn-compare fa fa-square-o' data-add-url='/credit-cards/comparison/202/add' data-product-id='202' data-remove-url='/credit-cards/comparison/202/remove'>Compare</div>
                </td>
                <td className='text-center xs-show-3'>
                  <img className="img-responsive" src="http://placehold.it/88x31" />
                </td>
                <td className='xs-show-9 product-name'>
                  <a data-ga-send="event" data-ga-category="Search Result" data-ga-action="Product Title Click" data-ga-label="frank credit card" href="/credit-cards/me-bank/frank-credit-card">frank credit card
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

            </div>
          </tbody>
        </table>
    );
  }
});

export default RCResults;
