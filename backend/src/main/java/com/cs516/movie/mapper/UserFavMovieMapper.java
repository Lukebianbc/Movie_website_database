package com.cs516.movie.mapper;

import java.util.UUID;

import org.springframework.stereotype.Repository;

@Repository
public interface UserFavMovieMapper {
  void likeMovie(UUID userId, Integer movieId);
  
  void unlikeMovie(UUID userId, Integer movieId);

  boolean ifFavByMovieIdUserId(UUID userId, Integer movieId);
}
