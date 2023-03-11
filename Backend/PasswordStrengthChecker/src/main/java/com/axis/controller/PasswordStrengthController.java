package com.axis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axis.entity.Password;
import com.axis.service.PasswordService;

@CrossOrigin
@RestController
@RequestMapping("/checkstrength")
public class PasswordStrengthController {
	
	@Autowired
	PasswordService passwordService;
	
	@PostMapping("/password")
	ResponseEntity <Integer> passwordStrength(@RequestBody Password password){
		return new ResponseEntity<Integer>(passwordService.passwordStrength(password), HttpStatus.OK);
	}
	
	@GetMapping("/getscore")
	ResponseEntity<Integer> getScores(){
		return new ResponseEntity<Integer>(passwordService.getScore(), HttpStatus.OK);
	}
	
}
