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

import com.axis.entity.Customer;
import com.axis.service.CustomerService;

@CrossOrigin
@RestController
@RequestMapping("/generate")
public class CustomerController {
		
	@Autowired
	CustomerService customerService;
	
	
	@PostMapping("/password")
	ResponseEntity<StringBuilder> generatePassword(@RequestBody Customer customer){
		return new ResponseEntity<StringBuilder>(customerService.generatePassword(customer), HttpStatus.OK);
	}
	
	@GetMapping("/getAll")
	ResponseEntity<List<StringBuilder>> getAllPaswords(){
		return new ResponseEntity<List<StringBuilder>>(customerService.getAllPasswords(), HttpStatus.OK);
	}
	
}
