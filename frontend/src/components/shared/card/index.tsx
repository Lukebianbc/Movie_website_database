import React from 'react';
import { ICardProps } from '../../../frontEndTypes';
import { CardContainer } from './CardElements';

const Card = ({ children, width, height, margin }: ICardProps): React.ReactElement => {
  return (
    <CardContainer width={width} height={height} margin={margin}>
      {children}
    </CardContainer>
  );
};

export default Card;
