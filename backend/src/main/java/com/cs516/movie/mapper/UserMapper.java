package com.cs516.movie.mapper;

import java.util.Date;

import com.cs516.movie.domain.User;

import org.springframework.stereotype.Repository;

@Repository
public interface UserMapper {
  void saveUser(String email, String name, String password, Date created_on);

  Boolean checkUserExists(String email, String password);

  Boolean checkEmailUsed(String email);

  User selectUserByEmail(String email);

  void updateLastLogin(Date date);

  User selectUserByUserId(String userId);

  Boolean updateName(String userId, String name);
  
  Boolean updateEmail(String userId, String email);

  Boolean updatePassword(String userId, String password);
}
