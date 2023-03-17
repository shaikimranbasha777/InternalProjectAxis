package com.axis.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import com.axis.config.JwtTokenUtil;
import com.axis.model.JwtRequest;
import com.axis.model.JwtResponse;
import com.axis.model.UserDao;
import com.axis.model.UserDto;
import com.axis.service.JwtUserDetailsService;

@RestController
@CrossOrigin
@RequestMapping("/authentication")
public class JwtAuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private JwtUserDetailsService userDetailsService;

	@PostMapping("/login")
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {

		authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

		final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
		
		//UserDao user = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());

		final String token = jwtTokenUtil.generateToken(userDetails);

		return ResponseEntity.ok(new JwtResponse(token));
	}

	@PostMapping("/register")
	public ResponseEntity<?> saveUser(@RequestBody UserDto user) throws Exception {
		return ResponseEntity.ok(userDetailsService.save(user));
	}
	
	@GetMapping("/userInfo")
	public ResponseEntity<?> getUserInfo(Principal user){
		com.axis.model.UserDetails userObj = (com.axis.model.UserDetails) userDetailsService.loadUserByUsername(user.getName());
		
		UserDao userInfo = new UserDao();
		userInfo.setFullName(userObj.getFullName());
		userInfo.setEmail(userObj.getEmail());
		userInfo.setNumber(userObj.getnumber());
		userInfo.setUsername(userObj.getUsername());
		userInfo.setPassword(userObj.getPassword());
		
		return ResponseEntity.ok(userInfo);
	}

	
	private void authenticate(String username, String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}
}
