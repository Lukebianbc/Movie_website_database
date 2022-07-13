package com.cs516.movie.domain;

public class UserRating {
  String userId;

  Integer movieId;

  Double rates;

  public String getUserId() {
    return userId;
  }

  public void setUserId(String userId) {
    this.userId = userId;
  }

  public Integer getMovieId() {
    return movieId;
  }

  public void setMovieId(Integer movieId) {
    this.movieId = movieId;
  }

  public Double getRates() {
    return rates;
  }

  public void setRates(Double rates) {
    this.rates = rates;
  }

  
}
