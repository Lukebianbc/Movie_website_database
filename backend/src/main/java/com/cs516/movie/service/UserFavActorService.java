package com.cs516.movie.service;

import java.util.UUID;

import com.cs516.movie.mapper.UserFavActorMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserFavActorService {
  @Autowired
  UserFavActorMapper userFavActorMapper;

  public void likeActor(String userId, Integer peopleId){
    this.userFavActorMapper.likeActor(UUID.fromString(userId), peopleId);
  }

  public void unlikeActor(String userId, Integer peopleId){
    this.userFavActorMapper.unlikeActor(UUID.fromString(userId), peopleId);
  }
}
