import styled from 'styled-components';

import cover from '../../../assets/default.jpg';
import { IMovieBackground } from '../../../frontEndTypes';

export const MovieImage = styled.div`
  position: absolute;
  bottom: 55px;
  left: 10px;
`;

export const MovieBackground = styled.div<IMovieBackground>`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => (props.cover ? props.cover : cover)});
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 40px 40px 210px 130px black inset;
  position: relative;
`;

export const MovieTitleContainer = styled.div`
  background: transparent;
  position: absolute;
  bottom: 120px;
  left: 250px;
  @media (max-width: 540px) {
    display: none;
  } ;
`;

export const MovieContentWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: var(--color-text);
  background-color: var(--color-background);
  @media (max-width: 780px) {
    flex-direction: column;
    align-items: center;
  } ;
`;
export const MovieDataColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 30%;
  margin: 1rem;
  padding: 1rem;
  @media (max-width: 780px) {
    max-width: 100%;
    width: 100%;
    margin: 1rem 0.2rem;
  } ;
`;
