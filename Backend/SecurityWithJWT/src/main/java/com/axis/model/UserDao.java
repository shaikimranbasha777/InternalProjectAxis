package com.axis.model;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.Email;

@Entity
@Table(name = "user")
public class UserDao {
    public UserDao() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column
    private String fullName;
    @Column
    private String email;
    @Column
    private Long number;
    @Column
    private String username;
    @Column
    @JsonIgnore
    private String password;

    public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Long getNumber() {
		return number;
	}

	public void setNumber(Long number) {
		this.number = number;
	}

	public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

	@Override
	public String toString() {
		return "UserDao [id=" + id + ", fullName=" + fullName + ", email=" + email + ", number=" + number
				+ ", username=" + username + ", password=" + password + "]";
	}

	public UserDao(long id, String fullName, String email, Long number, String username, String password) {
		super();
		this.id = id;
		this.fullName = fullName;
		this.email = email;
		this.number = number;
		this.username = username;
		this.password = password;
	}

}

