/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { IMovie, Movie, User, Cast, ICast } from '../frontEndTypes';

const baseUrl = 'https://api.themoviedb.org/3';
const posterBaseUrl = 'https://image.tmdb.org/t/p/w300';
const basebackendUrl = 'http://vcm-25050.vm.duke.edu:8080';
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
      date: releaseDate.substring(0, 10),
      rating: voteAverage,
      resume: overview,
      picture: `${posterBaseUrl}${posterPath}`,
      adult,
      budget,
      imdbId,
      runtime,
      revenue,
      user_rating: 0,
    };
  });
};

const mapData1 = (res: any) => {
  return res.map((movie: Movie) => {
    const {
      id,
      title,
      rating,
      resume,
      picture,
      date,
      adult,
      budget,
      imdb_id,
      runtime,
      revenue,
    } = movie;
    return {
      id,
      title,
      date: date.substring(0, 10),
      rating,
      resume,
      picture,
      adult,
      budget,
      imdb_id,
      runtime,
      revenue,
      user_rating: 0,
    };
  });
};

const mapData2 = (res: any) => {
  return res.map((cast: ICast) => {
    const { id, name, gender, profilePath } = cast;
    return {
      id,
      name,
      gender,
      profile_path: `${posterBaseUrl}${profilePath}`,
    };
  });
};

export const getTopRated = async (userId: string): Promise<Movie[] | []> => {
  const rate20Url = `${basebackendUrl}/movie/top20rated`;
  const options = {
    method: 'POST', // post
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // eslint-disable-next-line prettier/prettier
      'userId': userId,
    }),
  };
  try {
    const res1 = await (await fetch(rate20Url, options)).json();
    const arr1: Movie[] = [];
    Object.values(res1.data).forEach((json: any) => {
      const mov: Movie = {
        id: json.movieDetail.id,
        date: json.movieDetail.releaseDate.substring(0, 10),
        title: json.movieDetail.title,
        rating: json.movieDetail.voteAverage,
        resume: json.movieDetail.overview,
        adult: json.movieDetail.adult,
        budget: json.movieDetail.budget,
        imdb_id: json.movieDetail.imdbId,
        runtime: json.movieDetail.runtime,
        revenue: json.movieDetail.revenue,
        user_rating: json.rating,
        user_review: json.review,
        user_fav: json.fav,
        picture: `${posterBaseUrl}${json.movieDetail.posterPath}`,
      };
      arr1.push(mov);
    });
    return arr1;
  } catch (_) {
    return [];
  }
};

export const getTopPopular = async (userId: string): Promise<Movie[] | []> => {
  const pop20Url = `${basebackendUrl}/movie/top20popular`;
  const options = {
    method: 'POST', // post
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // eslint-disable-next-line prettier/prettier
      'userId': userId,
    }),
  };
  try {
    const res2 = await (await fetch(pop20Url, options)).json();
    const arr2: Movie[] = [];
    Object.values(res2.data).forEach((json: any) => {
      const mov: Movie = {
        id: json.movieDetail.id,
        date: json.movieDetail.releaseDate.substring(0, 10),
        title: json.movieDetail.title,
        rating: json.movieDetail.voteAverage,
        resume: json.movieDetail.overview,
        adult: json.movieDetail.adult,
        budget: json.movieDetail.budget,
        imdb_id: json.movieDetail.imdbId,
        runtime: json.movieDetail.runtime,
        revenue: json.movieDetail.revenue,
        user_rating: json.rating,
        user_review: json.review,
        user_fav: json.fav,
        picture: `${posterBaseUrl}${json.movieDetail.posterPath}`,
      };
      arr2.push(mov);
    });
    return arr2;
  } catch (_) {
    return [];
  }
};

export const setUserInfo = (id: string, email: string, name: string, pass: string): User => {
  const res: User = { user_id: id, user_name: name, user_email: email, user_pass: pass };
  return res;
};

export const getFav = async (userId: string) => {
  const favUrl = `${basebackendUrl}/movie/userFavMovies`;
  const options = {
    method: 'POST', // post
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // eslint-disable-next-line prettier/prettier
      'userId': userId,
    }),
  };
  const res = await fetch(favUrl, options);
  const json = await res.json();
  console.log(json);
  localStorage.setItem('movies', JSON.stringify(mapData1(mapData(json.data))));
};

export const addFav = async (userId: string, movie_id: number) => {
  const xhr = new XMLHttpRequest();
  const addFavUrl = `${basebackendUrl}/users/likeMovie`;
  const options = {
    method: 'POST', // post
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // eslint-disable-next-line prettier/prettier
      'userId': userId,
      // eslint-disable-next-line prettier/prettier
      'movieId': movie_id,
    }),
  };
  const res = await fetch(addFavUrl, options);
  alert('Successfully like movie');
};

export const delFav = async (userId: string, movie_id: string) => {
  const delFavUrl = `${basebackendUrl}/users/unlikeMovie`;
  const options = {
    method: 'POST', // post
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // eslint-disable-next-line prettier/prettier
      'userId': userId,
      // eslint-disable-next-line prettier/prettier
      'movieId': movie_id,
    }),
  };
  const res = await fetch(delFavUrl, options);
  alert('Successfully unlike');
};

export const getRated = async (userId: string) => {
  const ratedUrl = `${basebackendUrl}/users/ratedMovies`;
  const options = {
    method: 'POST', // post
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // eslint-disable-next-line prettier/prettier
      'userId': userId,
    }),
  };
  const res = await (await fetch(ratedUrl, options)).json();
  const arr2: Movie[] = [];
  Object.values(res.data).forEach((json: any) => {
    const mov: Movie = {
      id: json.movieDetail.id,
      date: json.movieDetail.releaseDate.substring(0, 10),
      title: json.movieDetail.title,
      rating: json.movieDetail.voteAverage,
      resume: json.movieDetail.overview,
      adult: json.movieDetail.adult,
      budget: json.movieDetail.budget,
      imdb_id: json.movieDetail.imdbId,
      runtime: json.movieDetail.runtime,
      revenue: json.movieDetail.revenue,
      user_rating: json.rating,
      user_review: json.review,
      user_fav: json.fav,
      picture: `${posterBaseUrl}${json.movieDetail.posterPath}`,
    };
    arr2.push(mov);
  });
  localStorage.setItem('ratedMovies', JSON.stringify(arr2));
};

export const addRated = async (userId: string, movie_id: number, rating: string) => {
  const xhr = new XMLHttpRequest();
  const addRatingUrl = `${basebackendUrl}/users/rateMovie`;
  const options = {
    method: 'POST', // post
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // eslint-disable-next-line prettier/prettier
      'userId': userId,
      // eslint-disable-next-line prettier/prettier
      'movieId': movie_id,
      // eslint-disable-next-line prettier/prettier
      'rating': rating
    }),
  };
  const res = await fetch(addRatingUrl, options);
  alert('Successfully rate movie');
};

export const delRated = async (userId: string, movie_id: string) => {
  const delRatingUrl = `${basebackendUrl}/users/deleteRating`;
  const options = {
    method: 'POST', // post
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // eslint-disable-next-line prettier/prettier
      'userId': userId,
      // eslint-disable-next-line prettier/prettier
      'movieId': movie_id,
    }),
  };
  const res = await fetch(delRatingUrl, options);
  alert('Successfully delete rating');
};

export const getReviewed = async (userId: string) => {
  const reviewedUrl = `${basebackendUrl}/users/reviewedMovies`;
  const options = {
    method: 'POST', // post
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // eslint-disable-next-line prettier/prettier
      'userId': userId,
    }),
  };
  const res = await (await fetch(reviewedUrl, options)).json();
  const arr2: Movie[] = [];
  Object.values(res.data).forEach((json: any) => {
    const mov: Movie = {
      id: json.movieDetail.id,
      date: json.movieDetail.releaseDate.substring(0, 10),
      title: json.movieDetail.title,
      rating: json.movieDetail.voteAverage,
      resume: json.movieDetail.overview,
      adult: json.movieDetail.adult,
      budget: json.movieDetail.budget,
      imdb_id: json.movieDetail.imdbId,
      runtime: json.movieDetail.runtime,
      revenue: json.movieDetail.revenue,
      user_rating: json.rating,
      user_review: json.review,
      user_fav: json.fav,
      picture: `${posterBaseUrl}${json.movieDetail.posterPath}`,
    };
    arr2.push(mov);
  });
  localStorage.setItem('reviewedMovies', JSON.stringify(arr2));
};

export const addReview = async (userId: string, movie_id: string, review: string) => {
  const addReviewUrl = `${basebackendUrl}/users/reviewMovie`;
  const options = {
    method: 'POST', // post
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // eslint-disable-next-line prettier/prettier
      'userId': userId,
      // eslint-disable-next-line prettier/prettier
      'movieId': movie_id,
      // eslint-disable-next-line prettier/prettier
      'review': review,
    }),
  };
  const res = await fetch(addReviewUrl, options);
  alert('Successfully review');
};

export const delReviewed = async (userId: string, movie_id: string) => {
  const delReviewUrl = `${basebackendUrl}/users/deleteReview`;
  const options = {
    method: 'POST', // post
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // eslint-disable-next-line prettier/prettier
      'userId': userId,
      // eslint-disable-next-line prettier/prettier
      'movieId': movie_id,
    }),
  };
  const res = await fetch(delReviewUrl, options);
  alert('Successfully delete review');
};

export const getMovieDetail = async (userId: string, movieId: string) => {
  const url = `${basebackendUrl}/movie/detail`;
  const options = {
    method: 'POST', // post
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // eslint-disable-next-line prettier/prettier
      'userId': userId,
      movieId,
    }),
  };
  const json = await (await fetch(url, options)).json();
  const mov: Movie = {
    id: json.data.movieDetail.id,
    date: json.data.movieDetail.releaseDate.substring(0, 10),
    title: json.data.movieDetail.title,
    rating: json.data.movieDetail.voteAverage,
    resume: json.data.movieDetail.overview,
    adult: json.data.movieDetail.adult,
    budget: json.data.movieDetail.budget,
    imdb_id: json.data.movieDetail.imdbId,
    runtime: json.data.movieDetail.runtime,
    revenue: json.data.movieDetail.revenue,
    user_rating: json.data.rating,
    user_review: json.data.review,
    user_fav: json.data.fav,
    picture: `${posterBaseUrl}${json.data.movieDetail.posterPath}`,
  };
  return mov;
};

export const delHistory = async (userId: string, movie_id: string) => {
  const delFavUrl = `${basebackendUrl}/users/deleteView`;
  const options = {
    method: 'POST', // post
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // eslint-disable-next-line prettier/prettier
      'userId': userId,
      // eslint-disable-next-line prettier/prettier
      'movieId': movie_id,
    }),
  };
  const res = await fetch(delFavUrl, options);
  alert('Successfully remove from history, reclick view history to see the update');
};

export const getHistory = async (userId: string) => {
  const viewedUrl = `${basebackendUrl}/users/viewHistory`;
  const options = {
    method: 'POST', // post
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // eslint-disable-next-line prettier/prettier
      'userId': userId,
    }),
  };
  const res = await (await fetch(viewedUrl, options)).json();
  const arr2: Movie[] = [];
  Object.values(res.data).forEach((json: any) => {
    const mov: Movie = {
      id: json.movieDetail.id,
      date: json.movieDetail.releaseDate.substring(0, 10),
      title: json.movieDetail.title,
      rating: json.movieDetail.voteAverage,
      resume: json.movieDetail.overview,
      adult: json.movieDetail.adult,
      budget: json.movieDetail.budget,
      imdb_id: json.movieDetail.imdbId,
      runtime: json.movieDetail.runtime,
      revenue: json.movieDetail.revenue,
      user_rating: json.rating,
      user_review: json.review,
      user_fav: json.fav,
      picture: `${posterBaseUrl}${json.movieDetail.posterPath}`,
    };
    arr2.push(mov);
  });
  console.log(arr2);
  localStorage.setItem('viewedMovies', JSON.stringify(arr2));
};

const GetJsonData = (userId: string, movieId: number) => {
  const json = {
    // eslint-disable-next-line prettier/prettier
      "userId": userId,
    // eslint-disable-next-line prettier/prettier
      "movieId": movieId,
  };
  const res = JSON.stringify(json);
  return res;
};

export const addToView = (userId: string, movieId: number) => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', `${basebackendUrl}/users/saveView`, true);
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.responseType = 'json';
  xhr.send(GetJsonData(userId, movieId));
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      // alert('Successfully added to view, exit and reload the movie to see the update');
    }
  };
};

export const getMovieCast = async (userId: string, movieId: number): Promise<Cast[] | []> => {
  const movCastUrl = `${basebackendUrl}/movie/casts`;
  const options = {
    method: 'POST', // post
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // eslint-disable-next-line prettier/prettier
      'userId': userId,
      // eslint-disable-next-line prettier/prettier
      'movieId': movieId,
    }),
  };
  try {
    const res = await (await fetch(movCastUrl, options)).json();
    const arr: Cast[] = [];
    console.log(res);
    Object.values(res.data).forEach((json: any) => {
      const people: Cast = {
        id: json.id,
        name: json.name,
        profile_path: `${posterBaseUrl}${json.profilePath}`,
        gender: '',
        userFav: 1,
      };
      if (json.gender === 2) people.gender = 'male';
      if (json.gender === 1) people.gender = 'female';
      arr.push(people);
    });
    console.log(arr);
    return arr;
  } catch (_) {
    return [];
  }
};

export const getSingleCast = async (userId: string, castId: number) => {
  const url = `${basebackendUrl}/movie/castDetail`;
  const options = {
    method: 'POST', // post
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // eslint-disable-next-line prettier/prettier
      'userId': userId,
      peopleId: castId,
    }),
  };
  const json = await (await fetch(url, options)).json();
  const cast: Cast = {
    id: json.data.id,
    name: json.data.name,
    gender: json.data.gender,
    profile_path: posterBaseUrl + json.data.profilePath,
    userFav: json.data.fav,
  };
  return cast;
};

export const addFavCast = async (userId: string, castId: number) => {
  const xhr = new XMLHttpRequest();
  const addFavCastUrl = `${basebackendUrl}/users/likeActor`;
  const options = {
    method: 'POST', // post
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // eslint-disable-next-line prettier/prettier
      'userId': userId,
      // eslint-disable-next-line prettier/prettier
      'peopleId': castId
    }),
  };
  const res = await fetch(addFavCastUrl, options);
  alert('Successfully like');
};

export const getFavCasts = async (userId: string) => {
  const favCastUrl = `${basebackendUrl}/movie/userFavActors`;
  const options = {
    method: 'POST', // post
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // eslint-disable-next-line prettier/prettier
      'userId': userId,
    }),
  };
  const res = await fetch(favCastUrl, options);
  const json = await res.json();
  console.log(JSON.stringify(mapData2(json.data)));
  localStorage.setItem('casts', JSON.stringify(mapData2(json.data)));
};

export const delFavCast = async (userId: string, castId: string) => {
  const delFavCastUrl = `${basebackendUrl}/users/unlikeActor`;
  const options = {
    method: 'POST', // post
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // eslint-disable-next-line prettier/prettier
      'userId': userId,
      // eslint-disable-next-line prettier/prettier
      'peopleId': castId,
    }),
  };
  const res = await fetch(delFavCastUrl, options);
  alert('Successfully unlike');
};

export const getRecommed = async (userId: string): Promise<Movie[] | []> => {
  const recUrl = `${basebackendUrl}/users/recommendMovie`;
  const options = {
    method: 'POST', // post
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // eslint-disable-next-line prettier/prettier
      'userId': userId,
    }),
  };
  try {
    const res1 = await (await fetch(recUrl, options)).json();
    const arr1: Movie[] = [];
    Object.values(res1.data).forEach((json: any) => {
      const mov: Movie = {
        id: json.movieDetail.id,
        date: json.movieDetail.releaseDate.substring(0, 10),
        title: json.movieDetail.title,
        rating: json.movieDetail.voteAverage,
        resume: json.movieDetail.overview,
        adult: json.movieDetail.adult,
        budget: json.movieDetail.budget,
        imdb_id: json.movieDetail.imdbId,
        runtime: json.movieDetail.runtime,
        revenue: json.movieDetail.revenue,
        user_rating: json.rating,
        user_review: json.review,
        user_fav: json.fav,
        picture: `${posterBaseUrl}${json.movieDetail.posterPath}`,
      };
      arr1.push(mov);
    });
    return arr1;
  } catch (_) {
    return [];
  }
};

export const fetchSearchedMovies = async (userId: string, input: string): Promise<Movie[] | []> => {
  const searchUrl = `${basebackendUrl}/users/fuzzySearch`;
  const options = {
    method: 'POST', // post
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // eslint-disable-next-line prettier/prettier
      'userId': userId,
      // eslint-disable-next-line prettier/prettier
      'input': input,
    }),
  };
  try {
    const res1 = await (await fetch(searchUrl, options)).json();
    const arr1: Movie[] = [];
    Object.values(res1.data).forEach((json: any) => {
      const mov: Movie = {
        id: json.movieDetail.id,
        date: json.movieDetail.releaseDate.substring(0, 10),
        title: json.movieDetail.title,
        rating: json.movieDetail.voteAverage,
        resume: json.movieDetail.overview,
        adult: json.movieDetail.adult,
        budget: json.movieDetail.budget,
        imdb_id: json.movieDetail.imdbId,
        runtime: json.movieDetail.runtime,
        revenue: json.movieDetail.revenue,
        user_rating: json.rating,
        user_review: json.review,
        user_fav: json.fav,
        picture: `${posterBaseUrl}${json.movieDetail.posterPath}`,
      };
      arr1.push(mov);
    });
    console.log(arr1);
    return arr1;
  } catch (_) {
    return [];
  }
};

export const fetchAccSearchedMovies = async (
  userId: string,
  input: string
): Promise<Movie[] | []> => {
  const searchUrl = `${basebackendUrl}/users/accurateSearch`;
  const options = {
    method: 'POST', // post
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // eslint-disable-next-line prettier/prettier
      'userId': userId,
      // eslint-disable-next-line prettier/prettier
      'input': input,
    }),
  };
  try {
    const res1 = await (await fetch(searchUrl, options)).json();
    const arr1: Movie[] = [];
    Object.values(res1.data).forEach((json: any) => {
      const mov: Movie = {
        id: json.movieDetail.id,
        date: json.movieDetail.releaseDate.substring(0, 10),
        title: json.movieDetail.title,
        rating: json.movieDetail.voteAverage,
        resume: json.movieDetail.overview,
        adult: json.movieDetail.adult,
        budget: json.movieDetail.budget,
        imdb_id: json.movieDetail.imdbId,
        runtime: json.movieDetail.runtime,
        revenue: json.movieDetail.revenue,
        user_rating: json.rating,
        user_review: json.review,
        user_fav: json.fav,
        picture: `${posterBaseUrl}${json.movieDetail.posterPath}`,
      };
      arr1.push(mov);
    });
    console.log(arr1);
    return arr1;
  } catch (_) {
    return [];
  }
};

export const fetchFilteredMovies = async (
  userId: string,
  genre: string,
  time: string,
  sort: string
): Promise<Movie[] | []> => {
  const filterUrl = `${basebackendUrl}/users/complexFilter`;
  const options = {
    method: 'POST', // post
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // eslint-disable-next-line prettier/prettier
      'userId': userId,
      // eslint-disable-next-line prettier/prettier
      'genre': genre,
      // eslint-disable-next-line prettier/prettier
      'time': time,
      // eslint-disable-next-line prettier/prettier
      'sort': sort,
    }),
  };
  console.log(options);
  try {
    const res1 = await (await fetch(filterUrl, options)).json();
    const arr1: Movie[] = [];
    Object.values(res1.data).forEach((json: any) => {
      const mov: Movie = {
        id: json.movieDetail.id,
        date: json.movieDetail.releaseDate.substring(0, 10),
        title: json.movieDetail.title,
        rating: json.movieDetail.voteAverage,
        resume: json.movieDetail.overview,
        adult: json.movieDetail.adult,
        budget: json.movieDetail.budget,
        imdb_id: json.movieDetail.imdbId,
        runtime: json.movieDetail.runtime,
        revenue: json.movieDetail.revenue,
        user_rating: json.rating,
        user_review: json.review,
        user_fav: json.fav,
        picture: `${posterBaseUrl}${json.movieDetail.posterPath}`,
      };
      arr1.push(mov);
    });
    console.log(arr1);
    return arr1;
  } catch (_) {
    return [];
  }
};
