package com.axis.entity;

import org.springframework.data.mongodb.core.mapping.MongoId;

public class Password {
	
	@MongoId
	private int id;
	private String password;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Password() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Password(int id, String password) {
		super();
		this.id = id;
		this.password = password;
	}
	
	
	
}
