import React from 'react';
import ReactDOM from 'react-dom';

var RCNav = React.createClass({
  render: function() {
    return (
    <div id='navigation'>
      <div className='container'>
        <nav className='navbar navbar-default'>
          <div className='navbar-header'></div>
          <div className='collapse navbar-collapse' id='navbar-collapse'>
            <ul className='nav navbar-nav'>
              <li className='active dropdown'>
                <a className='dropdown-toggle' data-toggle='dropdown' href='#'>Borrow</a>
                <div className='dropdown-menu'>
                  <div className='row'>
                    <div className='col-xs-12 col-sm-4 col-md-2'>
                      <b>Compare</b>
                      <ul className='list-unstyled'>
                        <li><a href="//www.ratecity.com.au/home-loans?nav=home-loans">Home Loans</a></li>
                        <li><a href="//www.ratecity.com.au/home-loans/SMSF-loans?nav=smsf-loans">SMSF Loans</a></li>
                        <li><a href="//www.ratecity.com.au/home-loans/low-doc?nav=low-doc-loans">Low Doc Loans</a></li>
                        <li><a href="//www.ratecity.com.au/personal-loans?nav=personal-loans">Personal Loans</a></li>
                        <li><a href="//www.ratecity.com.au/car-loans?nav=car-loans">Car Loans</a></li>
                        <li><a href="/credit-cards/?nav=credit-cards">Credit Cards</a></li>
                        <li><a href="//www.ratecity.com.au/credit-cards/rewards?nav=rewards-credit-cards">Rewards Credit Cards</a></li>
                        <li><a href="//www.ratecity.com.au/margin-loans?nav=margin-loans">Margin Loans</a></li>
                        <li><a href="/rba-cash-rate/?nav=rate-tracker">Rate Tracker</a></li>
                      </ul>
                    </div>
                    <div className='col-xs-12 col-sm-4 col-md-2'>
                      <b>Calculators</b>
                      <ul className='list-unstyled'>
                        <li><a href="//www.ratecity.com.au/home-loans/calculator?nav=home-loans-calculator">Home Loans Calculator</a></li>
                        <li><a href="//www.ratecity.com.au/personal-loans/calculator?nav=personal-loans-calculator">Personal Loans Calculator</a></li>
                        <li><a href="//www.ratecity.com.au/car-loans/calculator?nav=car-loans-calculator">Car Loans Calculator</a></li>
                        <li><a href="//www.ratecity.com.au/calculators/stamp-duty-calculator?nav=stamp-duty-calculator">Stamp Duty Calculator</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className='dropdown'>
                <a className='dropdown-toggle' data-toggle='dropdown' href='#'>Save</a>
                <div className='dropdown-menu'>
                  <div className='row'>
                    <div className='col-xs-12 col-sm-4 col-md-2'>
                      <b>Compare</b>
                      <ul className='list-unstyled'>
                        <li><a href="//www.ratecity.com.au/savings-accounts?nav=savings-accounts">Savings Accounts</a></li>
                        <li><a href="//www.ratecity.com.au/term-deposits?nav=term-deposits">Term Deposits</a></li>
                        <li><a href="//www.ratecity.com.au/transaction-accounts?nav=transaction-accounts">Transaction Accounts</a></li>
                      </ul>
                    </div>
                    <div className='col-xs-12 col-sm-4 col-md-2'>
                      <b>Calculators</b>
                      <ul className='list-unstyled'>
                        <li><a href="//www.ratecity.com.au/savings-accounts/calculator?nav=savings-account-calculator">Savings Account Calculator</a></li>
                        <li><a href="//www.ratecity.com.au/term-deposits/calculator?nav=term-deposits-calculator">Term Deposits Calculator</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className='dropdown'>
                <a className='dropdown-toggle' data-toggle='dropdown' href='#'>Invest</a>
                <div className='dropdown-menu'>
                  <div className='row'>
                    <div className='col-xs-12 col-sm-4 col-md-2'>
                      <b>Compare</b>
                      <ul className='list-unstyled'>
                        <li><a href="/superannuation/?nav=superannuation">Superannuation</a></li>
                        <li><a href="/superannuation/?nav=pension-funds">Pension Funds</a></li>
                        <li><a href="//www.ratecity.com.au/online-trading?nav=online-trading">Online Trading</a></li>
                        <li><a href="/managed-funds/?nav=managed-funds">Managed Funds</a></li>
                        <li><a href="//www.ratecity.com.au/home-loans/SMSF-loans?nav=smsf-loans">SMSF Loans</a></li>
                        <li><a href="//www.ratecity.com.au/margin-loans?nav=margin-loans">Margin Loans</a></li>
                        <li><a href="//www.ratecity.com.au/foreign-exchange?nav=foreign-exchange">Foreign Exchange</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className='dropdown'>
                <a className='dropdown-toggle' data-toggle='dropdown' href='#'>Calculate</a>
                <div className='dropdown-menu'>
                  <div className='row'>
                    <div className='col-xs-12 col-sm-4 col-md-2'>
                      <b>Calculators</b>
                      <ul className='list-unstyled'>
                        <li><a href="//www.ratecity.com.au/home-loans/calculator?nav=home-loans-calculator">Home Loans Calculator</a></li>
                        <li><a href="//www.ratecity.com.au/home-loans/mortgage-calculator?nav=mortgage-calculator">Mortgage Calculator</a></li>
                        <li><a href="//www.ratecity.com.au/personal-loans/calculator?nav=personal-loans-calculator">Personal Loans Calculator</a></li>
                        <li><a href="//www.ratecity.com.au/car-loans/calculator?nav=car-loans-calculator">Car Loans Calculator</a></li>
                        <li><a href="//www.ratecity.com.au/term-deposits/calculator?nav=term-deposits-calculator">Term Deposits Calculator</a></li>
                        <li><a href="//www.ratecity.com.au/savings-accounts/calculator?nav=savings-account-calculator">Savings Account Calculator</a></li>
                        <li><a href="//www.ratecity.com.au/calculators/stamp-duty-calculator?nav=stamp-duty-calculator">Stamp Duty Calculator</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className='dropdown'>
                <a className='dropdown-toggle' data-toggle='dropdown' href='#'>News & Guides</a>
                <div className='dropdown-menu'>
                  <div className='row'>
                    <div className='col-xs-12 col-sm-4 col-md-2'>
                      <b>News & Views</b>
                      <ul className='list-unstyled'>
                        <li><a href="//www.ratecity.com.au/superannuation/news?nav=superannuation-news">Superannuation News</a></li>
                        <li><a href="//www.ratecity.com.au/home-loans/news?nav=home-loans-news">Home Loans News</a></li>
                        <li><a href="//www.ratecity.com.au/personal-loans/news?nav=personal-loans-news">Personal Loans News</a></li>
                        <li><a href="//www.ratecity.com.au/car-loans/news?nav=car-loans-news">Car Loans News</a></li>
                        <li><a href="//www.ratecity.com.au/credit-cards/news?nav=credit-cards-news">Credit Cards News</a></li>
                        <li><a href="//www.ratecity.com.au/savings-accounts/news?nav=savings-accounts-news">Savings Accounts News</a></li>
                        <li><a href="//www.ratecity.com.au/term-deposits/news?nav=term-deposits-news">Term Deposits News</a></li>
                        <li><a href="//www.ratecity.com.au/transaction-accounts/news?nav=transaction-accounts-news">Transaction Accounts News</a></li>
                        <li><a href="//www.ratecity.com.au/investment-funds/news?nav=managed-funds-news">Managed Funds News</a></li>
                      </ul>
                    </div>
                    <div className='col-xs-12 col-sm-4 col-md-2'>
                      <b>Guides</b>
                      <ul className='list-unstyled'>
                        <li><a href="//www.ratecity.com.au/superannuation/guide?nav=superannuation-guide">Superannuation Guide</a></li>
                        <li><a href="//www.ratecity.com.au/home-loans/guide?nav=home-loans-guide">Home Loans Guide</a></li>
                        <li><a href="//www.ratecity.com.au/personal-loans/guide?nav=personal-loans-guide">Personal Loans Guide</a></li>
                        <li><a href="//www.ratecity.com.au/car-loans/guide?nav=car-loans-guide">Car Loans Guide</a></li>
                        <li><a href="//www.ratecity.com.au/credit-cards/guide?nav=credit-cards-guide">Credit Cards Guide</a></li>
                        <li><a href="//www.ratecity.com.au/savings-accounts/guide?nav=savings-accounts-guide">Savings Accounts Guide</a></li>
                        <li><a href="//www.ratecity.com.au/term-deposits/guide?nav=term-deposits-guide">Term Deposits Guide</a></li>
                        <li><a href="//www.ratecity.com.au/transaction-accounts/guide?nav=transaction-accounts-guide">Transaction Accounts Guide</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

          </div>
        </nav>
      </div>
    </div>
    );
  }
});

export default RCNav;
