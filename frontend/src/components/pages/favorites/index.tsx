import React, { useContext } from 'react';

import { Title } from '../../shared/TextElements';
import FavoritesCardBoard from './FavoritesCardBoard';
import { FavoritesBackground } from './FavortiesElements';
import RecommendMovies from './RecommendMovies';
import { MoviesContext } from '../../../contexts/MoviesContext';
import NoResults from '../../shared/noResults';
import cover from '../../../assets/backgroundImages/doctor_strange.jpg';
import { IMoviesContext } from '../../../frontEndTypes';

const Favorites = (): React.ReactElement => {
  const { favoriteMovies } = useContext(MoviesContext) as IMoviesContext;

  const noFavorites = (
    <NoResults cover={cover}>
      <Title>You do not have any favorites.</Title>
      <Title>Add some🙂</Title>
    </NoResults>
  );
  const noLogin = (
    <NoResults cover={cover}>
      <Title>Please login first.</Title>
    </NoResults>
  );
  const { user } = useContext(MoviesContext) as IMoviesContext;

  const showFavorites = (
    <>
      <FavoritesBackground>
        <FavoritesCardBoard />
      </FavoritesBackground>
      <RecommendMovies />
    </>
  );
  if (user.user_id === undefined || user.user_id.length === 0) {
    return noLogin;
  }
  return <>{favoriteMovies.length === 0 ? noFavorites : showFavorites}</>;
};

export default Favorites;
