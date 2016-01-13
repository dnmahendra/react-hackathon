import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header/header';
import Breadcrumb from './header/breadcrumb';

ReactDOM.render(
  <div>
    <Header />
    <Breadcrumb />
  </div>,
  document.getElementById('react-body')
);
