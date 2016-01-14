import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';
import selectize from 'selectize';

var RCSelectFilter = React.createClass({
  componentDidMount: function() {
    $(function () {
      var selector = $('#company-selector').selectize({
        plugins: ['remove_button'],
        delimiter: ',',
        persist: false,
        create: function(input) {
          return {
              value: input,
              text: input
          }
        }
      });
    });
  },

  render: function() {
    return (
      <div className='list-group-item'>
        <select name="companies[]" id="company-selector" multiple="multiple" data-placeholder="Enter bank or provider name">
          <option value="adcu">ADCU</option>
          <option value="american-express">American Express</option>
          <option value="anz">ANZ</option>
          <option value="auswide-bank">Auswide Bank</option>
          <option value="bank-australia">Bank Australia</option>
          <option value="bank-of-melbourne">Bank of Melbourne</option>
          <option value="bank-of-sydney">Bank of Sydney</option>
          <option value="banksa">BankSA</option>
          <option value="bankvic">BankVic</option>
          <option value="bankwest">Bankwest</option>
          <option value="bcu">bcu</option>
          <option value="b-e-personal-banking">B &amp; E Personal Banking</option>
          <option value="beyond-bank">Beyond Bank</option>
          <option value="big-sky-building-society">Big Sky Building Society </option>
          <option value="boq">BOQ</option>
          <option value="citibank">Citibank</option>
          <option value="coastline-credit-union">Coastline Credit Union</option>
          <option value="commonwealth-bank">Commonwealth Bank</option>
          <option value="community-first-cu">Community First CU</option>
          <option value="cua">CUA</option>
          <option value="defence-bank">Defence Bank</option>
          <option value="ecu-australia">ECU Australia</option>
          <option value="encompass-credit-union">Encompass Credit Union</option>
          <option value="fccs-credit-union">FCCS Credit Union</option>
          <option value="first-option-credit-union">First Option Credit Union</option>
          <option value="g-c-mutual-bank">G&amp;C Mutual Bank</option>
          <option value="ge-money">GE Money</option>
          <option value="greater-building-society">Greater Building Society</option>
          <option value="heritage-bank">Heritage Bank</option>
          <option value="holiday-coast-cu">Holiday Coast CU</option>
          <option value="horizon-credit-union">Horizon Credit Union</option>
          <option value="hsbc">HSBC</option>
          <option value="hume-bank">Hume Bank</option>
          <option value="hunter-united">Hunter United </option>
          <option value="imb">IMB</option>
          <option value="intech-credit-union">Intech Credit Union</option>
          <option value="jetstar">Jetstar</option>
          <option value="macquarie-bank">Macquarie Bank</option>
          <option value="macquarie-credit-union">Macquarie Credit Union</option>
          <option value="me-bank">ME Bank</option>
          <option value="mystate">MyState </option>
          <option value="nab">NAB</option>
          <option value="newcastle-permanent">Newcastle Permanent</option>
          <option value="people-s-choice-credit-union">People&#39;s Choice Credit Union </option>
          <option value="p-n-bank">P&amp;N Bank</option>
          <option value="police-bank">Police Bank</option>
          <option value="qantas-credit-union">Qantas Credit Union</option>
          <option value="qld-police-credit-union">Qld Police Credit Union</option>
          <option value="qt-mutual-bank">QT Mutual Bank</option>
          <option value="quay-credit-union">Quay Credit Union</option>
          <option value="queenslanders-cu">Queenslanders CU</option>
          <option value="scu">SCU</option>
          <option value="select-credit-union">Select Credit Union</option>
          <option value="service-one-alliance-bank">SERVICE ONE Alliance Bank</option>
          <option value="st-george-bank">St.George Bank</option>
          <option value="summerland-cu">Summerland CU</option>
          <option value="suncorp-bank">Suncorp Bank</option>
          <option value="teachers-mutual-bank">Teachers Mutual Bank</option>
          <option value="unicredit-wa">Unicredit-WA</option>
          <option value="victoria-teachers-mutual-bank">Victoria Teachers Mutual Bank</option>
          <option value="virgin-money">Virgin Money</option>
          <option value="westpac">Westpac</option>
          <option value="woolworths">Woolworths </option>
          <option value="woolworths-employees-cu">Woolworths Employees CU</option>
        </select>
      </div>
    );
  }
});

export default RCSelectFilter;
