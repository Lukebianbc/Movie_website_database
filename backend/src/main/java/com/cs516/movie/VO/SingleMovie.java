package com.cs516.movie.VO;

import com.cs516.movie.domain.MovieDetail;

public class SingleMovie {
  MovieDetail movieDetail;

  Integer fav; //0: not login, 1: not like, 2: like

  Double rating;

  String review;

  public MovieDetail getMovieDetail() {
    return movieDetail;
  }

  public void setMovieDetail(MovieDetail movieDetail) {
    this.movieDetail = movieDetail;
  }

  public Integer getFav() {
    return fav;
  }

  public void setFav(Integer fav) {
    this.fav = fav;
  }

  public Double getRating() {
    return rating;
  }

  public void setRating(Double rating) {
    this.rating = rating;
  }

  public String getReview() {
    return review;
  }

  public void setReview(String review) {
    this.review = review;
  }

  
}
