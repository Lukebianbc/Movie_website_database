import React from 'react';
import { SiImdb } from 'react-icons/si';

import { ICastData } from '../../../frontEndTypes';
import Icon from '../icon';
import { MovieContentWrapper, MovieDataColumn, MovieInfo, InfoWrapper } from './PeopleInfoElements';

const PeopleInfoContent = ({ data }: ICastData): React.ReactElement => {
  let gender = '';
  if (data.gender === '1') {
    gender = 'female';
  }
  if (data.gender === '2') {
    gender = 'male';
  }
  return (
    <MovieContentWrapper>
      <MovieDataColumn>
        <InfoWrapper>
          <Icon color="var(--color-text)" size="30px">
            <SiImdb />
          </Icon>
          <MovieInfo>
            id: {data.id} {gender}
          </MovieInfo>
        </InfoWrapper>
      </MovieDataColumn>
    </MovieContentWrapper>
  );
};
export default PeopleInfoContent;
