import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import store from './states/store';
import Candidatedetail from './components/Candidatedetail';

ReactDOM.render(
    <Provider  store={store} >
        <div className="App">
            <div className="mainWrapper">
                <Candidatedetail/>
            </div>
        </div>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
