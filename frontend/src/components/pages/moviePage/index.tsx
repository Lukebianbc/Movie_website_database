import React, { useContext, useEffect } from 'react';

import { MovieBackground, MovieImage, MovieTitleContainer } from './MoviepageElements';
import { Title } from '../../shared/TextElements';
import MovieInfoCard from './MovieInfoCard';
import { MoviesContext } from '../../../contexts/MoviesContext';
import imgPlaceholder from '../../../assets/default.jpg';
import { IMoviesContext } from '../../../frontEndTypes';
import ReviewForm from './ReviewForm';
import Casts from './Cast';

const MoviePage = (): React.ReactElement => {
  const { user, singleMovie, getMovieCastData } = useContext(MoviesContext) as IMoviesContext;
  useEffect(() => {
    window.scrollTo(0, 0);
    getMovieCastData(user.user_id, singleMovie.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [singleMovie]);
  return (
    <>
      <MovieBackground cover={singleMovie.picture}>
        <MovieImage
          as="img"
          src={singleMovie.picture || imgPlaceholder}
          width="200px"
          height="auto"
          alt="Joker"
        />
        <MovieTitleContainer>
          <Title>{singleMovie.title}</Title>
        </MovieTitleContainer>
      </MovieBackground>
      <MovieInfoCard />
      <ReviewForm />
      <Casts />
    </>
  );
};

export default MoviePage;
