package com.axis.service;

import java.util.List;

import com.axis.entity.Password;

public interface PasswordService {
	
	int passwordStrength(Password password);
	int getScore();
}
