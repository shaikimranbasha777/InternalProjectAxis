package com.axis.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.axis.entity.User;

public interface UserRepository extends JpaRepository<User, Integer>{
	User findByUsername(String username);
}
