import React from 'react';
import { SiImdb } from 'react-icons/si';

import { IMovieData } from '../../../frontEndTypes';
import Icon from '../icon';
import {
  MovieContentWrapper,
  MovieDataColumn,
  MovieInfo,
  Resume,
  InfoWrapper,
} from './MovieInfoElements';

const MovieInfoContent = ({ data }: IMovieData): React.ReactElement => {
  return (
    <MovieContentWrapper>
      <MovieDataColumn>
        <InfoWrapper>
          <Icon color="var(--color-text)" size="30px">
            <SiImdb />
          </Icon>
          <MovieInfo>
            IMDB rating: {data.rating} | {data.date}
          </MovieInfo>
        </InfoWrapper>
        <InfoWrapper>
          <MovieInfo>
            budget: {data.budget} | revenue: {data.revenue} | runtime: {data.runtime}
          </MovieInfo>
        </InfoWrapper>
        <Resume>{data.resume}</Resume>
      </MovieDataColumn>
    </MovieContentWrapper>
  );
};
export default MovieInfoContent;
