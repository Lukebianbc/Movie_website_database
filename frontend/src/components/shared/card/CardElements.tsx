import styled from 'styled-components';
import { ICardContainer } from '../../../frontEndTypes';

export const CardContainer = styled.div<ICardContainer>`
  background-color: var(--color-background);
  margin: ${(props) => props.margin};
  border-radius: 5px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-shadow: 0px 0px 10px 10px #1f1d1d;
  position: relative;
  &:hover {
    background-color: #faf6f6;
  }
  @media (max-width: 376px) {
    max-width: 18rem;
    height: fit-content;
  }
`;
