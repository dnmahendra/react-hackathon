import React from 'react';
import ReactDOM from 'react-dom';

import RCHeader from './header/header';
import RCFooter from './footer/footer';

ReactDOM.render(
  <div>
    <RCHeader />
    <RCFooter />
  </div>,
  document.getElementById('react-body')
);
