import styled from 'styled-components';
import imgPlaceholder from '../../../assets/default.jpg';
import { ISearchedBlurBlack } from '../../../frontEndTypes';

export const SearchedContainer = styled.div`
  background: linear-gradient(45%, #080e11, #2f3033, #0b0f26);
  box-shadow: 30px 5px 210px 130px black inset;
`;
export const SearchedCardContainer = styled.div`
  width: 85%;
  margin: 1rem auto;
  border-radius: 5px;
  box-shadow: 0 70px 63px -60px #000000;
  @media (max-width: 600px) {
    margin: 1rem auto;
    padding: 0;
    background-color: var(--color-background);
    width: 100%;
  } ;
`;
export const SearchedCardBoardContainer = styled.div`
  background: linear-gradient(45deg, #080e11, #1c1e2c, #060707);
  box-shadow: 30px 5px 210px 130px black inset;
  padding: 0.5rem;
  @media (max-width: 710px) {
    margin: 0;
    padding: 0;
    background-color: var(--color-background);
  } ;
`;

export const Image = styled.img`
  height: 200px;
  width: auto;
  @media (max-width: 710px) {
    width: 100%;
    height: auto;
  } ;
`;

export const SearchedContentWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: var(--color-text);
  background-color: var(--color-background);
  padding: 0.5rem;
  @media (max-width: 780px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  } ;
`;
export const SearchedAddButton = styled.button`
  margin: 1rem;
  background: var(--color-primary);
  font-size: 15px;
  width: 150px;
  height: 2rem;
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
    margin: 1rem auto;
    font-size: 25px;
  }
`;

export const SearchedMovieCardContainer = styled.div`
  position: relative;
  display: block;
  width: 800px;
  height: 350px;
  margin: 100px auto;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.4s;
  box-shadow: 0px 0px 150px -45px rgba(241, 238, 237, 0.5);
  @media screen and (max-width: 768px) {
    width: 95%;
    margin: 70px auto;
    min-height: 350px;
    height: auto;
  }
`;

export const SearchedInfoSection = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-blend-mode: multiply;
  position: relative;
  z-index: 2;
  border-radius: 10px;
  background: linear-gradient(to right, #252523 65%, transparent 100%);
  @media screen and (max-width: 768px) {
    background: linear-gradient(to top, rgb(20, 20, 19) 50%, transparent 100%);
    display: inline-grid;
  }
`;

export const SearchedMovieHeader = styled.div`
  position: relative;
  padding: 25px;
  height: 40%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const SearchedHeader = styled.h1`
  color: #fff;
  font-weight: 400;
`;
export const SearchedH4 = styled.h4`
  color: #9ac7fa;
  font-weight: 400;
`;
export const SearchedImage = styled.img`
  position: relative;
  float: left;
  margin-right: 20px;
  height: 120px;
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
`;

export const SearchedMovieDesc = styled.div`
  padding: 25px 25px 0 25px;
  min-height: 140px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const SearchedMovieText = styled.p`
  color: #cfd6e1;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-width: 465px;
  text-align: justify;
`;

export const SearchedBlurBlack = styled.div<ISearchedBlurBlack>`
  position: absolute;
  top: 0;
  z-index: 1;
  height: 100%;
  right: 0;
  background-size: cover;
  border-radius: 11px;
  width: 100%;
  background-position: -140% 25% !important;
  background: url(${(props) => (props.cover ? props.cover : imgPlaceholder)});
  box-shadow: 20px 20px 100px 10px #252523 inset;
  @media screen and (max-width: 768px) {
    width: 100%;
    background-position: 50% 50% !important;
  }
`;
