import styled from 'styled-components';
import { IButtonWrapperProps, IStyledButtonProps } from '../../../frontEndTypes';

export const StyledButton = styled.button<IStyledButtonProps>`
  background-color: ${(props) => props.bg};
  font-size: ${(props) => props.fontSize};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  outline: none;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  padding: 0;
  &:disabled {
    color: black;
    background: var(--color-disabled);
  }
  @media (max-width: 540px) {
    width: 250px;
    height: 50px;
    margin: 0.5rem;
    font-size: 25px;
  }
`;

export const ButtonWrapper = styled.div<IButtonWrapperProps>`
  margin: ${(props) => (props.margin ? props.margin : null)};
  background: transparent;
`;
