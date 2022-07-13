import React, { useContext, useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { Img } from '../../shared/ImageElements';
import Card from '../../shared/card';
import { MoviesContext } from '../../../contexts/MoviesContext';
import { Cast, ICastData, IMoviesContext } from '../../../frontEndTypes';
import { ScrollHorizontally } from '../../shared/ScrollHorizontally';
import { Title } from '../../shared/TextElements';
import imgPlaceholder from '../../../assets/default.jpg';

const PeopleCard = ({ data }: ICastData) => {
  const { user, getCastData } = useContext(MoviesContext) as IMoviesContext;
  const history = useHistory();
  return (
    <div
      onClick={() => {
        getCastData(user.user_id, data.id);
        history.push('/cast');
      }}
    >
      <Card width="10rem" height="auto" margin="1rem 0.5rem">
        <Img as="img" src={data.profile_path || imgPlaceholder} alt={data.name} />
      </Card>
    </div>
  );
};

const Casts = (): React.ReactElement => {
  const { movieCast } = useContext(MoviesContext) as IMoviesContext;
  // const [similarMovies, setSimilarMovies] = useState<Movie[]>([]);

  // useEffect(() => {
  //   getSimilarMovies(singleMovie.id).then((results) => setSimilarMovies(results));
  // }, [singleMovie.id]);

  return (
    <>
      {movieCast.length > 0 && <Title>Cast</Title>}
      <ScrollHorizontally>
        {movieCast.map((cast: Cast) => (
          <PeopleCard data={cast} key={cast.id} />
        ))}
        ;
      </ScrollHorizontally>
    </>
  );
};

export default Casts;
