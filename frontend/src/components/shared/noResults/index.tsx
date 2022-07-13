import React from 'react';
import { TitleWrapper } from './NoResultsElements';
import { Background } from '../Background';
import { INoResultsProps } from '../../../frontEndTypes';

const NoResults = (props: INoResultsProps): React.ReactElement => {
  const { children, cover } = props;
  return (
    <Background background={cover}>
      <TitleWrapper>{children}</TitleWrapper>
    </Background>
  );
};

export default NoResults;
