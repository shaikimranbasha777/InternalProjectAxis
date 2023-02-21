package com.axis.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.axis.entity.Customer;

public interface CustomerRepository extends MongoRepository<Customer, Integer> {

}
