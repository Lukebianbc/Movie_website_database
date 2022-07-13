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

const RecommendMovies = (): React.ReactElement => {
  const { recommendMovies } = useContext(MoviesContext) as IMoviesContext;
  return (
    <>
      {recommendMovies.length > 0 && (
        <Title>
          Recommended Movies, when favorite movie changes, Click &quot;Favorite movie&quot; navbar
          to refresh.
        </Title>
      )}
      <Title>
        Rule: Movies from same genre as favorite movies, sorted by popularity * vote-average
      </Title>
      <ScrollHorizontally>
        {recommendMovies.map((movie: Movie) => (
          <TopPopularMovieCard data={movie} key={movie.id} />
        ))}
        ;
      </ScrollHorizontally>
    </>
  );
};

export default RecommendMovies;
