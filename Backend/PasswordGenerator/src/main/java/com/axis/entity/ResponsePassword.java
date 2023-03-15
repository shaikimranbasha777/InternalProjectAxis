package com.axis.entity;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Document(collection = "password")
public class ResponsePassword {
	
	private String password;
	public ResponsePassword() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public ResponsePassword(String password) {
		super();
		this.password = password;
	}
	
	
}
