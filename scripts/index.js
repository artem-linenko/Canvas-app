import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from './components/AppWrapper';
import state from './state';


console.log(document.getElementById('root'))

ReactDOM.render(<AppWrapper tree={state} />, document.getElementById('root'));