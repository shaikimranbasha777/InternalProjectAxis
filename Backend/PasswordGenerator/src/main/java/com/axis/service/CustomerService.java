package com.axis.service;

import com.axis.entity.Customer;
import com.axis.entity.ResponsePassword;

public interface CustomerService {
	
	ResponsePassword generatePassword(Customer customer);
	
}
