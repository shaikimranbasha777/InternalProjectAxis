package com.axis.service;

import com.axis.entity.Password;

public interface PasswordService {
	
	int passwordStrength(Password password);
}
