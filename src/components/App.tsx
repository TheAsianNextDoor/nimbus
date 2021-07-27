import { ReactElement } from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';

import { CloudPage } from './cloudPage';
import { Search } from './search';

export const App = (): ReactElement => (
    <BrowserRouter>
        <Switch>
            <Route
                path="/"
                exact
                component={Search}
            />
            <Route
                path="/canvas"
                exact
                component={CloudPage}
            />
        </Switch>
    </BrowserRouter>
);
