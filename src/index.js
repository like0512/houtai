import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouteComponent  from './router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RouteComponent  />, document.getElementById('root'));
registerServiceWorker();
