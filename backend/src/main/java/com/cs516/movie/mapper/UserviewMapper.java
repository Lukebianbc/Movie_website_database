package com.cs516.movie.mapper;

import java.util.Date;
import java.util.UUID;

import org.springframework.stereotype.Repository;

@Repository
public interface UserviewMapper {
  void saveView(UUID userId, int movieId, Date date);

  void deleteView(UUID userId, int movieId);
}
