import styled from 'styled-components';
import { breakpoints } from '../../constants';

interface CharacterComponentProps {
    order: number
}

export const CharacterContainer = styled.div`
    display: flex;
    flex-direction: ${(props: CharacterComponentProps) => props.order ? 'column-reverse' : 'column'};

    @media only screen and (min-width: ${breakpoints.tablet}) {
        flex-direction: column-reverse;
    }
`

export const CharacterInfoDice = styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${(props: CharacterComponentProps) => props.order ? 'column-reverse' : 'column'};

    @media only screen and (min-width: ${breakpoints.tablet}) {
        flex-direction: ${(props: CharacterComponentProps) => props.order ? 'row-reverse' : 'row'};;
        align-items: center;
        justify-content: space-around;
    }
`

export const CharacterInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media only screen and (min-width: ${breakpoints.tablet}) {
        flex-direction: ${(props: CharacterComponentProps) => props.order ? 'row-reverse' : 'row'};
        width: calc(100% - 70px);
    }
`

export const CharacterImage = styled.img`
    width: 85px;
    height: 85px;

    @media only screen and (min-width: ${breakpoints.tablet}) {
        width: 150px;
        height: 150px;
    }

    @media only screen and (min-width: ${breakpoints.laptop}) {
        width: 200px;
        height: 200px;
    }
`;

export const CharacterName = styled.div`
    text-align: center;
    ${(props: CharacterComponentProps) => props.order ? 'margin-top: 10px;' : 'margin-bottom: 10px;'}

    @media only screen and (min-width: ${breakpoints.tablet}) {
        margin-top: 30px;
        font-size: 2em;
    }
`

export const CharacterDice = styled.div`
    ${(props: CharacterComponentProps) => props.order ? 'margin-bottom' : 'margin-top'}: 10px;
    > .dice {
        text-align: center;
    }

    @media only screen and (min-width: ${breakpoints.tablet}) {
        > .dice {
            display: flex;
            flex-direction: column;

            .die-container {
                display: block !important;
                margin: 20px !important;
            }
        }
    }
`