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
} from './FavortiesElements';
import Icon from '../../shared/icon';
import { MoviesContext } from '../../../contexts/MoviesContext';
import { ICastData, IMoviesContext, Cast } from '../../../frontEndTypes';
import { getSingleCast } from '../../../util/contextFunctions';

const FavoriteCard = ({ data }: ICastData) => {
  const [active, setActive] = useState(false);
  const { user, getCastData } = useContext(MoviesContext) as IMoviesContext;
  const history = useHistory();
  const redirectToCastPage = () => {
    getCastData(user.user_id, data.id);
    history.push('/cast');
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
        {/* <FavoritesTrashcan
          isVisible={active}
          onClick={() => removeFromFavorites(user.user_id, data.id)}
        >
          <RemoveButton>
            <Icon color="white" size="30px">
              <AiFillDelete />
            </Icon>
          </RemoveButton>
        </FavoritesTrashcan> */}
        <Img as="img" src={data.profile_path || imgPlaceholder} alt={data.name} />
        <MovieTitle onClick={redirectToCastPage}>{data.name}</MovieTitle>
      </FavoritesCard>
    </FavoriteCardContainer>
  );
};

const FavoritesCardBoard = (): React.ReactElement => {
  const { favoriteCasts } = useContext(MoviesContext) as IMoviesContext;
  return (
    <CardBoard>
      {favoriteCasts.map((data: Cast) => (
        <FavoriteCard data={data} key={data.id} />
      ))}
    </CardBoard>
  );
};

export default FavoritesCardBoard;
