package com.axis.service;

import com.axis.entity.Customer;

public interface CustomerService {
	
	StringBuilder generatePassword(Customer customer);
	
}
