import './App.css';

import { ReactElement } from 'react';

import { ReactComponent as NimbusLogo } from './assets/images/logo.svg';

function App(): ReactElement {
    return (
        <div className="App">
            <header className="App-header">
                <NimbusLogo />
                <p>
                    nimbus
                </p>

            </header>
        </div>
    );
}

export default App;
