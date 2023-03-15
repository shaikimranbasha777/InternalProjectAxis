package com.axis.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.entity.Customer;
import com.axis.entity.ResponsePassword;
import com.axis.repository.CustomerRepository;
import com.axis.repository.ResponsePasswordRepository;



@Service
public class CustomerServiceImple implements CustomerService {
	
	public final String UPPERCASE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	public final String LOWERCASE_LETTERS = "abcdefghijklmnopqrstuvwxyz";
	public final String NUMBERS = "1234567890";
	public final String SYMBOLS = "!@#$%^&*()-_=+\\/~?><";
	
	@Autowired
	CustomerRepository customerRepository;
	
	@Autowired
	ResponsePasswordRepository passwordRepsitory;
	
	ResponsePassword passwordEntity = new ResponsePassword();
	
	StringBuilder password;
	
	@Override
	public ResponsePassword generatePassword(Customer customer) {
		
		StringBuilder pool = new StringBuilder();
		
		if(customer.getIsUpperCaseInclude()) pool.append(UPPERCASE_LETTERS);
		
		if(customer.getIsLowerCaseInclude()) pool.append(LOWERCASE_LETTERS);
		
		if(customer.getIsNumbersInclude()) pool.append(NUMBERS);
		
		if(customer.getIsSpecialCharectersInclude()) pool.append(SYMBOLS);
		
		String str = pool.toString();
		
		String password = "";
		
		int alphabetLength = str.length();
		
		 int max = alphabetLength - 1;
	     int min = 0;
	     int range = max - min + 1;
		
		for(int i=0;i<customer.getPasswordLength();i++) {
			int index = (int) (Math.random() * range) + min;
            password += (str.charAt(index));
		}
		
		passwordEntity.setPassword(password);
		
		return passwordRepsitory.save(passwordEntity);
	}

}
