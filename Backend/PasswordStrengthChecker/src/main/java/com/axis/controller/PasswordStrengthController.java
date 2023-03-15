package com.axis.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axis.entity.Password;
import com.axis.entity.ResponseScore;
import com.axis.service.PasswordService;

@CrossOrigin
@RestController
@RequestMapping("/checkstrength")
public class PasswordStrengthController {
	
	@Autowired
	PasswordService passwordService;
	
	@PostMapping("/password")
	ResponseEntity <ResponseScore> passwordStrength(@RequestBody Password password){
		return new ResponseEntity<ResponseScore>(passwordService.passwordStrength(password), HttpStatus.OK);
	}
	
}
