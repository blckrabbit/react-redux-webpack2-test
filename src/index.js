import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import routes from './routes'
import store from 'store'
import FastClick from 'fastclick'

// import 'index.html';

//解决移动端300毫秒延迟
FastClick.attach(document.body);

console.log("========进入应用=======")

ReactDOM.render(
  <Provider store={store}>
      {routes}
  </Provider>,
  document.getElementById('root')
);
