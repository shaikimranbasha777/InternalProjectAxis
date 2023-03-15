package com.axis.entity;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Score")
public class ResponseScore {
	
	private int score;

	public int getSocre() {
		return score;
	}

	public void setSocre(int socre) {
		this.score = socre;
	}

	public ResponseScore() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ResponseScore(int score) {
		super();
		this.score = score;
	}
	
}
