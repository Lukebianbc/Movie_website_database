package com.cs516.movie.controller;

import com.alibaba.fastjson.JSONObject;
import com.cs516.movie.Utils.Result;
import com.cs516.movie.Utils.ResultHelper;
import com.cs516.movie.domain.User;
import com.cs516.movie.service.MovieDetailService;
import com.cs516.movie.service.UserFavActorService;
import com.cs516.movie.service.UserFavMovieService;
import com.cs516.movie.service.UserRatingService;
import com.cs516.movie.service.UserReviewService;
import com.cs516.movie.service.UserService;
import com.cs516.movie.service.UserviewService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping(value = "/users")
public class UserController {
  @Autowired
  UserService userService;

  @Autowired
  UserRatingService userRatingService;

  @Autowired
  UserFavMovieService userFavMovieService;

  @Autowired
  UserReviewService userReviewService;

  @Autowired
  UserFavActorService userFavActorService;

  @Autowired
  MovieDetailService movieDetailService;

  @Autowired
  UserviewService userviewService;

  @PostMapping("/register")
  public Result createUser(@RequestBody JSONObject jsonParam) {
    String email = jsonParam.getString("email");
    String name = jsonParam.getString("name");
    String password = jsonParam.getString("password");
    if (this.userService.checkEmailUsed(email)) {
      return ResultHelper.failed("This email already existed.");
    } else {
      userService.saveUser(email, name, password);
      return ResultHelper.successful();
    }
  }

  @PostMapping("/login")
  public Result login(@RequestBody JSONObject jsonParam) {
    String email = jsonParam.getString("email");
    String password = jsonParam.getString("password");
    if (userService.checkUserExists(email, password)) {
      User user = userService.selectUserByEmail(email);
      userService.updateLastLogin();
      return ResultHelper.successful(user);
    } else {
      return ResultHelper.failed("Email does not exist or password is wrong.");
    }
  }

  @PostMapping("/changeName")
  public Result changeName(@RequestBody JSONObject jsonParam) {
    String userId = jsonParam.getString("userId");
    String name = jsonParam.getString("newName");
    Boolean flag = this.userService.updateName(userId, name);
    if (flag) {
      return ResultHelper.successful();
    }
    return ResultHelper.failed("The new name is same to the old one.");
  }

  @PostMapping("/changeEmail")
  public Result changeEmail(@RequestBody JSONObject jsonParam) {
    String userId = jsonParam.getString("userId");
    String email = jsonParam.getString("newEmail");
    Boolean flag = this.userService.updateEmail(userId, email);
    if (flag) {
      return ResultHelper.successful();
    }
    return ResultHelper.failed("The email is used.");
  }

  @PostMapping("/changePassword")
  public Result changePassword(@RequestBody JSONObject jsonParam) {
    String userId = jsonParam.getString("userId");
    String password = jsonParam.getString("password");
    Boolean flag = this.userService.updatePassword(userId, password);
    if (flag) {
      return ResultHelper.successful();
    }
    return ResultHelper.failed("The password is same to the old one.");
  }

  @PostMapping("/rateMovie")
  public Result rateMovie(@RequestBody JSONObject jsonParam) {
    String userId = jsonParam.getString("userId");
    Integer movieId = jsonParam.getInteger("movieId");
    Double rating = jsonParam.getDouble("rating");
    this.userRatingService.saveRating(userId, movieId, rating);
    return ResultHelper.successful();
  }
  
  @PostMapping("/likeMovie")
  public Result likeMovie(@RequestBody JSONObject jsonParam) {
    String userId = jsonParam.getString("userId");
    Integer movieId = jsonParam.getInteger("movieId");
    this.userFavMovieService.likeMovie(userId, movieId);
    return ResultHelper.successful();
  }

  @PostMapping("/unlikeMovie")
  public Result unlikeMovie(@RequestBody JSONObject jsonParam) {
    String userId = jsonParam.getString("userId");
    Integer movieId = jsonParam.getInteger("movieId");
    this.userFavMovieService.unlikeMovie(userId, movieId);
    return ResultHelper.successful();
  }

  @PostMapping("/reviewMovie")
  public Result reviewMovie(@RequestBody JSONObject jsonParam){
    String userId = jsonParam.getString("userId");
    Integer movieId = jsonParam.getInteger("movieId");
    String contents = jsonParam.getString("review");
    this.userReviewService.reviewMovie(userId, movieId, contents);
    return ResultHelper.successful();
  }

  @PostMapping("/likeActor")
  public Result likeActor(@RequestBody JSONObject jsonParam){
    String userId = jsonParam.getString("userId");
    Integer peopleId = jsonParam.getInteger("peopleId");
    userFavActorService.likeActor(userId, peopleId);
    return ResultHelper.successful();
  }

  
  @PostMapping("/unlikeActor")
  public Result unlikeActor(@RequestBody JSONObject jsonParam){
    String userId = jsonParam.getString("userId");
    Integer peopleId = jsonParam.getInteger("peopleId");
    userFavActorService.unlikeActor(userId, peopleId);
    return ResultHelper.successful();
  }

  @PostMapping("/ratedMovies")
  public Result selectUserRatedMovies(@RequestBody JSONObject jsonParam){
    String userId = jsonParam.getString("userId");
    return ResultHelper.successful(this.movieDetailService.selectUserRatedMovies(userId));
  }
  
  @PostMapping("/deleteRating")
  public Result deleteRating(@RequestBody JSONObject jsonParam){
    String userId = jsonParam.getString("userId");
    Integer movieId = jsonParam.getInteger("movieId");
    this.userRatingService.deleteRating(userId, movieId);
    return ResultHelper.successful();
  }

  @PostMapping("/reviewedMovies")
  public Result selectReviewedMovies(@RequestBody JSONObject jsonParam){
    String userId = jsonParam.getString("userId");
    return ResultHelper.successful(this.movieDetailService.selectUserReviewdMovies(userId));
  }

  @PostMapping("/deleteReview")
  public Result deleteReview(@RequestBody JSONObject jsonParam){
    String userId = jsonParam.getString("userId");
    Integer movieId = jsonParam.getInteger("movieId");
    this.userReviewService.deleteReview(userId, movieId);
    return ResultHelper.successful();
  }

  @PostMapping("saveView")
  public Result saveView(@RequestBody JSONObject jsonParam){
    String userId = jsonParam.getString("userId");
    Integer movieId = jsonParam.getInteger("movieId");
    this.userviewService.saveView(userId, movieId);
    return ResultHelper.successful();
  }
  
  @PostMapping("deleteView")
  public Result deleteView(@RequestBody JSONObject jsonParam){
    String userId = jsonParam.getString("userId");
    Integer movieId = jsonParam.getInteger("movieId");
    this.userviewService.deleteView(userId, movieId);
    return ResultHelper.successful();
  }

  @PostMapping("viewHistory")
  public Result selectUserViewedMovies(@RequestBody JSONObject jsonParam){
    String userId = jsonParam.getString("userId");
    return ResultHelper.successful(this.movieDetailService.selectUserViewedMovies(userId));
  }

  @PostMapping("recommendMovie")
  public Result selectRecommendedMovies(@RequestBody JSONObject jsonParam){
    String userId = jsonParam.getString("userId");
    return ResultHelper.successful(this.movieDetailService.selectUserRecommendedMovies(userId));
  }

  @PostMapping("fuzzySearch")
  public Result selectFuzzySearchedMovies(@RequestBody JSONObject jsonParam){
    String userId = jsonParam.getString("userId");
    String input = jsonParam.getString("input");
    return ResultHelper.successful(this.movieDetailService.selectFuzzySearchedMovies(userId, input));
  }

  @PostMapping("accurateSearch")
  public Result selectAccurateSearchedMovies(@RequestBody JSONObject jsonParam){
    String userId = jsonParam.getString("userId");
    String input = jsonParam.getString("input");
    return ResultHelper.successful(this.movieDetailService.selectAccurateSearchedMovies(userId, input));
  }

  @PostMapping("complexFilter")
  public Result selectComplexFilteredMovies(@RequestBody JSONObject jsonParam){
    String userId = jsonParam.getString("userId");
    String genre = jsonParam.getString("genre");
    String time = jsonParam.getString("time");
    String sort = jsonParam.getString("sort");
    return ResultHelper.successful(this.movieDetailService.selectComplexFilteredMovies(userId, genre, time, sort));
  }
}
