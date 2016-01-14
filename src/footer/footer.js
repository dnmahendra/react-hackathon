import React from 'react';
import ReactDOM from 'react-dom';

import RCFooterMenu from './menu';

var RCFooter = React.createClass({
  render: function() {
    return (
      <footer>
        <div className='container' id='footer'>
            <RCFooterMenu />
          <div className='base'>
            <a className="brand" href="/">
              <img alt="RateCity.com.au" className="img-responsive"  src="img/logo.svg" />
            </a>
            <ul className='list-inline'>
              <li>
                <span>ABN 12122743542</span>
              </li>
              <li>
                <span>AFSL &amp; ACL 316710</span>
              </li>
              <li>
                <span>&copy; 2016 RateCity</span>
              </li>
            </ul>
          </div>
        </div>
        <section id='disclaimer'>
          <div className='container'>
            <p>This is an information service. By browsing on the website and/or using our search tools, you are asking RateCity to provide you with information about products from multiple financial institutions. We will try to show you a range of products
              in response to your request for information. The search results do not include all providers and may not compare all features relevant to you, for further details refer to our <a href="http://www.ratecity.com.au/fscg">FSCG</a>. The rating
              shown is only one factor to take into account when considering these products. See the <a href="http://www.ratecity.com.au/star-ratings">rating methodology</a>. We not a credit provider, and in giving you product information we are not making
              any suggestion or recommendation to you about a particular credit product. If you decide to apply for a product, you will deal directly with a financial institution, and not with RateCity. Rates and product information should be confirmed
              with the relevant financial institution, and you should review the PDS before you decide to purchase. See our <a href="http://www.ratecity.com.au/terms-of-use#toc_4">terms of use</a> for further details. This advice is general and has not
              taken into account your objectives, financial situation or needs. Consider whether this advice is right for you.
            </p>
          </div>
        </section>

      </footer>
    );
  }
});

export default RCFooter;
