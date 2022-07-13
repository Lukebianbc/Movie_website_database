package com.cs516.movie.service;

import java.util.ArrayList;
import java.util.List;
import java.sql.Date;
import java.util.UUID;

import com.cs516.movie.VO.SingleCast;
import com.cs516.movie.VO.SingleMovie;
import com.cs516.movie.domain.MovieDetail;
import com.cs516.movie.domain.PeopleInfo;
import com.cs516.movie.mapper.MovieDetailMapper;
import com.cs516.movie.mapper.PeopleInfoMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MovieDetailService {
  @Autowired
  MovieDetailMapper movieDetailMapper;

  @Autowired
  UserReviewService userReviewService;

  @Autowired
  UserFavMovieService userFavMovieService;

  @Autowired
  UserRatingService userRatingService;

  @Autowired
  PeopleInfoMapper peopleInfoMapper;

  public List<MovieDetail> selectTop20Popular() {
    return movieDetailMapper.selectTop20Popular();
  }

  public List<MovieDetail> selectTop20Rated() {
    return movieDetailMapper.selectTop20Rated();
  }

  public List<SingleMovie> selectTop20Rated(String userId) {
    List<MovieDetail> movieDetails = movieDetailMapper.selectTop20Rated();
    List<SingleMovie> res = new ArrayList<>();
    for (MovieDetail m : movieDetails) {
      SingleMovie singleMovie = new SingleMovie();
      int movieId = m.getId();
      Integer fav = 0;

      if (userId != "") {
        if (userFavMovieService.ifFavByMovieIdUserId(userId, movieId)) {
          fav = 2;
        } else {
          fav = 1;
        }
        singleMovie.setReview(userReviewService.selectContentByUserIdAndMovieId(userId, movieId));
        singleMovie.setRating(userRatingService.selectRatingByUserIdAndMovieId(userId, movieId));
      }
      singleMovie.setFav(fav);
      singleMovie.setMovieDetail(m);
      res.add(singleMovie);
    }
    return res;
  }

  public List<MovieDetail> selectUserFavMovies(String userId) {
    return movieDetailMapper.selectUserFavMovies(UUID.fromString(userId));
  }

  public List<PeopleInfo> selectUserFavActors(String userId) {
    return movieDetailMapper.selectUserFavActors(UUID.fromString(userId));
  }

  public List<SingleMovie> selectTop20Popular(String userId) {
    List<MovieDetail> movieDetails = movieDetailMapper.selectTop20Popular();
    List<SingleMovie> res = new ArrayList<>();
    for (MovieDetail m : movieDetails) {
      SingleMovie singleMovie = new SingleMovie();
      int movieId = m.getId();
      Integer fav = 0;

      if (userId != "") {
        if (userFavMovieService.ifFavByMovieIdUserId(userId, movieId)) {
          fav = 2;
        } else {
          fav = 1;
        }
        singleMovie.setReview(userReviewService.selectContentByUserIdAndMovieId(userId, movieId));
        singleMovie.setRating(userRatingService.selectRatingByUserIdAndMovieId(userId, movieId));
      }
      singleMovie.setFav(fav);
      singleMovie.setMovieDetail(m);
      res.add(singleMovie);
    }
    return res;
  }

  public SingleMovie displaySingleMovie(String userId, Integer movieId) {
    SingleMovie res = new SingleMovie();
    MovieDetail movieDetail = this.movieDetailMapper.selectMovieByMovieId(movieId);
    Integer fav = 0;

    if (userId != "") {
      if (userFavMovieService.ifFavByMovieIdUserId(userId, movieId)) {
        fav = 2;
      } else {
        fav = 1;
      }
      res.setReview(userReviewService.selectContentByUserIdAndMovieId(userId, movieId));
      res.setRating(userRatingService.selectRatingByUserIdAndMovieId(userId, movieId));
    }
    res.setFav(fav);
    res.setMovieDetail(movieDetail);
    return res;
  }

  public SingleCast displaySingleCast(String userId, Integer peopleId) {
    SingleCast res = new SingleCast();
    PeopleInfo peopleInfo = this.peopleInfoMapper.selectCastByCastId(peopleId);
    if(userId!= ""){
      List<PeopleInfo> people = this.movieDetailMapper.selectUserFavActors(UUID.fromString(userId));
      if (userId != "") {
        if (people.contains(peopleInfo)) {
          res.setFav(2);
        } else{
          res.setFav(1);
        }
      }
    } else {
      res.setFav(0);
    }    
    res.setId(peopleInfo.getId());
    res.setName(peopleInfo.getName());
    res.setProfilePath(peopleInfo.getProfilePath());
    res.setGender(peopleInfo.getGender());
    return res;
  }

  public List<SingleMovie> selectUserRatedMovies(String userId) {
    List<SingleMovie> res = new ArrayList<>();
    List<MovieDetail> movieDetails = this.movieDetailMapper.selectUserRatedMovies(UUID.fromString(userId));
    for (MovieDetail movieDetail : movieDetails) {
      SingleMovie temp = new SingleMovie();
      int movieId = movieDetail.getId();
      Integer fav = 0;

      if (userId != "") {
        if (userFavMovieService.ifFavByMovieIdUserId(userId, movieId)) {
          fav = 2;
        } else {
          fav = 1;
        }
        temp.setReview(userReviewService.selectContentByUserIdAndMovieId(userId, movieId));
        temp.setRating(userRatingService.selectRatingByUserIdAndMovieId(userId, movieId));
      }
      temp.setFav(fav);
      temp.setMovieDetail(movieDetail);
      res.add(temp);
    }

    return res;
  }

  public List<SingleMovie> selectUserReviewdMovies(String userId){
    List<SingleMovie> res = new ArrayList<>();
    List<MovieDetail> movieDetails = this.movieDetailMapper.selectUserReviewdMovies(UUID.fromString(userId));
    for (MovieDetail movieDetail : movieDetails) {
      SingleMovie temp = new SingleMovie();
      int movieId = movieDetail.getId();
      Integer fav = 0;

      if (userId != "") {
        if (userFavMovieService.ifFavByMovieIdUserId(userId, movieId)) {
          fav = 2;
        } else {
          fav = 1;
        }
        temp.setReview(userReviewService.selectContentByUserIdAndMovieId(userId, movieId));
        temp.setRating(userRatingService.selectRatingByUserIdAndMovieId(userId, movieId));
      }
      temp.setFav(fav);
      temp.setMovieDetail(movieDetail);
      res.add(temp);
    }

    return res;
  }

  public List<SingleMovie> selectUserViewedMovies(String userId){
    List<SingleMovie> res = new ArrayList<>();
    List<MovieDetail> movieDetails = this.movieDetailMapper.selectUserViewedMovies(UUID.fromString(userId));
    for (MovieDetail movieDetail : movieDetails) {
      SingleMovie temp = new SingleMovie();
      int movieId = movieDetail.getId();
      Integer fav = 0;

      if (userId != "") {
        if (userFavMovieService.ifFavByMovieIdUserId(userId, movieId)) {
          fav = 2;
        } else {
          fav = 1;
        }
        temp.setReview(userReviewService.selectContentByUserIdAndMovieId(userId, movieId));
        temp.setRating(userRatingService.selectRatingByUserIdAndMovieId(userId, movieId));
      }
      temp.setFav(fav);
      temp.setMovieDetail(movieDetail);
      res.add(temp);
    }

    return res;
  }  

  public List<SingleMovie> selectUserRecommendedMovies(String userId){
    List<SingleMovie> res = new ArrayList<>();
    List<MovieDetail> movieDetails = this.movieDetailMapper.selectUserRecommendedMovies(UUID.fromString(userId));
    for (MovieDetail movieDetail : movieDetails) {
      SingleMovie temp = new SingleMovie();
      int movieId = movieDetail.getId();
      Integer fav = 0;

      if (userId != "") {
        if (userFavMovieService.ifFavByMovieIdUserId(userId, movieId)) {
          fav = 2;
        } else {
          fav = 1;
        }
        temp.setReview(userReviewService.selectContentByUserIdAndMovieId(userId, movieId));
        temp.setRating(userRatingService.selectRatingByUserIdAndMovieId(userId, movieId));
      }
      temp.setFav(fav);
      temp.setMovieDetail(movieDetail);
      res.add(temp);
    }

    return res;
  }  

  public List<SingleMovie> selectFuzzySearchedMovies(String userId, String input){
    List<SingleMovie> res = new ArrayList<>();
    List<MovieDetail> movieDetails = this.movieDetailMapper.selectFuzzySearchedMovies(UUID.fromString(userId), input);
    for (MovieDetail movieDetail : movieDetails) {
      SingleMovie temp = new SingleMovie();
      int movieId = movieDetail.getId();
      Integer fav = 0;

      if (userId != "") {
        if (userFavMovieService.ifFavByMovieIdUserId(userId, movieId)) {
          fav = 2;
        } else {
          fav = 1;
        }
        temp.setReview(userReviewService.selectContentByUserIdAndMovieId(userId, movieId));
        temp.setRating(userRatingService.selectRatingByUserIdAndMovieId(userId, movieId));
      }
      temp.setFav(fav);
      temp.setMovieDetail(movieDetail);
      res.add(temp);
    }

    return res;
  }  

  public List<SingleMovie> selectAccurateSearchedMovies(String userId, String input){
    List<SingleMovie> res = new ArrayList<>();
    List<MovieDetail> movieDetails = this.movieDetailMapper.selectAccurateSearchedMovies(UUID.fromString(userId), input);
    for (MovieDetail movieDetail : movieDetails) {
      SingleMovie temp = new SingleMovie();
      int movieId = movieDetail.getId();
      Integer fav = 0;

      if (userId != "") {
        if (userFavMovieService.ifFavByMovieIdUserId(userId, movieId)) {
          fav = 2;
        } else {
          fav = 1;
        }
        temp.setReview(userReviewService.selectContentByUserIdAndMovieId(userId, movieId));
        temp.setRating(userRatingService.selectRatingByUserIdAndMovieId(userId, movieId));
      }
      temp.setFav(fav);
      temp.setMovieDetail(movieDetail);
      res.add(temp);
    }

    return res;
  }  

  public List<SingleMovie> selectComplexFilteredMovies(String userId, String genre, String time, String sort){
    List<SingleMovie> res = new ArrayList<>();
    System.out.println( genre+ time.split(" ")[0] + time.split(" ")[2]+ sort.split(" ")[0]+sort.split(" ")[1]);

    List<MovieDetail> movieDetails = this.movieDetailMapper.selectComplexFilteredMovies(UUID.fromString(userId), genre, Date.valueOf(time.split(" ")[0]), Date.valueOf(time.split(" ")[2]), sort.split(" ")[0], sort.split(" ")[1]);
    for (MovieDetail movieDetail : movieDetails) {
      SingleMovie temp = new SingleMovie();
      int movieId = movieDetail.getId();
      Integer fav = 0;

      if (userId != "") {
        if (userFavMovieService.ifFavByMovieIdUserId(userId, movieId)) {
          fav = 2;
        } else {
          fav = 1;
        }
        temp.setReview(userReviewService.selectContentByUserIdAndMovieId(userId, movieId));
        temp.setRating(userRatingService.selectRatingByUserIdAndMovieId(userId, movieId));
      }
      temp.setFav(fav);
      temp.setMovieDetail(movieDetail);
      res.add(temp);
    }

    return res;
  }  
}
