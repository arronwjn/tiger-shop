import React from 'react';
import { render } from 'react-dom';
import  App from './App';
import {Provider} from 'react-redux'
import store from './store'
import tap from 'react-tap-event-plugin';

tap()
render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
