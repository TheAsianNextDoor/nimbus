import styled from 'styled-components';

import { destructureAttribute } from '../utils/curryUtils';

type DivProps = {
    width?: string,
    paddingTop?: string,
    paddingRight?: string,
    paddingBottom?: string,
    paddingLeft?: string,
};

export const StyledDiv = styled.div<DivProps>`
    width: ${destructureAttribute('width')};
    padding-top: ${destructureAttribute('paddingTop')};
    padding-right: ${destructureAttribute('paddingTop')};
    padding-bottom: ${destructureAttribute('paddingBottom')};
    padding-left: ${destructureAttribute('paddingLeft')};
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  `;
