import React, { useContext } from 'react';

import { Title } from '../../shared/TextElements';
import FavoritesCardBoard from './RatedCardBoard';
import { FavoritesBackground } from './RatedElements';
import { MoviesContext } from '../../../contexts/MoviesContext';
import NoResults from '../../shared/noResults';
import cover from '../../../assets/backgroundImages/doctor_strange.jpg';
import { IMoviesContext } from '../../../frontEndTypes';

const Rated = (): React.ReactElement => {
  const { ratedMovies } = useContext(MoviesContext) as IMoviesContext;

  const noFavorites = (
    <NoResults cover={cover}>
      <Title>You do not have any rated movie.</Title>
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
    <FavoritesBackground>
      <FavoritesCardBoard />
    </FavoritesBackground>
  );
  if (user.user_id === undefined || user.user_id.length === 0) {
    return noLogin;
  }
  return <>{ratedMovies.length === 0 ? noFavorites : showFavorites}</>;
};

export default Rated;
