package com.cs516.movie.mapper;

import java.util.UUID;

import org.springframework.stereotype.Repository;

@Repository
public interface UserRatingMapper {
  void saveRating(UUID userId, Integer movieId, Double ratings );

  Double selectRatingByUserIdAndMovieId(UUID userId, Integer movieId);

  void deleteRating(UUID userId, Integer movieId);
}
