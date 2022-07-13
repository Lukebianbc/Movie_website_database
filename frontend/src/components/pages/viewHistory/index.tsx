import React, { useContext } from 'react';

import { Title } from '../../shared/TextElements';
import FavoritesCardBoard from './HistoryCardBoard';
import { FavoritesBackground } from './HistoryElements';
import { Background } from '../../shared/Background';
import { MoviesContext } from '../../../contexts/MoviesContext';
import NoResults from '../../shared/noResults';
import cover from '../../../assets/backgroundImages/doctor_strange.jpg';
import { IMoviesContext } from '../../../frontEndTypes';

const ViewHistory = (): React.ReactElement => {
  const { viewedMovies } = useContext(MoviesContext) as IMoviesContext;
  const noLogin = (
    <NoResults cover={cover}>
      <Title>Please login first.</Title>
    </NoResults>
  );
  const noViews = (
    <NoResults cover={cover}>
      <Title>You do not have any Views.</Title>
      <Title>Add some🙂</Title>
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
  return <>{viewedMovies.length === 0 ? noViews : showFavorites}</>;
};

export default ViewHistory;
