package com.axis.service;

import java.util.List;

import com.axis.entity.Customer;

public interface CustomerService {
	
	StringBuilder generatePassword(Customer customer);
	List<StringBuilder> getAllPasswords();
	
}
