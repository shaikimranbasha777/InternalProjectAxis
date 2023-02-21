package com.axis.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axis.entity.User;
import com.axis.repository.UserRepository;

@RestController
@RequestMapping("/passwodgenerator")
public class UserController {
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	BCryptPasswordEncoder passwordEncoder;
	
	@PostMapping("/register")
	public String register(@RequestBody User userDetails) {
		
		userRepository.save(userDetails);
		
		return "user added sucssfullly";
	}
	
	@PostMapping("/login")
	public String addUser(@RequestBody User user) {
		
		String pwd = user.getPassword();
		String encryptedPwd = passwordEncoder.encode(pwd);
		user.setPassword(encryptedPwd);
		userRepository.save(user);
		
		return "User loged in Sussesfully";
	}
	
	
	
}