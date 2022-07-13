package com.cs516.movie.controller;

import java.util.List;

import com.alibaba.fastjson.JSONObject;
import com.cs516.movie.Utils.Result;
import com.cs516.movie.Utils.ResultHelper;
import com.cs516.movie.VO.SingleCast;
import com.cs516.movie.VO.SingleMovie;
import com.cs516.movie.domain.MovieDetail;
import com.cs516.movie.domain.PeopleInfo;
import com.cs516.movie.service.MovieDetailService;
import com.cs516.movie.service.PeopleInfoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping(value = "/movie")
public class MovieController {
  @Autowired
  MovieDetailService movieDetailService;

  @Autowired
  PeopleInfoService peopleInfoService;

  @PostMapping(value = "/top20popular")
  public Result selectTop20Popular(@RequestBody JSONObject jsonParam){
    String userId = jsonParam.getString("userId");
    List<SingleMovie> res = this.movieDetailService.selectTop20Popular(userId);
    return ResultHelper.successful(res);
  }

  @PostMapping(value = "/top20rated")
  public Result selectTop20Rated(@RequestBody JSONObject jsonParam){
    String userId = jsonParam.getString("userId");
    List<SingleMovie> res = this.movieDetailService.selectTop20Rated(userId);
    return ResultHelper.successful(res);
  }

  @PostMapping("/casts")
  public Result getMovieCastsList(@RequestBody JSONObject jsonParam){
    Integer movieId = jsonParam.getInteger("movieId");
    String userId = jsonParam.getString("userId");
    List<SingleCast> res = this.peopleInfoService.getMovieCastsList(userId, movieId);
    return ResultHelper.successful(res);
  }
  
  @PostMapping("/userFavMovies")
  public Result getUserFavMovies(@RequestBody JSONObject jsonParam){
    String userId = jsonParam.getString("userId");
    List<MovieDetail> res = this.movieDetailService.selectUserFavMovies(userId);
    return ResultHelper.successful(res);
  }

  @PostMapping("/userFavActors")
  public Result getUserFavActors(@RequestBody JSONObject jsonParam){
    String userId = jsonParam.getString("userId");
    List<PeopleInfo> res = this.movieDetailService.selectUserFavActors(userId);
    return ResultHelper.successful(res);
  }

  @PostMapping("/detail")
  public Result displaySingleMovie(@RequestBody JSONObject jsonParam){
    String userId = jsonParam.getString("userId");
    Integer movieId = jsonParam.getInteger("movieId");
    return ResultHelper.successful(this.movieDetailService.displaySingleMovie(userId, movieId));
  }

  @PostMapping("/castDetail")
  public Result displaySingleCast(@RequestBody JSONObject jsonParam){
    String userId = jsonParam.getString("userId");
    Integer peopleId = jsonParam.getInteger("peopleId");
    return ResultHelper.successful(this.movieDetailService.displaySingleCast(userId, peopleId));
  }
}
