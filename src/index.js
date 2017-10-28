import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import Router from './Router';

const render = () => {
  ReactDOM.render(<Router />, document.getElementById('root'));
}

render();

if (module.hot) {
  module.hot.accept('./Router', render);
}
