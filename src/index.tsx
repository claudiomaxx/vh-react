import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './helpers/configure-store';

import App from './App';

const store = configureStore();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
