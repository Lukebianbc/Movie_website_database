package com.cs516.movie.service;

import java.util.UUID;

import com.cs516.movie.mapper.UserReviewMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserReviewService {
  @Autowired
  UserReviewMapper userReviewMapper;

  public String selectContentByUserIdAndMovieId(String userId, Integer movieId){
    return this.userReviewMapper.selectContentByUserIdAndMovieId(UUID.fromString(userId), movieId);
  }

  public void reviewMovie(String userId, Integer movieId, String contents){
    this.userReviewMapper.reviewMovie(UUID.fromString(userId), movieId, contents);
  }

  public void deleteReview (String userId, Integer movieId){
    userReviewMapper.deleteReview(UUID.fromString(userId), movieId);
  }
}
