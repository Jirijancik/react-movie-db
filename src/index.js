import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Importing styles
import './styles/Index'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App key = "yeeeeeeerewrer" />, document.getElementById('root'));

//Service worker
serviceWorker.unregister();
