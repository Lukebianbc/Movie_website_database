import React from 'react';

import CardBoard from '../../shared/cardBoard';
import cover from '../../../assets/backgroundImages/alita.jpg';
import InfoCardsBoard from './InfoCardsBoard';
import TopPopularMovies from './TopPopularMovies';
import { HeroTitle, HeroParagraph, HeroCoverContainer } from './HomepageElements';
import TopRatedMovies from './TopRatedMovies';
import { Background } from '../../shared/Background';

const Home = (): React.ReactElement => {
  return (
    <>
      <HeroCoverContainer>
        <Background background={cover} height="80vh" light="10px 10px 90px 80px black  inset">
          <HeroTitle>22Spring_CS516 </HeroTitle>
          <HeroParagraph>For all the movie lovers to enjoy</HeroParagraph>
          <HeroParagraph>Members: Bohan Li, Chen Bian</HeroParagraph>
          <HeroParagraph>
            Dataset: https://www.kaggle.com/rounakbanik/the-movies-dataset, 45000 movies released
            before July 2017
          </HeroParagraph>
        </Background>
      </HeroCoverContainer>
      <CardBoard>
        <InfoCardsBoard />
      </CardBoard>
      <TopPopularMovies />
      <TopRatedMovies />
    </>
  );
};
export default Home;
