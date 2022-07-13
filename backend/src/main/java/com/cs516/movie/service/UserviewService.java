package com.cs516.movie.service;

import java.util.Date;
import java.util.UUID;

import com.cs516.movie.mapper.UserviewMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserviewService {
  @Autowired
  UserviewMapper userviewMapper;

  public void saveView(String userId, int movieId){
    this.userviewMapper.saveView(UUID.fromString(userId), movieId, new Date());
  }

  public void deleteView(String userId, int movieId){
    this.userviewMapper.deleteView(UUID.fromString(userId), movieId);
  }
}
