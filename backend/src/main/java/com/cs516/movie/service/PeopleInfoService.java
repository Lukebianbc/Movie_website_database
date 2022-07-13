package com.cs516.movie.service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import com.cs516.movie.VO.SingleCast;
import com.cs516.movie.domain.PeopleInfo;
import com.cs516.movie.mapper.PeopleInfoMapper;
import com.cs516.movie.mapper.MovieDetailMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PeopleInfoService {
  @Autowired
  PeopleInfoMapper peopleInfoMapper;

  @Autowired
  MovieDetailMapper movieDetailMapper;

  public List<SingleCast> getMovieCastsList(String userId, Integer movieId) {
    List<SingleCast> res = new ArrayList<>();
    List<PeopleInfo> cast = this.peopleInfoMapper.getMovieCastsList(userId, movieId);
    if (userId != ""){
      List<PeopleInfo> people = movieDetailMapper.selectUserFavActors(UUID.fromString(userId));
      for (PeopleInfo peopleInfo : cast) {
        SingleCast singleCast = new SingleCast();
        if (people.contains(peopleInfo)) {
          singleCast.setFav(2);
        } else {
          singleCast.setFav(1);
        }
        singleCast.setGender(peopleInfo.getGender());
        singleCast.setName(peopleInfo.getName());
        singleCast.setProfilePath(peopleInfo.getProfilePath());
        singleCast.setId(peopleInfo.getId());
        res.add(singleCast);
      }
    } else{
      for (PeopleInfo peopleInfo : cast) {
        SingleCast singleCast = new SingleCast();
        singleCast.setGender(peopleInfo.getGender());
        singleCast.setName(peopleInfo.getName());
        singleCast.setProfilePath(peopleInfo.getProfilePath());
        singleCast.setId(peopleInfo.getId());
        singleCast.setFav(0);
        res.add(singleCast);
      }
    }
    
    return res;
  }
}
