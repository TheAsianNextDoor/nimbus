import {
    Button,
    TextField,
} from '@material-ui/core';
import { ReactElement } from 'react';

import { ReactComponent as NimbusLogo } from '../assets/images/logo.svg';
import { StyledDiv } from './App.styles';

export const App = (): ReactElement => (
    <StyledDiv>
        <NimbusLogo />
        <p>
            nimbus
        </p>

        <StyledDiv width="80%">
            <TextField
                placeholder="Twitch URL"
                fullWidth
            />
            <StyledDiv paddingTop="20px">
                <Button
                    color="primary"
                    variant="contained"
                >
                    Enter
                </Button>
            </StyledDiv>
        </StyledDiv>

    </StyledDiv>
);
