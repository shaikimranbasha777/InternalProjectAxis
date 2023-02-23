package com.axis.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axis.entity.Password;
import com.axis.service.PasswordService;

@RestController
@RequestMapping("/checkstrength")
public class PasswordStrengthController {
	
	@Autowired
	PasswordService passwordService;
	
	@PostMapping("/password")
	ResponseEntity <Integer> passwordStrength(@RequestBody Password password){
		return new ResponseEntity<Integer>(passwordService.passwordStrength(password), HttpStatus.OK);
	}
	
}
