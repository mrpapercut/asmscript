import {createElement as E} from 'react';
import {Provider} from 'react-redux';
import DOM from 'react-dom';

import createStore from './reducers/createStore';

import App from './components/App';

require('../css/main.scss');

const store = createStore();

window.addEventListener('load', e => {
    e.preventDefault();
    DOM.render(E(Provider, {
        store
    }, E(App)), document.getElementById('wrapper'));
});
