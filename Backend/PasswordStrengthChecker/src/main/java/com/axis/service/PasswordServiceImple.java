package com.axis.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.axis.entity.Password;

@Service
public class PasswordServiceImple implements PasswordService{

	
	
	public int CharType(char C) {
        int val;

        // Char is Uppercase Letter
        if ((int) C >= 65 && (int) C <= 90)
            val = 1;

        // Char is Lowercase Letter
        else if ((int) C >= 97 && (int) C <= 122) {
            val = 2;
        }

        // Char is Digit
        else if ((int) C >= 48 && (int) C <= 57) {
            val = 3;
        }

        // Char is Symbol
        else {
            val = 4;
        }

        return val;
    }
	
	private int scores;
	
	@Override
	public int passwordStrength(Password password) {
		String s = password.getPassword();
        boolean UsedUpper = false;
        boolean UsedLower = false;
        boolean UsedNum = false;
        boolean UsedSym = false;
        int type;
        int Score = 0;

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            type = CharType(c);

            if (type == 1) UsedUpper = true;
            if (type == 2) UsedLower = true;
            if (type == 3) UsedNum = true;
            if (type == 4) UsedSym = true;
        }

        if (UsedUpper) Score += 20;
        if (UsedLower) Score += 20;
        if (UsedNum) Score += 20;
        if (UsedSym) Score += 20;

        if (s.length() >= 8) Score += 10;
        if (s.length() >= 16) Score += 10;
        
        scores = 0;
        scores += Score;

        return Score;
	}

	@Override
	public int getScore() {
		// TODO Auto-generated method stub
		return scores;
	}
	
	

}
