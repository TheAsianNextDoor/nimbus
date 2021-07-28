import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/app';
// eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
require('dotenv-flow').config();

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);
