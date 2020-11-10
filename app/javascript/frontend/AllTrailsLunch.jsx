import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/AppContainer';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});