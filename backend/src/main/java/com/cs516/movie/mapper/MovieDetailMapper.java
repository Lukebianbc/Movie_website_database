package com.cs516.movie.mapper;

import java.util.List;
import java.util.UUID;
import java.sql.Date;
import com.cs516.movie.domain.MovieDetail;
import com.cs516.movie.domain.PeopleInfo;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieDetailMapper {
  List<MovieDetail> selectTop20Popular();

  List<MovieDetail> selectTop20Rated();

  List<MovieDetail> selectUserFavMovies(@Param("userId") UUID userId);

  List<PeopleInfo> selectUserFavActors(@Param("userId") UUID userId);

  MovieDetail selectMovieByMovieId(Integer movieId);

  List<MovieDetail> selectUserRatedMovies(@Param("userId") UUID userId);

  List<MovieDetail> selectUserReviewdMovies(@Param("userId") UUID userId);

  List<MovieDetail> selectUserViewedMovies(@Param("userId") UUID userId);
  
  List<MovieDetail> selectUserRecommendedMovies(@Param("userId") UUID userId);
  
  List<MovieDetail> selectFuzzySearchedMovies(@Param("userId") UUID userId, String input);

  List<MovieDetail> selectAccurateSearchedMovies(@Param("userId") UUID userId, String input);

  List<MovieDetail> selectComplexFilteredMovies(@Param("userId") UUID userId, @Param("genre")String genre, @Param("startTime")Date startTime, @Param("endTime")Date endTime, @Param("sort")String sort, @Param("seq")String seq);
  
}
