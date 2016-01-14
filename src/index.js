import React from 'react';
import ReactDOM from 'react-dom';

import RCHeader from './header/header';
import RCSearchPage from './credit-cards/search';
import RCFooter from './footer/footer';

ReactDOM.render(
  <div>
    <RCHeader />
    <RCSearchPage/>
    <RCFooter />
  </div>,
  document.getElementById('react-body')
);
