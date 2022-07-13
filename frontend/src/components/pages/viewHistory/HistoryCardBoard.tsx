import React, { useState, useContext } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import imgPlaceholder from '../../../assets/default.jpg';

import CardBoard from '../../shared/cardBoard';
import { Img } from '../../shared/ImageElements';
import {
  FavoritesTrashcan,
  MovieTitle,
  RemoveButton,
  FavoriteCardContainer,
  FavoritesCard,
} from './HistoryElements';
import Icon from '../../shared/icon';
import { MoviesContext } from '../../../contexts/MoviesContext';
import { IMovieData, IMoviesContext, Movie } from '../../../frontEndTypes';

const FavoriteCard = ({ data }: IMovieData) => {
  const [active, setActive] = useState(false);
  const { user, getSingleMovieData, removeFromViewed } = useContext(
    MoviesContext
  ) as IMoviesContext;
  const history = useHistory();
  const redirectToMoviePage = () => {
    getSingleMovieData(user.user_id, data);
    history.push('/movie');
  };
  return (
    <FavoriteCardContainer
      onMouseEnter={(e) => {
        e.preventDefault();
        setActive(true);
      }}
      onMouseLeave={(e) => {
        e.preventDefault();
        setActive(false);
      }}
    >
      <FavoritesCard>
        <FavoritesTrashcan
          isVisible={active}
          onClick={() => removeFromViewed(user.user_id, data.id)}
        >
          <RemoveButton>
            <Icon color="white" size="30px">
              <AiFillDelete />
            </Icon>
          </RemoveButton>
        </FavoritesTrashcan>
        <Img as="img" src={data.picture || imgPlaceholder} alt={data.title} />
        <MovieTitle onClick={redirectToMoviePage}>{data.title}</MovieTitle>
      </FavoritesCard>
    </FavoriteCardContainer>
  );
};

const FavoritesCardBoard = (): React.ReactElement => {
  const { viewedMovies } = useContext(MoviesContext) as IMoviesContext;
  // showRated(user.user_id);
  return (
    <CardBoard>
      {viewedMovies.map((data: Movie) => (
        <FavoriteCard data={data} key={data.id} />
      ))}
    </CardBoard>
  );
};

export default FavoritesCardBoard;
