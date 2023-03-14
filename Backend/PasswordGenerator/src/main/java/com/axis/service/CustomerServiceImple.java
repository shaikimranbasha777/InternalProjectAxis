package com.axis.service;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.entity.Customer;
import com.axis.repository.CustomerRepository;



@Service
public class CustomerServiceImple implements CustomerService {
	
	public final String UPPERCASE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	public final String LOWERCASE_LETTERS = "abcdefghijklmnopqrstuvwxyz";
	public final String NUMBERS = "1234567890";
	public final String SYMBOLS = "!@#$%^&*()-_=+\\/~?";
	
	@Autowired
	CustomerRepository customerRepository;
	
	private List<StringBuilder> passwords = new ArrayList<>();
	StringBuilder password;
	
	@Override
	public StringBuilder generatePassword(Customer customer) {
		
		StringBuilder pool = new StringBuilder();
		
		if(customer.getIsUpperCaseInclude()) pool.append(UPPERCASE_LETTERS);
		
		if(customer.getIsLowerCaseInclude()) pool.append(LOWERCASE_LETTERS);
		
		if(customer.getIsNumbersInclude()) pool.append(NUMBERS);
		
		if(customer.getIsSpecialCharectersInclude()) pool.append(SYMBOLS);
		
		String str = pool.toString();
		
		StringBuilder pass = new StringBuilder("");
		
		int alphabetLength = str.length();
		
		 int max = alphabetLength - 1;
	     int min = 0;
	     int range = max - min + 1;
		
		for(int i=0;i<customer.getPasswordLength();i++) {
			int index = (int) (Math.random() * range) + min;
            pass.append(str.charAt(index));
		}
		
		
		//passwords = new ArrayList<>();
		passwords.add(pass);
		//password  = new StringBuilder("");
		//password.append(pass);
		
		return pass;
	}

	@Override
	public List<StringBuilder> getAllPasswords() {
		
		return passwords;
	}

}
