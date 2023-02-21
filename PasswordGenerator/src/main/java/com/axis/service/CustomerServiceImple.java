package com.axis.service;


import org.springframework.stereotype.Service;

import com.axis.entity.Customer;


@Service
public class CustomerServiceImple implements CustomerService {
	
	public final String UPPERCASE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	public final String LOWERCASE_LETTERS = "abcdefghijklmnopqrstuvwxyz";
	public final String NUMBERS = "1234567890";
	public final String SYMBOLS = "!@#$%^&*()-_=+\\/~?";
	
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
		
		return pass;
	}

}
