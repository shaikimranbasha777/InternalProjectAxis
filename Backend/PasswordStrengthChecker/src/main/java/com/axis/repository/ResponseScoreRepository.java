package com.axis.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.axis.entity.ResponseScore;

public interface ResponseScoreRepository extends MongoRepository<ResponseScore, Integer> {

}
