import styled from 'styled-components';
import placeholder from '../../assets/backgroundImages/alita.jpg';
import { IBackgroundProps } from '../../frontEndTypes';

export const Background = styled.div<IBackgroundProps>`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => (props.background ? props.background : placeholder)});
  height: ${(props) => (props.height ? props.height : '100vh')};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: ${(props) =>
    props.light ? props.light : '30px 30px 210px 130px var(--color-background) inset'};
  @media (max-width: 768px) {
    box-shadow: none;
    height: 55vh;
  }
`;

export const BackgroundWhite = styled.div<IBackgroundProps>`
  background: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 768px) {
    box-shadow: none;
    height: 55vh;
  }
`;
