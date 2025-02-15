import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000';

const root = document.getElementById('root');

const render = (Component) => {
  ReactDOM.createRoot(root).render(<Component />);
};

render(App);
