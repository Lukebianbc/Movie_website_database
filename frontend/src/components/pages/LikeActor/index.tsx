import React, { useContext } from 'react';

import { Title } from '../../shared/TextElements';
import FavoritesCardBoard from './FavoritesCardBoard';
import { FavoritesBackground } from './FavortiesElements';
import { MoviesContext } from '../../../contexts/MoviesContext';
import NoResults from '../../shared/noResults';
import cover from '../../../assets/backgroundImages/doctor_strange.jpg';
import { IMoviesContext } from '../../../frontEndTypes';

const LikeActor = (): React.ReactElement => {
  const { favoriteCasts } = useContext(MoviesContext) as IMoviesContext;

  const noLogin = (
    <NoResults cover={cover}>
      <Title>Please login first.</Title>
    </NoResults>
  );
  const noFavActors = (
    <NoResults cover={cover}>
      <Title>You do not have any favorite actors.</Title>
      <Title>Add some🙂</Title>
    </NoResults>
  );
  const showFavorites = (
    <FavoritesBackground>
      <FavoritesCardBoard />
    </FavoritesBackground>
  );
  const { user } = useContext(MoviesContext) as IMoviesContext;
  if (user.user_id === undefined || user.user_id.length === 0) {
    return noLogin;
  }
  return <>{favoriteCasts.length === 0 ? noFavActors : showFavorites}</>;
};

export default LikeActor;
