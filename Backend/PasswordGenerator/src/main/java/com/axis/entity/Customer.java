package com.axis.entity;


import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Document(collection = "customer_details")
public class Customer {

	@MongoId
	private int id;
	private Boolean isUpperCaseInclude;
	private Boolean isLowerCaseInclude;
	private Boolean isNumbersInclude;
	private Boolean isSpecialCharectersInclude;
	private int passwordLength;
	
	public Customer(int id, Boolean isUpperCaseInclude, Boolean isLowerCaseInclude, Boolean isNumbersInclude,
			Boolean isSpecialCharectersInclude, int passwordLength) {
		super();
		this.id = id;
		this.isUpperCaseInclude = isUpperCaseInclude;
		this.isLowerCaseInclude = isLowerCaseInclude;
		this.isNumbersInclude = isNumbersInclude;
		this.isSpecialCharectersInclude = isSpecialCharectersInclude;
		this.passwordLength = passwordLength;
	}
	public int getPasswordLength() {
		return passwordLength;
	}
	public void setPasswordLength(int passwordLength) {
		this.passwordLength = passwordLength;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Boolean getIsUpperCaseInclude() {
		return isUpperCaseInclude;
	}
	public void setIsUpperCaseInclude(Boolean isUpperCaseInclude) {
		this.isUpperCaseInclude = isUpperCaseInclude;
	}
	public Boolean getIsLowerCaseInclude() {
		return isLowerCaseInclude;
	}
	public void setIsLowerCaseInclude(Boolean isLowerCaseInclude) {
		this.isLowerCaseInclude = isLowerCaseInclude;
	}
	public Boolean getIsNumbersInclude() {
		return isNumbersInclude;
	}
	public void setIsNumbersInclude(Boolean isNumbersInclude) {
		this.isNumbersInclude = isNumbersInclude;
	}
	public Boolean getIsSpecialCharectersInclude() {
		return isSpecialCharectersInclude;
	}
	public void setIsSpecialCharectersInclude(Boolean isSpecialCharectersInclude) {
		this.isSpecialCharectersInclude = isSpecialCharectersInclude;
	}
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
