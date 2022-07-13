package com.cs516.movie.service;

import java.util.Date;

import com.cs516.movie.domain.User;
import com.cs516.movie.mapper.UserMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
  @Autowired
  UserMapper usersMapper;

  public void saveUser(String email, String name, String password){
    Date created_on = new Date();
    this.usersMapper.saveUser(email, name, password, created_on);
  }

  public Boolean checkUserExists(String email, String password){
    return this.usersMapper.checkUserExists(email, password);
  }
  public Boolean checkEmailUsed(String email){
    return this.usersMapper.checkEmailUsed(email);
  }

  public User selectUserByEmail(String email){
    return this.usersMapper.selectUserByEmail(email);
  }

  public User selectUserByUserId(String userId){
    return this.usersMapper.selectUserByUserId(userId);
  }

  public void updateLastLogin(){
    Date date = new Date();
    this.usersMapper.updateLastLogin(date);
  }

  public Boolean updateName(String userId, String name){
    User user = this.selectUserByUserId(userId);
    if (name.equals(user.getName())){
      return false;
    }
    this.usersMapper.updateName(userId, name);
    return true;
  }

  public Boolean updateEmail(String userId, String email){
    if (this.usersMapper.checkEmailUsed(email)){
      return false;
    }
    this.usersMapper.updateEmail(userId, email);
    return true;
  }

  public Boolean updatePassword(String userId, String password){
    User user = this.selectUserByUserId(userId);
    if (password.equals(user.getPassword())){
      return false;
    }
    this.usersMapper.updatePassword(userId, password);
    return true;
  }
}
