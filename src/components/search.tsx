import {
    Button,
    TextField,
} from '@material-ui/core';
import { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import { ReactComponent as NimbusLogo } from '../assets/images/logo.svg';
import { StyledDiv } from './app.styles';

export const Search = (): ReactElement => {
    const history = useHistory();

    const handleClick = async () => {
        history.push('/canvas');
    };

    return (
        <StyledDiv>
            <NimbusLogo />
            <p>
                nimbus
            </p>

            <StyledDiv width="80%">
                <TextField
                    label="Twitch URL"
                    fullWidth
                />
                <StyledDiv paddingTop="20px">
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={handleClick}
                    >
                        Enter
                    </Button>
                </StyledDiv>
            </StyledDiv>

        </StyledDiv>
    );
};
