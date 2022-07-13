package com.cs516.movie.service;

import java.util.UUID;

import com.cs516.movie.mapper.UserRatingMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserRatingService {
  @Autowired
  UserRatingMapper userRatingMapper;
  
  public void saveRating(String userId, Integer movieId, Double ratings ){
    this.userRatingMapper.saveRating(UUID.fromString(userId), movieId, ratings);
  }

  public Double selectRatingByUserIdAndMovieId(String userId, Integer movieId){
    return this.userRatingMapper.selectRatingByUserIdAndMovieId(UUID.fromString(userId), movieId);
  }

  public void deleteRating (String userId, Integer movieId){
    userRatingMapper.deleteRating(UUID.fromString(userId), movieId);
  }
}
