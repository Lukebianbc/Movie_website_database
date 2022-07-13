package com.cs516.movie.service;

import java.util.UUID;

import com.cs516.movie.mapper.UserFavMovieMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserFavMovieService {
  @Autowired
  UserFavMovieMapper userFavMovieMapper;

  public void likeMovie(String userId, Integer movieId){
    this.userFavMovieMapper.likeMovie(UUID.fromString(userId), movieId);
  }
  
  public void unlikeMovie(String userId, Integer movieId){
    this.userFavMovieMapper.unlikeMovie(UUID.fromString(userId), movieId);
  }

  public boolean ifFavByMovieIdUserId(String userId, Integer movieId){
    return this.userFavMovieMapper.ifFavByMovieIdUserId(UUID.fromString(userId), movieId);
  }
}
