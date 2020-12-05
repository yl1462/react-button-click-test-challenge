import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './components/button';
import registerServiceWorker from './registerServiceWorker';
import App from './App'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
    // <Button onClick={() => console.log('Click')} />,
    document.getElementById('root')
);
registerServiceWorker();
