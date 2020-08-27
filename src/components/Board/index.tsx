import styled from 'styled-components';
import { breakpoints } from '../../constants';

const Board = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: calc(100vh - 60px);

  @media only screen and (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;

    > div {
        width: calc(100% / 3);
    }
  }
`
export default Board