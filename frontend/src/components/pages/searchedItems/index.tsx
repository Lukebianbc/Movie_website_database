import React from 'react';

import { SearchedContainer } from './SearchedItemsElements';
import SearchedMovieCards from './SearchedMovieCards';

const SearchedItems = (): React.ReactElement => {
  return (
    <SearchedContainer>
      <SearchedMovieCards />
    </SearchedContainer>
  );
};

export default SearchedItems;
