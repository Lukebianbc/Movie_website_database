import styled from 'styled-components';
import { IFavoritesTrashcanProps } from '../../../frontEndTypes';

export const FavoritesBackground = styled.div`
  min-height: 100vh;
  background: linear-gradient(45deg, #080e11, #282930, #0b0f26);
  box-shadow: 30px 5px 210px 130px black inset;
`;

export const MovieTitle = styled.h3`
  color: #bcbcc0;
  margin: 1rem;
  text-align: center;
`;

export const Image = styled.img`
  height: 400px;
  width: auto;
  @media (max-width: 710px) {
    width: 100%;
    height: auto;
  } ;
`;

export const FavoritesTrashcan = styled.span<IFavoritesTrashcanProps>`
  position: absolute;
  right: 20px;
  top: 20px;
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  @media (max-width: 760px) {
    display: block;
  }
`;

export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
`;

export const FavoriteCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const FavoritesCard = styled.div`
  margin: 2rem 1rem;
  width: 15rem;
  height: 27rem;
  box-shadow: 0px 0px 10px 10px #1f1d1d;
  position: relative;
  background: black;
  &:hover {
    background: #7a7878;
    box-shadow: -1px 1px 10px 1px #e4e0e0, 1px -1px 10px 1px #828282;
  }
  @media (max-width: 376px) {
    width: 100%;
    height: fit-content;
  }
`;
