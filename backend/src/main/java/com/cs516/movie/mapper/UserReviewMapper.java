package com.cs516.movie.mapper;

import java.util.UUID;

import org.springframework.stereotype.Repository;

@Repository
public interface UserReviewMapper {
  String selectContentByUserIdAndMovieId(UUID userId, Integer movieId);

  void reviewMovie(UUID userId, Integer movieId, String contents);
  
  void deleteReview(UUID userId, Integer movieId);
}
