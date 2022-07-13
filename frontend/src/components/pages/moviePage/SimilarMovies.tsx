import React, { useContext, useState, useEffect } from 'react';

import { Img } from '../../shared/ImageElements';
import Card from '../../shared/card';
import { MoviesContext } from '../../../contexts/MoviesContext';
import { IMovieData, IMoviesContext, Movie } from '../../../frontEndTypes';
import { ScrollHorizontally } from '../../shared/ScrollHorizontally';
import { Title } from '../../shared/TextElements';
import imgPlaceholder from '../../../assets/default.jpg';

const SimilarMovieCard = ({ data }: IMovieData) => {
  const { user, getSingleMovieData } = useContext(MoviesContext) as IMoviesContext;
  return (
    <div
      onClick={() => {
        getSingleMovieData(user.user_id, data);
      }}
    >
      <Card width="10rem" height="auto" margin="1rem 0.5rem">
        <Img as="img" src={data.picture || imgPlaceholder} alt={data.title} />
      </Card>
    </div>
  );
};

const SimilarMovies = (): React.ReactElement => {
  const { singleMovie } = useContext(MoviesContext) as IMoviesContext;
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([]);

  useEffect(() => {
    // getSimilarMovies(singleMovie.id).then((results) => setSimilarMovies(results));
  }, [singleMovie.id]);

  return (
    <>
      {similarMovies.length > 0 && <Title>You might also like</Title>}
      <ScrollHorizontally>
        {similarMovies.map((movie: Movie) => (
          <SimilarMovieCard data={movie} key={movie.id} />
        ))}
        ;
      </ScrollHorizontally>
    </>
  );
};

export default SimilarMovies;
