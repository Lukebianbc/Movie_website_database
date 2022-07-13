import { ReactChildren, ReactElement, ReactChild, ReactNode } from 'react';

export interface IPropsChildren {
  children: React.ReactNode;
}

export interface Movie {
  id: number;
  date: string;
  title: string;
  rating: number;
  resume: string;
  picture?: string;
  adult: boolean;
  budget: number;
  imdb_id: string;
  runtime: number;
  revenue: number;
  user_rating: number;
  user_review: string;
  user_fav: number;
}

export interface Item {
  id: number;
  date: string;
  title: string;
  rating: number;
  resume: string;
  picture?: string;
  number?: number;
  adult: boolean;
  budget: number;
  imdb_id: string;
  runtime: number;
  revenue: number;
  user_rating: number;
}

export interface UserRating {
  movie_id: number;
  uuid: number;
  rates: number;
}

export interface User {
  user_id: string;
  user_name: string;
  user_email: string;
  user_pass: string;
}
export interface UserMovie {
  movie_id: number;
  uuid: number;
}

export interface UserActor {
  actor_id: number;
  uuid: number;
}

export interface UserHistory {
  movie_id: number;
  uuid: number;
  time: string;
}

export interface Genre {
  genre_id: number;
  genre_name: string;
}

export interface MovieGenre {
  genre_id: number;
  movie_id: number;
}

export interface MovieCast {
  genre_id: number;
  actor_id: number;
}

export interface Cast {
  id: number;
  name: string;
  gender: string;
  profile_path: string;
  userFav: number;
}

export interface IMovieData {
  data: Movie;
}

export interface ICastData {
  data: Cast;
}

export interface IMovieItem {
  data: Item;
}

export interface IMovie {
  id: number;
  title: string;
  voteAverage: string;
  overview: string;
  posterPath: string;
  releaseDate: string;
  adult: boolean;
  budget: number;
  imdbId: string;
  runtime: number;
  revenue: number;
  user_rating: number;
  user_review: string;
  user_fav: number;
}

export interface ICast {
  id: number;
  name: string;
  gender: string;
  profilePath: string;
  userFav: number;
}

export interface IMoviesContext {
  baseUrl: string;
  popularMovies: Movie[];
  searchedMovies: Movie[];
  favoriteMovies: Movie[];
  upcomingMovies: Movie[];
  topRatedMovies: Movie[];
  viewedMovies: Movie[];
  ratedMovies: Movie[];
  reviewedMovies: Movie[];
  recommendMovies: Movie[];
  rating: UserRating[];
  singleMovie: Movie;
  singleCast: Cast;
  movieCast: Cast[];
  favoriteCasts: Cast[];
  user: User;
  getSearchedMovies: (userId: string, searchValue: string) => void;
  getAccSearchedMovies: (userId: string, searchValue: string) => void;
  getFilteredMovies: (userId: string, genre: string, time: string, sort: string) => void;
  addToRated: (userId: string, movieId: number, rating: number) => void;
  addToReviewed: (userId: string, movieId: number, review: string) => void;
  removeFromFavorites: (userId: string, movieId: number) => void;
  removeFromFavoriteCasts: (userId: string, castId: number) => void;
  showRated: (userId: string) => void;
  showFavs: (userId: string) => void;
  showRecommend: (userId: string) => void;
  showFavCasts: (userId: string) => void;
  showReviewed: (userId: string) => void;
  showViewed: (userId: string) => void;
  addToFavorites: (userId: string, movieId: number) => void;
  removeFromReviewed: (userId: string, movieId: number) => void;
  removeFromViewed: (userId: string, movieId: number) => void;
  removeFromRated: (userId: string, movieId: number) => void;
  getSingleMovieData: (userId: string, movieData: Movie) => void;
  getMovieCastData: (userId: string, movieId: number) => void;
  getUserData: (userData: User) => void;
  getCastData: (userId: string, castId: number) => void;
  findMovieinArray: (array: Movie[], movieId: number) => number;
  addFavoriteCast: (userId: string, castId: number) => void;
}

export interface IChildren {
  children: React.ReactNode;
}

export interface IStyledButtonProps {
  bg: string;
  fontSize: string;
  width: string;
  height: string;
}

export interface IButtonWrapperProps {
  margin: string;
}

export interface IErrorProp {
  error: boolean;
}

export interface IButtonProps {
  disabled?: boolean | undefined;
  clicked?: (e?: any) => void | undefined;
  bg: string;
  fontSize: string;
  width: string;
  height: string;
  margin: string;
  children: ReactChildren | string;
}

export interface ICardContainer {
  margin: string;
  width: string;
  height: string;
}

export interface ICardProps {
  width: string;
  height: string;
  margin: string;
  children: React.ReactNode;
}

export interface ICardBoardProps {
  children: ReactNode;
}

export interface IFollowMeDataProps {
  id: number;
  text: string;
  icon: ReactElement;
  link: string;
}
export interface IFollowMeData {
  data: IFollowMeDataProps;
}

export interface IIconProps {
  color: string;
  size: string;
  children: React.ReactElement;
}

export interface ILayoutProps {
  children: React.ReactElement;
}

export interface INavItemProps {
  sidebar: boolean;
  closeMenu: () => void;
}

export interface IInfoCardProps {
  data: {
    id: number;
    title: string;
    text: string;
    icon: React.ReactElement;
  };
}
export interface IMovieBackground {
  cover: any;
}

export interface IBackgroundProps {
  background: string;
  height?: string;
  light?: string;
}

export interface INoResultsProps {
  cover: string;
  children?: React.ReactNode;
}

export interface IFavoritesTrashcanProps {
  isVisible: boolean;
}
export interface ISearchedBlurBlack {
  cover: string;
}
export interface IFormIconProp {
  children: JSX.Element;
}
