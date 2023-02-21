package com.axis.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.axis.entity.Password;

public interface PasswordRepository extends MongoRepository<Password, Integer> {

}
