package com.cs516.movie.Utils;


import org.springframework.http.HttpStatus;

public class ResultHelper {
  public static Result successful() {
    return successful((Object) null);
  }

  public static Result successful(Object data) {
    Result result = new Result();
    result.setData(data);
    result.setMsg("success");
    return result;
  }

  public static Result failed(String message) {
    return failed(message, HttpStatus.INTERNAL_SERVER_ERROR);
}

  public static Result failed(String message, HttpStatus httpStatus) {
    Result result = new Result();
    result.setMsg(message);
    result.setData(null);
    return result;
  }
}
