import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { Img } from '../../shared/ImageElements';
import Card from '../../shared/card';
import { MoviesContext } from '../../../contexts/MoviesContext';
import { IMovieData, IMoviesContext, Movie } from '../../../frontEndTypes';
import { ScrollHorizontally } from '../../shared/ScrollHorizontally';
import imgPlaceholder from '../../../assets/default.jpg';
import { Title } from '../../shared/TextElements';

const TopRatedMovieCard = ({ data }: IMovieData): React.ReactElement => {
  const { user, getSingleMovieData, singleMovie } = useContext(MoviesContext) as IMoviesContext;
  const history = useHistory();
  const redirectToMoviePage = () => {
    getSingleMovieData(user.user_id, data);
    history.push('/movie');
  };

  return (
    <div onClick={redirectToMoviePage}>
      <Card width="12rem" height="auto" margin="1rem 0.5rem">
        <Img as="img" src={data.picture || imgPlaceholder} alt={data.title} />
      </Card>
    </div>
  );
};

const TopRatedMovies = (): React.ReactElement => {
  const { topRatedMovies } = useContext(MoviesContext) as IMoviesContext;
  return (
    <>
      {topRatedMovies.length > 0 && <Title>TOP RATED</Title>}
      <ScrollHorizontally>
        {topRatedMovies.map((movie: Movie) => (
          <TopRatedMovieCard data={movie} key={movie.id} />
        ))}
        ;
      </ScrollHorizontally>
    </>
  );
};

export default TopRatedMovies;
