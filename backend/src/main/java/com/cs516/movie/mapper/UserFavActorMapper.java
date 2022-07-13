package com.cs516.movie.mapper;

import java.util.UUID;

import org.springframework.stereotype.Repository;

@Repository
public interface UserFavActorMapper {

  void likeActor(UUID userId, Integer peopleId);

  void unlikeActor(UUID userId, Integer peopleId);
}
