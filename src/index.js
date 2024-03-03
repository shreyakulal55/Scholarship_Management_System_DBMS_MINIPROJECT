// index.js or index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById('root') || document.createElement('div');

const render = (Component) => {
  ReactDOM.createRoot(root).render(<Component />);
};

render(App);

// If you have hot module replacement (HMR) set up, you might use something like this:
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}
