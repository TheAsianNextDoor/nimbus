import {
    Button,
    TextField,
} from '@material-ui/core';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import {
    createChannelQueryUri,
    getRequest,
} from 'utils/apiUtils';

import { ReactComponent as NimbusLogo } from '../assets/images/logo.svg';
import {
    connectTmiClient,
    createTmiClientConfig,
} from '../utils/tmiUtils';
import { StyledDiv } from './searchPage.styles';

type OnSubmitParams = { twitchChannelName: string };

export const SearchPage = (): ReactElement => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm();

    const history = useHistory();

    const onSubmit = async ({ twitchChannelName }: OnSubmitParams) => {
        const response = await getRequest(createChannelQueryUri(twitchChannelName));

        if (response.data.data.length > 0) {
            connectTmiClient(createTmiClientConfig(twitchChannelName));
            history.push('/canvas');
        } else {
            setError(
                'twitchChannelName',
                { message: 'Twitch Channel does not exist' },
            );
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <StyledDiv>
                <NimbusLogo />
                <p>
                    nimbus
                </p>

                <StyledDiv width="80%">
                    <TextField
                        id="twitchChannelName"
                        label="Twitch Channel Name"
                        fullWidth
                        {...register(
                            'twitchChannelName',
                            { required: 'Twitch Channel Name required' },
                        )}
                        error={!!errors.twitchChannelName}
                        helperText={errors.twitchChannelName?.message}
                    />
                    <StyledDiv paddingTop="20px">
                        <Button
                            color="primary"
                            variant="contained"
                            type="submit"
                        >
                            Enter
                        </Button>
                    </StyledDiv>
                </StyledDiv>

            </StyledDiv>
        </form>
    );
};
