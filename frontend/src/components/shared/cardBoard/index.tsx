import React from 'react';

import { ICardBoardProps } from '../../../frontEndTypes';
import { CardsWrapper } from './CardBoardElements';

const CardBoard = (props: ICardBoardProps): React.ReactElement => {
  return <CardsWrapper>{props.children}</CardsWrapper>;
};

export default CardBoard;
