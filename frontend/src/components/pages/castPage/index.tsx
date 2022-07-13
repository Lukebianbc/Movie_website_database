import React, { useContext, useEffect } from 'react';

import { MovieBackground, MovieImage, MovieTitleContainer } from './MoviepageElements';
import { Title } from '../../shared/TextElements';
import CastInfoCard from './CastInfoCard';
import { MoviesContext } from '../../../contexts/MoviesContext';
import imgPlaceholder from '../../../assets/default.jpg';
// eslint-disable-next-line import/named
import { IMoviesContext } from '../../../frontEndTypes';

const CastPage = (): React.ReactElement => {
  const { user, singleCast } = useContext(MoviesContext) as IMoviesContext;
  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [singleCast]);
  return (
    <>
      <MovieBackground cover={singleCast.profile_path}>
        <MovieImage
          as="img"
          src={singleCast.profile_path || imgPlaceholder}
          width="200px"
          height="auto"
          alt="Joker"
        />
        <MovieTitleContainer>
          <Title>{singleCast.name}</Title>
        </MovieTitleContainer>
      </MovieBackground>
      <CastInfoCard />
    </>
  );
};

export default CastPage;
