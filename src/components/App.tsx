import { ReactElement } from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';

import { CloudPage } from './cloudPage';
import { SearchPage } from './searchPage';

export const App = (): ReactElement => (
    <BrowserRouter>
        <Switch>
            <Route
                path="/"
                exact
                component={SearchPage}
            />
            <Route
                path="/canvas"
                exact
                component={CloudPage}
            />
        </Switch>
    </BrowserRouter>
);
