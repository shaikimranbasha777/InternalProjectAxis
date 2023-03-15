package com.axis.service;

import com.axis.entity.Password;
import com.axis.entity.ResponseScore;

public interface PasswordService {
	
	ResponseScore passwordStrength(Password password);
}
