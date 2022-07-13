package com.cs516.movie.mapper;

import java.util.List;

import com.cs516.movie.domain.PeopleInfo;

import org.springframework.stereotype.Repository;

@Repository
public interface PeopleInfoMapper {
  List<PeopleInfo> getMovieCastsList(String userId, Integer movieId);

  PeopleInfo selectCastByCastId(Integer castId);
}
