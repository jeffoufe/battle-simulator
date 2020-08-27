import styled from 'styled-components';
import { breakpoints } from '../../constants';

const Title = styled.h1`
    width: 100%;
    height: 40px;
    font-size: 1.5em;
    margin: 0;
    padding-top: 20px;
    text-align: center;
    text-transform: uppercase;

    @media only screen and (min-width: ${breakpoints.tablet}) {
        font-size: 3em;
    }
`

Title.displayName = 'Title';
export default Title;