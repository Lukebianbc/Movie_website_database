// @ts-nocheck
import React, { createContext, useState, useEffect } from 'react';
import { idText } from 'typescript';
// eslint-disable-next-line import/named
import { IChildren, IMoviesContext, Movie, Cast, User } from '../frontEndTypes';
import {
  fetchSearchedMovies,
  fetchAccSearchedMovies,
  fetchFilteredMovies,
  getFav,
  delFav,
  getTopRated,
  getRecommed,
  getTopPopular,
  getMovieDetail,
  delHistory,
  getHistory,
  getRated,
  delRated,
  delReviewed,
  getReviewed,
  addToView,
  getMovieCast,
  getSingleCast,
  addRated,
  addFav,
  addReview,
  addFavCast,
  getFavCasts,
  delFavCast,
} from '../util/contextFunctions';

export const MoviesContext = createContext<IMoviesContext | null>(null);
const baseUrl = 'http://vcm-25050.vm.duke.edu:8080';
const favoriteMoviesStorage = localStorage.getItem('movies')
  ? JSON.parse(localStorage.getItem('movies') || '')
  : [];
const singleMovieStorage = localStorage.getItem('movie')
  ? JSON.parse(localStorage.getItem('movie') || '')
  : {};
const searchedMoviesStorage = localStorage.getItem('searchedMovies')
  ? JSON.parse(localStorage.getItem('searchedMovies') || '')
  : [];
const ratedMoviesStorage = localStorage.getItem('ratedMovies')
  ? JSON.parse(localStorage.getItem('ratedMovies') || '')
  : [];
const reviewedMoviesStorage = localStorage.getItem('reviewedMovies')
  ? JSON.parse(localStorage.getItem('reviewedMovies') || '')
  : [];
const recommendMoviesStorage = localStorage.getItem('recommendMovies')
  ? JSON.parse(localStorage.getItem('recommendMovies') || '')
  : [];
const viewedMoviesStorage = localStorage.getItem('viewedMovies')
  ? JSON.parse(localStorage.getItem('viewedMovies') || '')
  : [];
const singleCastStorage = localStorage.getItem('cast')
  ? JSON.parse(localStorage.getItem('cast') || '')
  : [];
const favoriteCastsStorage = localStorage.getItem('casts')
  ? JSON.parse(localStorage.getItem('casts') || '')
  : [];
const userStorage = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user') || '')
  : [];
const posterBaseUrl = 'https://image.tmdb.org/t/p/w300';
const mapData = (res: any) => {
  return res.map((movie: IMovie) => {
    const {
      id,
      title,
      voteAverage,
      overview,
      posterPath,
      releaseDate,
      adult,
      budget,
      imdbId,
      runtime,
      revenue,
    } = movie;
    return {
      id,
      title,
      date: releaseDate,
      rating: voteAverage,
      resume: overview,
      picture: posterPath ? `${posterBaseUrl}${posterPath}` : undefined,
      adult,
      budget,
      imdbId,
      runtime,
      revenue,
      user_rating: 0,
    };
  });
};
const MoviesContextProvider = ({ children }: IChildren): React.ReactElement => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
  const [searchedMovies, setSearchedMovies] = useState(searchedMoviesStorage);
  const [favoriteMovies, setFavoriteMovies] = useState(favoriteMoviesStorage);
  const [ratedMovies, setRatedMovies] = useState(ratedMoviesStorage);
  const [reviewedMovies, setReviewedMovies] = useState(reviewedMoviesStorage);
  const [recommendMovies, setRecommendMovies] = useState(recommendMoviesStorage);
  const [viewedMovies, setViewedMovies] = useState(viewedMoviesStorage);
  const [singleMovie, setSingleMovie] = useState(singleMovieStorage);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [singleCast, setSingleCast] = useState(singleCastStorage);
  const [favoriteCasts, setFavoriteCasts] = useState(favoriteCastsStorage);
  const [movieCast, setMovieCast] = useState<Cast[]>([]);
  const [user, setUser] = useState(userStorage);
  useEffect(() => {
    getTopRated(user.user_id).then((results) => {
      setTopRatedMovies(results);
    });
    getTopPopular(user.user_id).then((results) => {
      setUpcomingMovies(results);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getSearchedMovies = async (userId: string, searchValue: string) => {
    fetchSearchedMovies(userId, searchValue).then((res) => {
      setSearchedMovies(res);
    });
  };

  const getAccSearchedMovies = async (userId: string, searchValue: string) => {
    fetchAccSearchedMovies(userId, searchValue).then((res) => {
      setSearchedMovies(res);
    });
  };

  const getFilteredMovies = async (userId: string, genre: string, time: string, sort: string) => {
    fetchFilteredMovies(userId, genre, time, sort).then((res) => {
      setSearchedMovies(res);
    });
  };

  const findMovieinArray = (array: Movie[], movieId: number) => {
    return array.find((item: Movie) => item.id === movieId);
  };

  const addToFavorites = (userId: string, movieId: number) => {
    addFav(userId, movieId).then((res) => {
      getFav(userId).then((res1) => {
        setFavoriteMovies(
          localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies') || '') : []
        );
      });
    });
  };

  const addFavoriteCast = (userId: string, castId: number) => {
    addFavCast(userId, castId).then((res) => {
      getFavCasts(userId).then((res1) => {
        setFavoriteCasts(
          localStorage.getItem('casts') ? JSON.parse(localStorage.getItem('casts') || '') : []
        );
      });
    });
  };
  const addToRated = (userId: string, movieId: number, rating: number) => {
    addRated(userId, movieId, rating).then((res) => {
      getRated(userId).then((res1) => {
        setRatedMovies(
          localStorage.getItem('ratedMovies')
            ? JSON.parse(localStorage.getItem('ratedMovies') || '')
            : []
        );
      });
    });
  };
  const addToReviewed = (userId: string, movieId: number, review: string) => {
    addReview(userId, movieId, review).then((res) => {
      getReviewed(userId).then((res1) => {
        setReviewedMovies(
          localStorage.getItem('reviewedMovies')
            ? JSON.parse(localStorage.getItem('reviewedMovies') || '')
            : []
        );
      });
    });
  };
  const showRated = (userId: text) => {
    if (userId !== undefined) {
      if (userId.length > 0) {
        getRated(userId).then((res) => {
          setRatedMovies(
            localStorage.getItem('ratedMovies')
              ? JSON.parse(localStorage.getItem('ratedMovies') || '')
              : []
          );
        });
      }
    }
  };
  const showViewed = (userId: text) => {
    if (userId !== undefined) {
      if (userId.length > 0) {
        getHistory(userId).then((res) => {
          setViewedMovies(
            localStorage.getItem('viewedMovies')
              ? JSON.parse(localStorage.getItem('viewedMovies') || '')
              : []
          );
        });
      }
    }
  };
  const showFavs = async (userId: text) => {
    if (userId !== undefined) {
      if (userId.length > 0) {
        getFav(userId).then((res) => {
          setFavoriteMovies(
            localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies') || '') : []
          );
        });
      }
    }
  };
  const showRecommend = async (userId: text) => {
    if (userId !== undefined) {
      if (userId.length > 0) {
        getRecommed(userId).then((res) => {
          setRecommendMovies(res);
        });
      }
    }
  };
  const showFavCasts = async (userId: text) => {
    if (userId !== undefined) {
      if (userId.length > 0) {
        getFavCasts(userId).then((res) => {
          setFavoriteCasts(
            localStorage.getItem('casts') ? JSON.parse(localStorage.getItem('casts') || '') : []
          );
        });
      }
    }
  };
  const showReviewed = async (userId: text) => {
    if (userId !== undefined) {
      if (userId.length > 0) {
        getReviewed(userId).then((res) => {
          setReviewedMovies(
            localStorage.getItem('reviewedMovies')
              ? JSON.parse(localStorage.getItem('reviewedMovies') || '')
              : []
          );
        });
      }
    }
  };
  const removeFromRated = (userId: string, movieId: number) => {
    delRated(userId, movieId).then((res) => {
      getRated(userId).then((res1) => {
        setRatedMovies(
          localStorage.getItem('ratedMovies')
            ? JSON.parse(localStorage.getItem('ratedMovies') || '')
            : []
        );
      });
    });
  };

  const removeFromFavorites = (userId: string, movieId: number) => {
    delFav(userId, movieId).then((res) => {
      getFav(userId).then((res1) => {
        setFavoriteMovies(
          localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies') || '') : []
        );
      });
    });
  };

  const removeFromFavoriteCasts = (userId: string, castId: number) => {
    delFavCast(userId, castId).then((res) => {
      getFavCasts(userId).then((res1) => {
        setFavoriteCasts(
          localStorage.getItem('casts') ? JSON.parse(localStorage.getItem('casts') || '') : []
        );
      });
    });
  };

  const removeFromReviewed = (userId: string, movieId: number) => {
    delReviewed(userId, movieId).then((res) => {
      getReviewed(userId).then((res1) => {
        setReviewedMovies(
          localStorage.getItem('reviewedMovies')
            ? JSON.parse(localStorage.getItem('reviewedMovies') || '')
            : []
        );
      });
    });
  };

  const removeFromViewed = (userId: string, movieId: number) => {
    delHistory(userId, movieId).then((res) => {
      setViewedMovies(
        localStorage.getItem('viewedMovies')
          ? JSON.parse(localStorage.getItem('viewedMovies') || '')
          : []
      );
    });
  };

  const getSingleMovieData = (userId: string, movieData: Movie) => {
    if (userId.length > 0) {
      getMovieDetail(userId, movieData.id).then((res) => {
        console.log(res);
        localStorage.setItem('movie', JSON.stringify(res));
        setSingleMovie(res);
        addToView(userId, movieData.id);
      });
    } else {
      setSingleMovie(movieData);
    }
  };

  const getCastData = (userId: string, castId: number) => {
    getSingleCast(userId, castId).then((res) => {
      console.log(res);
      localStorage.setItem('cast', JSON.stringify(res));
      setSingleCast(res);
    });
  };

  const getMovieCastData = (userId: string, movieId: number) => {
    getMovieCast(userId, movieId).then((res) => {
      setMovieCast(res);
    });
  };

  const getUserData = (userData: User) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };
  return (
    <MoviesContext.Provider
      value={{
        baseUrl,
        movieCast,
        singleCast,
        favoriteCasts,
        popularMovies,
        upcomingMovies,
        getSearchedMovies,
        getAccSearchedMovies,
        getFilteredMovies,
        getMovieCastData,
        searchedMovies,
        reviewedMovies,
        recommendMovies,
        viewedMovies,
        addToFavorites,
        addToReviewed,
        showRated,
        showFavs,
        showRecommend,
        showFavCasts,
        showViewed,
        showReviewed,
        addToRated,
        favoriteMovies,
        removeFromFavorites,
        removeFromFavoriteCasts,
        removeFromRated,
        removeFromReviewed,
        removeFromViewed,
        getSingleMovieData,
        singleMovie,
        topRatedMovies,
        ratedMovies,
        user,
        getUserData,
        getCastData,
        findMovieinArray,
        addFavoriteCast,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
