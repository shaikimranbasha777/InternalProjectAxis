package com.axis.config;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.axis.entity.User;
import com.axis.repository.UserRepository;

public class UserDetailsServiceImpl implements UserDetailsService{

	private UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		User user = userRepository.findByUsername(username);
		
		if(user != null) {
			return new CustomerUserDetails(user);
		}
		throw new UsernameNotFoundException(username + "Username is not found");
		
	}

}
