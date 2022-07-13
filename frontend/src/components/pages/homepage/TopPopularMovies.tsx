import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { Img } from '../../shared/ImageElements';
import Card from '../../shared/card';
import { MoviesContext } from '../../../contexts/MoviesContext';
import { IMovieData, IMoviesContext, Movie } from '../../../frontEndTypes';
import { ScrollHorizontally } from '../../shared/ScrollHorizontally';
import imgPlaceholder from '../../../assets/default.jpg';
import { Title } from '../../shared/TextElements';

const TopPopularMovieCard = ({ data }: IMovieData) => {
  const { user, getSingleMovieData } = useContext(MoviesContext) as IMoviesContext;
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

const TopPopularMovies = (): React.ReactElement => {
  const { upcomingMovies } = useContext(MoviesContext) as IMoviesContext;
  return (
    <>
      {upcomingMovies.length > 0 && <Title>TOP POPULAR</Title>}
      <ScrollHorizontally>
        {upcomingMovies.map((movie: Movie) => (
          <TopPopularMovieCard data={movie} key={movie.id} />
        ))}
        ;
      </ScrollHorizontally>
    </>
  );
};

export default TopPopularMovies;
