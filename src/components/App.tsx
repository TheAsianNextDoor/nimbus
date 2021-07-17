import '../styles/App.css';

import {
    Button,
    TextField,
} from '@material-ui/core';
import { ReactElement } from 'react';

import { ReactComponent as NimbusLogo } from '../assets/images/logo.svg';

function App(): ReactElement {
    return (
        <div className="App">
            <header className="App-header">
                <NimbusLogo />
                <p>
                    nimbus
                </p>
                <TextField
                    placeholder="Twitch URL"
                />
                <p />
                <Button
                    color="primary"
                    variant="contained"
                >
                    Enter
                </Button>

            </header>
        </div>
    );
}

export default App;
