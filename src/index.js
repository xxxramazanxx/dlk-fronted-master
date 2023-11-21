import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { store } from './store/configureStore';

import 'whatwg-fetch';
import 'normalize.css';
import './public/font/zyalva-regular.woff';
import './public/font/zyalva-regular.ttf';

import App from './containers/App';

const history = createBrowserHistory();
console.log(history);

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <div>
          <Component />
        </div>
      </Router>
    </Provider>,
    document.getElementById('root')
  );
};

render(App);

// Hot Module Replacement
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(App);
  });
}
