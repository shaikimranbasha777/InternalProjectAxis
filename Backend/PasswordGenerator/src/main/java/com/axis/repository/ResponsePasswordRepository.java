package com.axis.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.axis.entity.ResponsePassword;

public interface ResponsePasswordRepository extends MongoRepository<ResponsePassword, Integer>{

}
