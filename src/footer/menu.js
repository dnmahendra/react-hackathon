import React from 'react';
import ReactDOM from 'react-dom';

var RCFooterMenu = React.createClass({
  render: function() {
    return (
          <div className='row navigation hidden-xs'>
            <div className='col-sm-6'>
              <div className='row'>
                <div className='col-xs-3'>
                  <b>Borrow</b>
                  <ul className='list-unstyled'>
                    <li><a href="/home-loans">Home Loans Comparison</a></li>
                    <li><a href="/credit-cards">Credit Cards</a></li>
                    <li><a href="/personal-loans">Personal Loans</a></li>
                    <li><a href="/car-loans">Car Loans</a></li>
                  </ul>
                </div>
                <div className='col-xs-3'>
                  <b>Save</b>
                  <ul className='list-unstyled'>
                    <li><a href="/savings-accounts/high-interest">High Interest Savings Accounts</a></li>
                    <li><a href="/transaction-accounts">Transaction Accounts</a></li>
                    <li><a href="/savings-accounts">Compare Savings Accounts</a></li>
                    <li><a href="/term-deposits">Term Deposits</a></li>
                  </ul>
                </div>
                <div className='col-xs-3'>
                  <b>Invest</b>
                  <ul className='list-unstyled'>
                    <li><a href="/superannuation">Superannuation</a></li>
                    <li><a href="/managed-funds">Managed Funds</a></li>
                    <li><a href="/superannuation">Pension Funds</a></li>
                    <li><a href="/home-loans/SMSF-loans">SMSF Loans</a></li>
                  </ul>
                </div>
                <div className='col-xs-3'>
                  <b>Calculators</b>
                  <ul className='list-unstyled'>
                    <li><a href="/home-loans/calculator">Home Loan Calculator</a></li>
                    <li><a href="/car-loans/calculator">Car Loan Calculator</a></li>
                    <li><a href="/personal-loans/calculator">Personal Loan Calculator</a></li>
                    <li><a href="/term-deposits/calculator">Term Deposit Calculator</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-sm-6'>
              <div className='row'>
                <div className='col-xs-3'>
                  <b>Guides</b>
                  <ul className='list-unstyled'>
                    <li><a href="/home-loans/guide">Home Loans Guide</a></li>
                    <li><a href="/credit-cards/guide">Credit Cards Guide</a></li>
                    <li><a href="/savings-accounts/guide">Savings Accounts Guide</a></li>
                    <li><a href="/term-deposits/guide">Term Deposit Guides</a></li>
                  </ul>
                </div>
                <div className='col-xs-3'>
                  <b>News</b>
                  <ul className='list-unstyled'>
                    <li><a href="/home-loans/mortgage-news">Home Loans News</a></li>
                    <li><a href="/credit-cards/news">Credit Cards News</a></li>
                    <li><a href="/savings-accounts/news">Savings Accounts News</a></li>
                    <li><a href="/superannuation/news">Superannuation News</a></li>
                  </ul>
                </div>
                <div className='col-xs-3'>
                  <b>RateCity</b>
                  <ul className='list-unstyled'>
                    <li><a href="/about-us">About Us</a></li>
                    <li><a href="/contact-us">Contact Us</a></li>
                    <li><a href="/media-room">Media Room</a></li>
                  </ul>
                </div>
                <div className='col-xs-3'>
                  <b>More Info</b>
                  <ul className='list-unstyled'>
                    <li><a href="/financial-dictionary">Financial Dictionary</a></li>
                    <li><a href="/companies">Companies we compare</a></li>
                    <li><a href="/how-we-make-money">How we make money</a></li>
                    <li><a href="/sitemap">Sitemap</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
    );
  }
});

export default RCFooterMenu;
